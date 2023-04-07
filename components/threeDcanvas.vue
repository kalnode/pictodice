<template>
    <div id="threeDcanvas" class="w-full h-full relative flex justify-center">
        <canvas id="canvas" class="relative z-10"></canvas>
        <!--
        <div class="absolute top-1 left-1 z-50">
            <div @click="throwDice()" class="inline-block cursor-pointer p-2 bg-white rounded-full hover:bg-gray-100">Roll</div>
            <div>Score: <span id="score-result"></span></div>
        </div>
        -->

        <!-- BUTTON: ROLL -->
        <transition name="fade">
            <div v-if="!store.rolling" class="absolute mb-6 pointer-events-auto z-50 flex justify-center"
            :style="'bottom:'+ (store.safeAreaInset.bottom+store.safeAreaPadding) +'px'">
                <div @click="throwDice()" class="p-4 px-8 rounded-full bg-white hover:bg-gray-100 text-teal-800 hover:scale-105 transition cursor-pointer">ROLL</div>
                <div class="absolute text-black text-center" style="top:-50%">Score: {{scoreResult}}</div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { usePhotodiceAppStore } from '~/stores/app'

import * as THREE from 'three'
import * as CANNON from 'cannon-es'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
//import { MapControls } from "three/examples/jsm/controls/OrbitControls";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils"

// TODO: Convert this component to typescript, and make use of these interfaces
//import { Die, DieState, DiceSet } from '~/stores/app'

const store = usePhotodiceAppStore()

let containerEl, canvasEl, container, renderer, scene, camera, mesh_classicDice, physicsWorld, controls, rollTimer


// TODO: Make this typescript
const props = defineProps({
    Dice: Object
})

const fov = 30 // Lower = shallow perspective (easier on eyes, less "3d"); Higher = deep perspective (harsh, more "3d")
const floorSize = 100 // Arbitrary inner world dimensions; "100" is a nice round number that's better for troubleshooting and head-math. Could be anything, like "1920" (e.g. browser viewport).
const diceArray = []

const scoreResult = ref()

const diceParams = {
    // GENERAL
    //currentNumDice: 8, // TODO: We should set limit between 1 and 8
    numDice: { current: 2, min: 1, max: 8 },
    scale: 10, // Scale baseline; we adjust this later according to viewport real estate

    // TODO: Setup system such that, in the same viewport, user has option to make fewer-dice scale larger. For instance, 2 dice can be much larger than a 8.

    // GEOMETRY
    segments: 20, // Detail in cube mesh. Also affects holes for classic dice. e.g. 20 = holes start looking angular.
    segments_ClassicDice: 40,
    edgeRadius: 0.07,

    // TODO: Make notches optional and only available for classic dice. All other dice facings should be flat.
    notchRadius: 0.12,
    notchDepth: 0.1,

}

const floor = {
    mesh: null,
    physicsBody: null
}

const walls = {
    meshes: [],
    physicsBodies: []
}


onMounted ( () => {

    containerEl = document.getElementById("threeDcanvas")
    canvasEl = document.getElementById("canvas")

    /*
    container = {
        width: containerEl.clientWidth,
        height: containerEl.clientHeight,
        aspect: containerEl.clientWidth / containerEl.clientHeight
    }
    */

    updateContainer()
    initPhysics()
    initScene()
    updateScene()

    //window.addEventListener("resize", updateScene)

    window.addEventListener("resize", debounceKal( (e) => {
        updateScene()
    }, 300))

    renderScene()

    throwDice()

})

// =================================
// FUNCTIONS
// =================================

function debounceKal (func, time) {
    var time = time || 100
    var timer
    return function (event) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(func, time, event)
    }
}


