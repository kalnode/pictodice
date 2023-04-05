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
        <div class="absolute mb-6 pointer-events-auto z-50 flex justify-center"
        :style="'bottom:'+ (store.safeAreaInset.bottom+store.safeAreaPadding) +'px'">
            <div @click="throwDice()" class="p-4 px-8 rounded-full bg-white hover:bg-gray-100 text-teal-800 hover:scale-105 transition cursor-pointer">ROLL</div>
            <div class="absolute text-black text-center" style="top:-50%">Score: <span id="score-result"></span></div>
        </div>
    </div>
</template>

<script setup>
import { usePhotodiceAppStore } from '~/stores/app'

import * as THREE from 'three'
import * as CANNON from 'cannon-es'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
//import { MapControls } from "three/examples/jsm/controls/OrbitControls";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils";

const store = usePhotodiceAppStore()

let containerEl, canvasEl, container, scoreResult, renderer, scene, camera, diceMesh, physicsWorld, controls

const fov = 30 // Lower = shallow perspective (easier on eyes, less "3d"); Higher = deep perspective (harsh, more "3d")
const floorSize = 100 // Arbitrary inner world dimensions; "100" is a nice round number that's better for troubleshooting and head-math. Could be anything, like "1920" (e.g. browser viewport).
const diceArray = []

const diceParams = {
    numberOfDice: 2,
    segments: 40,
    edgeRadius: 0.07,
    notchRadius: 0.12,
    notchDepth: 0.1
}


onMounted ( () => {

    containerEl = document.getElementById("threeDcanvas")
    canvasEl = document.getElementById("canvas")
    scoreResult = document.getElementById("score-result")

    container = {
        width: containerEl.clientWidth,
        height: containerEl.clientHeight,
        aspect: containerEl.clientWidth / containerEl.clientHeight
    }

    updateContainer()
    initPhysics()
    initScene()
    updateScene()

    window.addEventListener("resize", updateScene)

    renderScene()

    throwDice()

})

// =================================
// FUNCTIONS
// =================================

function updateContainer() {
    container = {
        width: containerEl.clientWidth,
        height: containerEl.clientHeight,
        aspect: containerEl.clientWidth / containerEl.clientHeight
    }
}

function initScene() {

    // SCENE
    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        canvas: canvasEl
    })
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setSize(container.width, container.height)
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
    createRoom()
    //createSkybox()


    // OBJECTS
    diceMesh = createDiceMesh()
    for (let i = 0; i < diceParams.numberOfDice; i++) {
        diceArray.push(createDice())
        addDiceEvents(diceArray[i])
    }


}

function initPhysics() {
    physicsWorld = new CANNON.World({
        allowSleep: true,
        gravity: new CANNON.Vec3(0, -500, 0)
    })
    physicsWorld.defaultContactMaterial.restitution = 0.3
    // physicsWorld.broadphase = new CANNON.NaiveBroadphase()
    // physicsWorld.solver.iterations = 16
}

function renderScene() {
    physicsWorld.fixedStep()

    for (const dice of diceArray) {
        dice.mesh.position.copy(dice.body.position)
        dice.mesh.quaternion.copy(dice.body.quaternion)
    }

    requestAnimationFrame(renderScene)
    renderer.render(scene, camera)
}

function updateScene() {

    updateContainer()

    if ( container.width < container.height ) {
        console.log("NARROW")
        //this.camera.position.z = frameSize.x / this.camera.aspect / (2 * Math.tan(this.camera.fov / 2 * (Math.PI / 180)))
        camera.position.y = ((100 * container.aspect) / camera.aspect) / (2 * Math.tan(fov / 2 * (Math.PI / 180)))
        //camera.position.y = (100 / camera.aspect) / (2 * Math.tan(fov / 2 * (Math.PI / 180)))

    } else {
        console.log("WIDE")
        //this.camera.position.z = frameSize.y / (2 * Math.tan(this.camera.fov / 2 * (Math.PI / 180)))

        //WORKS
        //camera.position.y = ((100 * container.aspect) / camera.aspect) / (2 * Math.tan(fov / 2 * (Math.PI / 180)))

        //WORKS
        //camera.position.y = ((100 * container.aspect) / camera.aspect) / (2 * Math.tan(fov / 2 * (Math.PI / 180)))

        //camera.position.y = (100 / camera.aspect) / (2 * Math.tan(fov / 2 * (Math.PI / 180)))
        camera.position.y = ((100 * container.aspect) / camera.aspect) / (2 * Math.tan(fov / 2 * (Math.PI / 180)))
    }

    camera.aspect = container.aspect
    camera.updateProjectionMatrix()
    renderer.setSize(container.width, container.height)

}

function setLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const topLight = new THREE.PointLight(0xffffff, 0.5)
    topLight.position.set(10, 55, 0)
    topLight.castShadow = true
    topLight.shadow.mapSize.width = 2048
    topLight.shadow.mapSize.height = 2048
    topLight.shadow.camera.near = 5
    topLight.shadow.camera.far = 400
    scene.add(topLight)
}