function updateContainer() {
    container = {
        width: containerEl.clientWidth,
        height: containerEl.clientHeight,
        aspect: containerEl.clientWidth / containerEl.clientHeight
    }

    // SET DICE SCALE
    // Based on measurement of fitting maximum number of dice in the smallest dimension
    // plus some padding of say 10%
    let smallestDistance = Math.min(floorSize * container.aspect, floorSize) //Math.min(container.width, container.height)
    let maximumSize = (smallestDistance - ((80 / 100) * smallestDistance))
    let calculatedScale = (smallestDistance - ((10 / 100) * smallestDistance)) / (diceParams.numDice.current)
    console.log("container smallestDistance is: %O", smallestDistance)
    console.log("maximumSize is: %O", maximumSize)
    console.log("calculatedScale: %O", calculatedScale)
    diceParams.scale = Math.min(calculatedScale, maximumSize) // (smallestDistance - ((10 / 100) * smallestDistance))
    //console.log("dice scale is: %O", diceParams.scale)
} 

async function initScene() {

    // SCENE
    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: canvasEl
    })
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setSize(container.width, container.height)

    // TODO: Look into setPixelRatio esp when it comes to mobile screens
    //renderer.setPixelRatio(window.devicePixelRatio)
    scene = new THREE.Scene()


    // CAMERA
    camera = new THREE.PerspectiveCamera(30, container.width / container.height, 1, 2000)
    camera.position.set(0, 1, 0) // TODO: Why "1" here? If we do all zero's, scene is blank (until first interaction with orbit controls)
    //camera.lookAt(0, 0, 0)
    //camera.position.set(2, 4, 10).multiplyScalar(7)
    //camera.up.set(0, 0, -1)

    // CONTROLS
    //orbit = new MapControls(camera, canvasEl)
    //orbit.enableDamping = true
    controls = new OrbitControls(camera, renderer.domElement)


    // STATS
    /*
    stats = new Stats()
    stats.domElement.style.position = "absolute"
    stats.domElement.style.bottom = "0px"
    stats.domElement.style.zIndex = 100
    containerEl.appendChild(stats.domElement)
    */


    // WORLD
    setLighting()
    //createRoom()
    //createSkybox()

    // CREATE CLASSIC MESH
    // One-time mesh creation for:
    // 1. No props passed to this component, so we assume classic dice desired
    // 2. Any die in the passed dice set is marked as classic
    // TODO: Create a static mesh and import it, rather than run this function
    if (!props.Dice || props.Dice.filter(x => x.type == 'classic')) {
        mesh_classicDice = await createDiceMesh(true)
    }

}

async function createDice() {

    console.log("creating dice")

    //console.log("createDice props.Dice %O", props.Dice)

    if (props && props.Dice && props.Dice.length > 0) {
        for (let i = 0; i < props.Dice.length; i++) {
            //let newDie = createDiceGroup(props.Dice[i])
            diceArray.push(createDiceGroup(props.Dice[i]))
            addDiceEvents(diceArray[i])
        }

    } else {
        for (let i = 0; i < diceParams.numDice.current; i++) {

            console.log("olddice push %O", i)
            diceArray.push(createDiceGroup())
            addDiceEvents(diceArray[i])
        }
    }
}

function initPhysics() {
    physicsWorld = new CANNON.World({
        allowSleep: true,
        gravity: new CANNON.Vec3(0, -800, 0)
    })

    /*
    var slipperyMat = new CANNON.Material()
    var friction = 0.0
    var restitution = 1
    var slipperyContact = new CANNON.ContactMaterial(slipperyMat,slipperyMat,friction,restitution)
    */
    //world.addContactMaterial(slipperyContact)
    

    //physicsWorld.defaultContactMaterial.friction = 1
    physicsWorld.defaultContactMaterial.restitution = 0.2
    // physicsWorld.broadphase = new CANNON.NaiveBroadphase()
    // physicsWorld.solver.iterations = 16
}


// RENDERER WITH FPS LIMITER

var frameLengthMS = 1000/60;//60 fps
var previousTime = 0;

function renderScene(timestamp) {

     if (timestamp - previousTime > frameLengthMS){

        physicsWorld.fixedStep()

        // Sync dice mesh and dice physics-body for each dice
        for (const dice of diceArray) {
            dice.mesh.position.copy(dice.body.position)
            dice.mesh.quaternion.copy(dice.body.quaternion)
        }

        // Update scene (?)
        renderer.render(scene, camera)

        previousTime = timestamp
    }

    requestAnimationFrame(renderScene)

}

/*
var frameLengthMS = 1000/60;//60 fps
var previousTime = 0;

function render(timestamp){
  if(timestamp - previousTime > frameLengthMS){
       drawSomething();
    previousTime = timestamp;
  }
  requestAnimationFrame(render);
}
*/

async function updateScene() {

    updateContainer()
    camera.aspect = container.aspect
    await clearScene()
    await createRoom()
    await createDice()

    // TODO: We're using an identical calculation here, but it seems to work. Why? Is this lucky coincidence, or is it actually proper?
    if ( container.width < container.height ) {
        //this.camera.position.z = frameSize.x / this.camera.aspect / (2 * Math.tan(this.camera.fov / 2 * (Math.PI / 180)))
        camera.position.y = ((100 * container.aspect) / camera.aspect) / (2 * Math.tan(fov / 2 * (Math.PI / 180)))
        //camera.position.y = (100 / camera.aspect) / (2 * Math.tan(fov / 2 * (Math.PI / 180)))

    } else {
        //this.camera.position.z = frameSize.y / (2 * Math.tan(this.camera.fov / 2 * (Math.PI / 180)))

        //WORKS
        //camera.position.y = ((100 * container.aspect) / camera.aspect) / (2 * Math.tan(fov / 2 * (Math.PI / 180)))

        //WORKS
        //camera.position.y = ((100 * container.aspect) / camera.aspect) / (2 * Math.tan(fov / 2 * (Math.PI / 180)))

        //camera.position.y = (100 / camera.aspect) / (2 * Math.tan(fov / 2 * (Math.PI / 180)))
        camera.position.y = ((100 * container.aspect) / camera.aspect) / (2 * Math.tan(fov / 2 * (Math.PI / 180)))
    }
    //camera.position.z = 0


    camera.updateProjectionMatrix()
    renderer.setSize(container.width, container.height)
    //renderer.setPixelRatio(window.devicePixelRatio);

    throwDice()

}

function setLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const topLight = new THREE.PointLight(0xffffff, 0.5)
    topLight.position.set(0, 150, 20)
    topLight.castShadow = true
    topLight.shadow.mapSize.width = 2048
    topLight.shadow.mapSize.height = 2048
    topLight.shadow.camera.near = 80
    topLight.shadow.camera.far = 400
    scene.add(topLight)
}

function rebuildRoom() {
    //let floorWidth = floorSize * container.aspect
    //let floorHeight = floorSize

    //floor.mesh.scale.set(floorWidth,0,floorHeight)
    
    /*
    floor.mesh.geometry = {
        width: floorWidth,
        height: floorHeight
    }
    */
    //floor.mesh.scale.set(floorWidth, floorHeight, 1)

    //floor.mesh.updateMatrix()
}