function createRoom() {

    // CREATE FLOOR AND WALLS

    let floorWidth = floorSize * container.aspect
    let floorHeight = floorSize

    // ----------------
    // FLOOR
    // ----------------
    //var geometry = new THREE.PlaneBufferGeometry( 110 * aspect, 110 );
    const floor = new THREE.Mesh(
        //new THREE.PlaneGeometry(containerEl.clientWidth, containerEl.clientHeight),
        //new THREE.PlaneGeometry(containerWidth / 8, containerHeight / 8),
        new THREE.PlaneGeometry(floorWidth, floorHeight),
        //new THREE.PlaneGeometry(containerWidth, containerHeight),
        new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: 0.7 } )
        //new THREE.ShadowMaterial({ opacity: 0.1 })
    )
    floor.receiveShadow = true
    floor.position.y = 0
    floor.quaternion.setFromAxisAngle(new THREE.Vector3(-1, 0, 0), Math.PI * 0.5)
    scene.add(floor)

    const floorBody = new CANNON.Body({
        type: CANNON.Body.STATIC,
        shape: new CANNON.Plane()
    })
    floorBody.position.copy(floor.position)
    floorBody.quaternion.copy(floor.quaternion)
    physicsWorld.addBody(floorBody)


    // ----------------
    // WALLS
    // ----------------

    let wallThickness = 6
    let wallHeight = 30

    let walls = {
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

    Object.values(walls).forEach(wall => {

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
        scene.add(wall_scene)

        // WALL PHYSICS
        //let wallShape = new CANNON.Box(new CANNON.Vec3(15 / 2, 3 / 2, 0.5 / 2))
        let wall_body = new CANNON.Body({
            type: CANNON.Body.STATIC,
            shape: new CANNON.Box(new CANNON.Vec3(...wall.geometry)), //new CANNON.Plane(),
            //material: new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true } )
        })
        wall_body.position.copy(wall_scene.position)
        wall_body.quaternion.copy(wall_scene.quaternion)
        physicsWorld.addBody(wall_body)

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

function createDice() {
    const mesh = diceMesh.clone()
    mesh.scale.set(20,20,20)
    scene.add(mesh)

    const body = new CANNON.Body({
        mass: 1,
        //shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)),
        shape: new CANNON.Box(new CANNON.Vec3(10, 10, 10)), // Values should be HALF of what the mesh geometry values are
        sleepTimeLimit: 0.1
    })
    physicsWorld.addBody(body)

    //mesh.scale.set(10,10,10);
    //body.scale.set(10,10,10);


    return { mesh, body }
}

function createDiceMesh() {
    const boxMaterialOuter = new THREE.MeshStandardMaterial({
        color: 0xeeeeee
    })
    const boxMaterialInner = new THREE.MeshStandardMaterial({
        color: 0x000000,
        roughness: 0,
        metalness: 1,
        side: THREE.DoubleSide
    })

    const diceMesh = new THREE.Group()
    const innerMesh = new THREE.Mesh(createInnerGeometry(), boxMaterialInner)
    const outerMesh = new THREE.Mesh(createBoxGeometry(), boxMaterialOuter)
    outerMesh.castShadow = true
    diceMesh.add(innerMesh, outerMesh)

    return diceMesh
}

function createBoxGeometry() {

    let boxGeometry = new THREE.BoxGeometry(
        1,
        1,
        1,
        diceParams.segments,
        diceParams.segments,
        diceParams.segments
    )

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

        const offset = 0.23

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

    boxGeometry.deleteAttribute("normal")
    boxGeometry.deleteAttribute("uv")
    boxGeometry = BufferGeometryUtils.mergeVertices(boxGeometry)

    boxGeometry.computeVertexNormals()

    return boxGeometry
}

function createInnerGeometry() {

    const baseGeometry = new THREE.PlaneGeometry(
        1 - 2 * diceParams.edgeRadius,
        1 - 2 * diceParams.edgeRadius
    )

    const offset = 0.48

    return BufferGeometryUtils.mergeBufferGeometries(
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
    })
}


function throwDice() {

    scoreResult.innerHTML = ""

    diceArray.forEach((die, index) => {

        //console.log("Throwing dice die: %O", die)
        //console.log("Throwing dice index: %O", index)

        // MOTION
        die.body.velocity.setZero()
        die.body.angularVelocity.setZero()

        // POSITION
        //d.body.position = new CANNON.Vec3(2, index * 1.5, 0)
        die.body.position = new CANNON.Vec3(0, (index+1) * 50, 0)
        die.mesh.position.copy(die.body.position)

        // ROTATION
        //die.mesh.rotation.set( 2 * Math.PI * Math.random(),   0,  2 * Math.PI * Math.random()  )
        die.mesh.rotation.set( 2 * Math.PI * Math.random(),   0,  2 * Math.PI * Math.random()  )
        die.body.quaternion.copy(die.mesh.quaternion)

        // RANDOM FORCE
        const force = 33 + (55 * Math.random())

        // APPLY
        die.body.applyImpulse(
            new CANNON.Vec3(-force, force, 0),
            new CANNON.Vec3(0, 0, 0.2)
        )

        die.body.allowSleep = true
    })
}


function showRollResults(score) {
    if (scoreResult.innerHTML === "") {
        scoreResult.innerHTML += score
    } else {
        scoreResult.innerHTML += "+" + score
    }
}

</script>