function clearScene() {

    console.log("clearScene !!!!!!!!!!!!!!!!")

    return new Promise ( async (resolve, reject) => {
        
        let objects = scene.children.filter(x => x.appClass == 'room' || x.appClass == 'dice')

        objects.forEach( async object => {

            //if (!(object instanceof THREE.Object3D)) return;

            if (object.appClass == 'room' || object.appClass == 'dice') {

                // Remove geometries to free GPU resources
                if (object.geometry) await object.geometry.dispose()

                // Remove materials to free GPU resources
                if (object.material) {
                    if (object.material instanceof Array) {
                        await object.material.forEach(material => material.dispose())
                    } else {
                        await object.material.dispose()
                    }
                }

                // Remove object from scene
                await scene.remove(object) // OR object.removeFromParent()
            }
        })

        physicsWorld.bodies.forEach( async object => {

            if (object.appClass == 'room' || object.appClass == 'dice') {

                await physicsWorld.removeBody(object)
                //physicsWorld.removeBody
                //object.world.remove()
            }

        })


        resolve()

        //scene.clear(); // Remove all other object children that aren't Object3D instance e.g DirectionalLight

        // Remove any registered listeners
        //domTarget.removeEventListener("pointermove", onPointerMove);
        //window.removeEventListener("resize", onWindowResize);
        //domTarget.removeChild(renderer.domElement);

        // Manually clear webgl instance/context and free up CPU memory
        /*
        renderer.renderLists.dispose();
        renderer.forceContextLoss();
        renderer.context = null;
        renderer.domElement = null;
        renderer.dispose();
        renderer = null;
        scene = null;
        camera = null;
        */
    })
}

async function createRoom() {

    floor.mesh = null
    floor.physicsBody = null

    walls.meshes = []
    walls.physicsBodies = []

    // CREATE FLOOR AND WALLS

    let floorWidth = floorSize * container.aspect
    let floorHeight = floorSize

    // ----------------
    // FLOOR
    // ----------------
    floor.mesh = new THREE.Mesh(
        //new THREE.PlaneBufferGeometry(floorWidth, floorHeight)
        new THREE.PlaneGeometry(floorWidth, floorHeight),
        //new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: 0.7 } )
        new THREE.ShadowMaterial({ opacity: 0.1 })
    )
    floor.mesh.receiveShadow = true
    floor.mesh.position.y = 0
    floor.mesh.quaternion.setFromAxisAngle(new THREE.Vector3(-1, 0, 0), Math.PI * 0.5)
    floor.mesh.name="floor"
    floor.mesh.appClass="room"
    await scene.add(floor.mesh)

    floor.physicsBody = new CANNON.Body({
        type: CANNON.Body.STATIC,
        shape: new CANNON.Plane()
    })
    floor.physicsBody.position.copy(floor.mesh.position)
    floor.physicsBody.quaternion.copy(floor.mesh.quaternion)
    floor.physicsBody.appClass = "room"
    await physicsWorld.addBody(floor.physicsBody)

    //updateFloor()

    // ----------------
    // WALLS
    // ----------------

    let wallThickness = 6
    let wallHeight = 200

    let wallPresets = {
        back: {
            geometry: [floorWidth, wallThickness, wallHeight], // depth, width, vertical thickness
            position: [0, wallHeight/2, -(floorHeight/2) - (wallThickness/2)] // in-out, up-down, left-right
        },
        left: {
            geometry: [wallThickness, floorHeight, wallHeight],
            position: [-(floorWidth/2) - (wallThickness/2), wallHeight/2, 0]
        },
        right: {
            geometry: [wallThickness, floorHeight, wallHeight],
            position: [(floorWidth/2) + (wallThickness/2), wallHeight/2, 0]
        },
        front: {
            geometry: [floorWidth, wallThickness, wallHeight],
            position: [0, wallHeight/2, (floorHeight/2) + (wallThickness/2)]
        },
    }

    let wall_material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true } )

    Object.entries(wallPresets).forEach(async entry => {
        //console.log("entry %O", entry)
        let [wallName, wall] = entry


        // WALL VISUAL
        let wall_geometry = new THREE.BoxGeometry(...wall.geometry)
        let wall_scene = new THREE.Mesh( wall_geometry, wall_material )
        wall_scene.receiveShadow = true
        //wall_scene.castShadow = false
        wall_scene.position.x = wall.position[0]
        wall_scene.position.y = wall.position[1]
        wall_scene.position.z = wall.position[2]

        // WORKS:
        //wall.position.y = 0
        //wall.position.x = -10

        // TESTING
        //wall.position.y = 3 / 2
        //wall.rotation.x = Math.PI / 3
        //wall_scene.rotateX(85);
        // wall.rotateY(44);
        // wall.rotateZ(77);
        /*
        wall.rotation.x = 45
        wall.rotation.y = 45
        wall.rotation.z = 45
        */

        wall_scene.quaternion.setFromAxisAngle(new THREE.Vector3(-1, 0, 0), Math.PI * 0.5)

        wall_scene.name=wallName
        wall_scene.appClass="room"


        await scene.add(wall_scene)

        // STORE THE WALL
        walls.meshes.push(wall_scene)


        // WALL PHYSICS
        //let wallShape = new CANNON.Box(new CANNON.Vec3(15 / 2, 3 / 2, 0.5 / 2))
        let wall_body = new CANNON.Body({
            type: CANNON.Body.STATIC,
            shape: new CANNON.Box(new CANNON.Vec3(...wall.geometry)), //new CANNON.Plane(),
            //material: new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true } )
        })
        wall_body.position.copy(wall_scene.position)
        wall_body.quaternion.copy(wall_scene.quaternion)
        wall_body.appClass = "room"
        await physicsWorld.addBody(wall_body)

        // STORE THE BODY
        walls.physicsBodies.push(wall_scene)
    })


}



function createSkybox() {
    var skyBoxGeometry = new THREE.CubeGeometry(10000, 10000, 10000)
    var skyBoxMaterial = new THREE.MeshPhongMaterial({
        color: 0x9999ff,
        side: THREE.BackSide
    })
    var skyBox = new THREE.Mesh(skyBoxGeometry, skyBoxMaterial)
    scene.add(skyBox)
    scene.fog = new THREE.FogExp2(0x9999ff, 0.00025)
}



// ----------------------------------
// DICE FUNCTIONS
// ----------------------------------

function createDiceGroup(die) {

    let mesh

    console.log("createDiceGroup die %O", die)

    let allowMat = true

    if (allowMat && die != null && die.type != 'classic') {

        let loader = new THREE.TextureLoader()
        let cubeMaterials = []

        for (let i = 0; i < die.images.length; i++) {
            //let loadItem = new THREE.MeshBasicMaterial({ map: loader.load('images/'+die.images[i].src), transparent: true })//, opacity: 0.5, color: 0xFF0000 })
            
            let loadItem = new THREE.MeshStandardMaterial({
                map: loader.load('images/'+die.images[i].src),
                alphaTest: 1,
                color: 0xffffff,
                //specular: 0x000005,
                //reflectivity: 1,
                side: THREE.DoubleSide,
                /*
                onBeforeCompile: shader => {
                    shader.fragmentShader = shader.fragmentShader.replace('#include <alphatest_fragment>', `
                        if ( diffuseColor.a < ALPHATEST ) diffuseColor = vec4(vec3(0.733,0.733,0.733), 1.0);
                    `)
                }
                */

                onBeforeCompile: shader => {

                    //shader.fragmentShader = shader.fragmentShader.replace('#include <alphatest_fragment>', `
                    //    if ( diffuseColor.a < ALPHATEST ) diffuseColor = vec4(vec3(0.733,0.733,0.733), 1.0);
                    //`)

                    const custom_map_fragment = THREE.ShaderChunk.map_fragment.replace(
                        `diffuseColor *= sampledDiffuseColor;`,
                        `diffuseColor = vec4( mix( diffuse, sampledDiffuseColor.rgb, sampledDiffuseColor.a ), opacity );`
                    )

                    shader.fragmentShader = shader.fragmentShader.replace('#include <map_fragment>', custom_map_fragment)

                }
            })

           
            //const tex = sprite.material.map;
            //const scaleY = tex.image.height / tex.image.width;
            //sprite.scale.setX(width).setY(width * scaleY);
            //loadItem.color.set(0xff0000);
            loadItem.width = 512
            loadItem.height = 512
            cubeMaterials.push(loadItem)
        }

        console.log("we got a die %O", die)

        // USING SQUARE MESH
        let dice_geometry = new THREE.BoxGeometry(1, 1, 1)
        mesh = new THREE.Mesh(dice_geometry, cubeMaterials)

        //Create material, color, or image texture
        //mesh = createDiceMesh(useHoles, cubeMaterials)

    } else if (!die || die.type == 'classic') {
        mesh = mesh_classicDice.clone()
    }

    mesh.scale.set(diceParams.scale,diceParams.scale,diceParams.scale)
    mesh.appClass = "dice"
    scene.add(mesh)

    // PHYSICS
    let physicsBoxGeometry = [ diceParams.scale/2, diceParams.scale/2, diceParams.scale/2 ]
    const body = new CANNON.Body({
        mass: 1,
        //shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)),
        shape: new CANNON.Box(new CANNON.Vec3(...physicsBoxGeometry)), // Values should be HALF of what the mesh geometry values are
        sleepTimeLimit: 0.1,
        //sleepSpeedLimit: 0.1
    })
    body.appClass = "dice"
    physicsWorld.addBody(body)

    //mesh.scale.set(10,10,10);
    //body.scale.set(10,10,10);

    return { mesh, body }
}


// ===============================================
// DICE MESH CREATION
// ===============================================
// These are used one-time to create a rounded-edge/corner dice mesh

function createDiceMesh(useHoles, cubeMaterials) {

    const diceMeshgroup = new THREE.Group()

    let boxMaterialOuter

    if (cubeMaterials) {
        boxMaterialOuter = cubeMaterials
    } else {
        boxMaterialOuter = new THREE.MeshStandardMaterial({
            color: 0xeeeeee
        })
    }

    let boxMaterialInner, innerMesh

    if (useHoles) {
        boxMaterialInner = new THREE.MeshStandardMaterial({
            color: 0x000000,
            roughness: 0,
            metalness: 1,
            side: THREE.DoubleSide
        })
        innerMesh = new THREE.Mesh(createDiceMesh_InnerGeometry(), boxMaterialInner)
    }

    // rest of the die (gray, rounded)
    const outerMesh = new THREE.Mesh(createDiceMesh_BoxGeometry(useHoles), boxMaterialOuter)
    
    outerMesh.castShadow = true

    if (useHoles) {
        diceMeshgroup.add(innerMesh, outerMesh)
    } else {
        diceMeshgroup.add(outerMesh)
    }

    return diceMeshgroup
}

function createDiceMesh_BoxGeometry(useHoles) {

    let segments = useHoles ? diceParams.segments_ClassicDice : diceParams.segments

    let boxGeometry = new THREE.BoxGeometry(1,1,1,segments,segments,segments)

    if (useHoles) {

        // DOTS (notches)
        const positionAttr = boxGeometry.attributes.position
        const subCubeHalfSize = 0.5 - diceParams.edgeRadius
        for (let i = 0; i < positionAttr.count; i++) {

            let position = new THREE.Vector3().fromBufferAttribute(positionAttr, i)

            const subCube = new THREE.Vector3(
                Math.sign(position.x),
                Math.sign(position.y),
                Math.sign(position.z)
            ).multiplyScalar(subCubeHalfSize)

            const addition = new THREE.Vector3().subVectors(position, subCube)

            if (
            Math.abs(position.x) > subCubeHalfSize &&
            Math.abs(position.y) > subCubeHalfSize &&
            Math.abs(position.z) > subCubeHalfSize
            ) {
                addition.normalize().multiplyScalar(diceParams.edgeRadius)
                position = subCube.add(addition)
            } else if (
            Math.abs(position.x) > subCubeHalfSize &&
            Math.abs(position.y) > subCubeHalfSize
            ) {
                addition.z = 0
                addition.normalize().multiplyScalar(diceParams.edgeRadius)
                position.x = subCube.x + addition.x
                position.y = subCube.y + addition.y
            } else if (
            Math.abs(position.x) > subCubeHalfSize &&
            Math.abs(position.z) > subCubeHalfSize
            ) {
                addition.y = 0
                addition.normalize().multiplyScalar(diceParams.edgeRadius)
                position.x = subCube.x + addition.x
                position.z = subCube.z + addition.z
            } else if (
            Math.abs(position.y) > subCubeHalfSize &&
            Math.abs(position.z) > subCubeHalfSize
            ) {
                addition.x = 0
                addition.normalize().multiplyScalar(diceParams.edgeRadius)
                position.y = subCube.y + addition.y
                position.z = subCube.z + addition.z
            }

            const notchWave = (v) => {
                v = (1 / diceParams.notchRadius) * v
                v = Math.PI * Math.max(-1, Math.min(1, v))
                return diceParams.notchDepth * (Math.cos(v) + 1)
            }

            const notch = (pos) => notchWave(pos[0]) * notchWave(pos[1])

            const offset = 0.23 // Padding between face edge and notch

            if (position.y === 0.5) {
                position.y -= notch([position.x, position.z])
            } else if (position.x === 0.5) {
                position.x -= notch([position.y + offset, position.z + offset])
                position.x -= notch([position.y - offset, position.z - offset])
            } else if (position.z === 0.5) {
                position.z -= notch([position.x - offset, position.y + offset])
                position.z -= notch([position.x, position.y])
                position.z -= notch([position.x + offset, position.y - offset])
            } else if (position.z === -0.5) {
                position.z += notch([position.x + offset, position.y + offset])
                position.z += notch([position.x + offset, position.y - offset])
                position.z += notch([position.x - offset, position.y + offset])
                position.z += notch([position.x - offset, position.y - offset])
            } else if (position.x === -0.5) {
                position.x += notch([position.y + offset, position.z + offset])
                position.x += notch([position.y + offset, position.z - offset])
                position.x += notch([position.y, position.z])
                position.x += notch([position.y - offset, position.z + offset])
                position.x += notch([position.y - offset, position.z - offset])
            } else if (position.y === -0.5) {
                position.y += notch([position.x + offset, position.z + offset])
                position.y += notch([position.x + offset, position.z])
                position.y += notch([position.x + offset, position.z - offset])
                position.y += notch([position.x - offset, position.z + offset])
                position.y += notch([position.x - offset, position.z])
                position.y += notch([position.x - offset, position.z - offset])
            }

            positionAttr.setXYZ(i, position.x, position.y, position.z)

        }
    }

    boxGeometry.deleteAttribute("normal")
    boxGeometry.deleteAttribute("uv")
    boxGeometry = BufferGeometryUtils.mergeVertices(boxGeometry)

    boxGeometry.computeVertexNormals()

    return boxGeometry

}


// DOTS
function createDiceMesh_InnerGeometry() {

    // Creates an inner box, slightly smaller, that just serves to fill divots with black color

    const baseGeometry = new THREE.PlaneGeometry(
        1 - 2 * diceParams.edgeRadius,
        1 - 2 * diceParams.edgeRadius
    )

    const offset = 0.48

    return BufferGeometryUtils.mergeGeometries(
        [
            baseGeometry.clone().translate(0, 0, offset),
            baseGeometry.clone().translate(0, 0, -offset),
            baseGeometry
                .clone()
                .rotateX(0.5 * Math.PI)
                .translate(0, -offset, 0),
            baseGeometry
                .clone()
                .rotateX(0.5 * Math.PI)
                .translate(0, offset, 0),
            baseGeometry
                .clone()
                .rotateY(0.5 * Math.PI)
                .translate(-offset, 0, 0),
            baseGeometry
                .clone()
                .rotateY(0.5 * Math.PI)
                .translate(offset, 0, 0)
        ],
        false
    )
}

function addDiceEvents(dice) {

    dice.body.addEventListener("sleep", (e) => {

        dice.body.allowSleep = false

        // CALCULATE FINAL DICE LANDING POSITION (ie what face is pointing up)
        const euler = new CANNON.Vec3()
        e.target.quaternion.toEuler(euler)

        const eps = 0.1
        let isZero = (angle) => Math.abs(angle) < eps
        let isHalfPi = (angle) => Math.abs(angle - 0.5 * Math.PI) < eps
        let isMinusHalfPi = (angle) => Math.abs(0.5 * Math.PI + angle) < eps
        let isPiOrMinusPi = (angle) => Math.abs(Math.PI - angle) < eps || Math.abs(Math.PI + angle) < eps

        if (isZero(euler.z)) {
            if (isZero(euler.x)) {
                showRollResults(1)
            } else if (isHalfPi(euler.x)) {
                showRollResults(4)
            } else if (isMinusHalfPi(euler.x)) {
                showRollResults(3)
            } else if (isPiOrMinusPi(euler.x)) {
                showRollResults(6)
            } else {
                // landed on edge => wait to fall on side and fire the event again
                dice.body.allowSleep = true
            }
        } else if (isHalfPi(euler.z)) {
            showRollResults(2)
        } else if (isMinusHalfPi(euler.z)) {
            showRollResults(5)
        } else {
            // landed on edge => wait to fall on side and fire the event again
            dice.body.allowSleep = true
        }

        checkDiceStoppedMoving()
    })
}

function checkDiceStoppedMoving() {

    let diceStillMoving = diceArray.filter( x => x.body.allowSleep == true)

    let timeDiff = Math.round(new Date() - rollTimer  / 1000)

    if (diceStillMoving.length == 0 || timeDiff > 2.5) {
        console.log("All dice stopped")
        store.rolling = false

        /*
        if (timeDiff > 2.5) {
            scoreResult.value = "Roll unfinished"
        }
        */
    }

}

function throwDice() {

    store.rolling = true
    rollTimer = new Date()

    scoreResult.value = null

    diceArray.forEach((die, index) => {

        // MOTION
        die.body.velocity.setZero()
        die.body.angularVelocity.setZero()

        // POSITION
        //d.body.position = new CANNON.Vec3(2, index * 1.5, 0)
        const throwHeight = () => {
            return generateRandomInteger(40, 150) //(index+2) * (diceParams.scale - ((40 / 100) * diceParams.scale))
        }
        die.body.position = new CANNON.Vec3(generateRandomInteger(-10,10), generateRandomInteger(70, 150), generateRandomInteger(-10,10))
        die.mesh.position.copy(die.body.position)

        // ROTATION
        //die.mesh.rotation.set( 2 * Math.PI * Math.random(),   0,  2 * Math.PI * Math.random()  )
        die.mesh.rotation.set( 2 * Math.PI * Math.random(), 2 * Math.PI * Math.random(), 2 * Math.PI * Math.random())
        die.body.quaternion.copy(die.mesh.quaternion)

        // RANDOM FORCE
        const force = 33 + (35 * Math.random())

        // APPLY
        die.body.applyImpulse(

            // POSITION
            new CANNON.Vec3(generateRandomInteger(-4,32), force, -generateRandomInteger(-8,32)), // left-right, gravity, top-bottom

            // ROTATION
            new CANNON.Vec3(generateRandomInteger(3,4)*(100/diceParams.scale), generateRandomInteger(3,4)*(100/diceParams.scale), -generateRandomInteger(3,4)*(100/diceParams.scale))
        )

        die.body.allowSleep = true
    })
}

function generateRandomInteger(min, max) {
    // TODO: We want min to be able to be a negative number. e.g. want want to be able to get random inside -10 to 10, for instance.
    return Math.floor(min + Math.random()*(max - min + 1))
}

function showRollResults(score) {
    if (!scoreResult.value) {
        scoreResult.value += score
    } else {
        scoreResult.value += "+" + score
    }
}

</script>