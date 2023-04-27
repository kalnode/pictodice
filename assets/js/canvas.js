// ========================================
// 3D CANVAS
// ========================================
import * as THREE from 'three'
import * as CANNON from 'cannon-es'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
//import { MapControls } from "three/examples/jsm/controls/OrbitControls";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils"
import { generateRandomInteger, getRandomFloatWithExclusion } from '~/assets/js/random.js'

export default class DiceCanvas {

    //static staticProperty = "static property";

    constructor(Objects, containerLabel, canvasLabel, baseURL, rollOnMount, screenshotMode){

        // TODO: Convert this component to typescript, and make use of these interfaces
        //import { Die, DieState, DiceSet } from '~/stores/app'

        //Object.assign(this, {containerEl, canvasEl, renderer, scene, container, camera, mesh_classicDice, physicsWorld, controls, rollTimer, animReq})
        this.containerEl
        this.canvasEl
        this.renderer
        this.scene
        this.container
        this.camera
        this.mesh_classicDice
        this.physicsWorld
        this.controls
        this.rollTimer
        this.animReq
        this.screenshotMode = screenshotMode
        this.objectGroupScreenshot
        this.baseURL = baseURL
        this.rollOnMount = rollOnMount
        this.allowedToAnimate = true

        this.containerEl = document.getElementById(containerLabel)

        this.canvasEl = document.getElementById(canvasLabel)

        this.props = {
            Objects: Objects
        }

        this.fov = 30 // Lower = shallow perspective (easier on eyes, less "3d"); Higher = deep perspective (harsh, more "3d")
        this.floorSize = 100 // Arbitrary inner world dimensions; "100" is a nice round number that's better for troubleshooting and head-math. Could be anything, like "1920" (e.g. browser viewport).
        this.objectArray = []
        //this.scoreResult = ref()

        this.objectParams = {
            // GENERAL
            //currentnumObjects: 8, // TODO: We should set limit between 1 and 8
            numObjects: { current: 2, min: 1, max: 8 },
            scale: 10, // Scale baseline; we adjust this later according to viewport real estate

            // TODO: Setup system such that, in the same viewport, user has option to make fewer-dice scale larger. For instance, 2 dice can be much larger than a 8.

            // GEOMETRY
            segments: 20, // Detail in cube mesh. Also affects holes for classic dice. e.g. 20 = holes start looking angular.
            segments_ClassicDice: 40,
            edgeRadius: 0.07,

            // TODO: Make notches optional and only available for classic dice. All other dice facings should be flat.
            notchRadius: 0.12,
            notchDepth: 0.1
        }

        this.floor = {
            mesh: null,
            physicsBody: null
        }

        this.walls = {
            meshes: [],
            physicsBodies: []
        }

        // RENDERER WITH FPS LIMITER
        // TODO: DOes this work well? Is it extraneous? Doesn't requestAnimationFrame manage all of this for us?
        this.frameLengthMS = 1000/60 //60 fps
        this.previousTime = 0

        //this.init()

    }

    init() {

        return new Promise((resolve, reject) => {

            this.updateContainer()
            this.initPhysics()
            this.initScene()
            this.buildScene()
    
            this.renderScene()


            // NOTE:
            // Dice have initial movement when they get added to scene. They drop from a height.
        
            if (this.rollOnMount) {
                this.throwObjects()
            }


            resolve()

        })
    
    }

    // =================================
    // FUNCTIONS
    // =================================


    async resizeEvent() {
        this.stopAnimation()
        await this.updateContainer()
        await this.clearScene(['appRoom', 'appObject'])
        await this.buildScene()
        this.camera.position.y = this.camera.position.y + 20
        this.throwObjects()
    }

    // TODO: Use global 'debounce' for this
    debounceKal (func, time) {
        var time = time || 100
        var timer
        return function (event) {
            if (timer) clearTimeout(timer)
            timer = setTimeout(func, time, event)
        }
    }


    updateContainer() {

        this.container = {
            width: this.containerEl.clientWidth,
            height: this.containerEl.clientHeight,
            aspect: this.containerEl.clientWidth / this.containerEl.clientHeight
        }

        let numObjects = this.props.Objects.length
        // SET OBJECT SCALE
        // Based on measurement of fitting maximum number of object in the smallest dimension
        // plus some padding of say 10%
        let smallerDimensionSize = Math.min(this.floorSize * this.container.aspect, this.floorSize) //Math.min(container.width, container.height)

        // We initial object size is calculate by taking off a safety padding percentage (like 10%) from the dimension, then we divide the result by number of device (e.g. 500 width minus 10% = 450. 450 divided by 2 dice = 225 width per dice)
        let pOffset = 10
        let dPAdjust = (smallerDimensionSize - ((pOffset / 100) * smallerDimensionSize))
        let baselineObjectScale = dPAdjust / (numObjects)
        
        // We calculate maximum object size being 85
        let maximumSize = (smallerDimensionSize - ((75 / 100) * smallerDimensionSize))

        this.objectParams.scale = Math.min(baselineObjectScale, maximumSize) // (smallerDimensionSize - ((10 / 100) * smallerDimensionSize))
    }

    async initScene() {

        // SCENE
        this.renderer = new THREE.WebGLRenderer({

            // TODO: If we can maintain solid color bg's, then we can possibly disable canvas transparency, and use a solid color instead
            alpha: true,

            antialias: false,
            canvas: this.canvasEl,
            //preserveDrawingBuffer: true
        })
        this.renderer.shadowMap.enabled = true
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
        this.renderer.setSize(this.container.width, this.container.height)
        // TODO: Look into setPixelRatio esp when it comes to mobile screens
        this.renderer.setPixelRatio(2) //window.devicePixelRatio
        this.scene = new THREE.Scene()

        // CAMERA
        this.camera = new THREE.PerspectiveCamera(30, this.container.width / this.container.height, 1, 300)
        this.camera.position.set(0,1,0) // TODO: Why "1" here? If we do all zero's, scene is blank (until first interaction with orbit controls)
        //camera.lookAt(0, 0, 0)
        //camera.position.set(2, 4, 10).multiplyScalar(7)
        //camera.up.set(0, 0, -1)

        // CONTROLS
        //orbit = new MapControls(camera, canvasEl)
        //orbit.enableDamping = true
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.target.set(0, 0, 0)
        this.controls.update()

        // STATS
        /*
        stats = new Stats()
        stats.domElement.style.position = "absolute"
        stats.domElement.style.bottom = "0px"
        stats.domElement.style.zIndex = 100
        containerEl.appendChild(stats.domElement)
        */

        // WORLD
        this.setLighting()

        // SKYBOX
        //createSkybox()

        // CREATE CLASSIC MESH
        // One-time mesh creation for:
        // 1. No props passed to this component, so we assume classic dice desired
        // 2. Any die in the passed dice set is marked as classic
        // TODO: Create a static mesh and import it, rather than run this function
        if (!this.props.Objects || this.props.Objects.filter(x => x.type == 'classic')) {
            this.mesh_classicDice = await this.createObjectMesh(true)
        }

    }

    async createObject() {

        // Object(s) parameters come via prop (e.g. cube with photo textures, etc). No actual meshes passed in prop.
        if (this.props && this.props.Objects && this.props.Objects.length > 0) {
            for (let i = 0; i < this.props.Objects.length; i++) {
                this.objectArray.push(this.createObjectGroup(this.props.Objects[i]))
                this.addObjectEvents(this.objectArray[i])
            }
        // No objects passed via props, so we create generic dice
        } else {
            for (let i = 0; i < this.objectParams.numObjects.current; i++) {
                this.objectArray.push(this.createObjectGroup())
                this.addObjectEvents(this.objectArray[i])
            }
        }
    }

    initPhysics() {
        this.physicsWorld = new CANNON.World({
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
        this.physicsWorld.defaultContactMaterial.restitution = 0.2
        // physicsWorld.broadphase = new CANNON.NaiveBroadphase()
        // physicsWorld.solver.iterations = 16
    }

    renderScene(timestamp) {
        if (this.allowedToAnimate && this.renderer) {
            if (timestamp - this.previousTime > this.frameLengthMS) {

                if (this.physicsWorld) {
                    this.physicsWorld.fixedStep()
                }

                // Sync object mesh and object physics-body for each object
                // TODO: Why do we need this?
                for (const object of this.objectArray) {
                    object.mesh.position.copy(object.body.position)
                    object.mesh.quaternion.copy(object.body.quaternion)
                    //if (object.body.velocity < 0.1)
                }

                this.renderer.render(this.scene, this.camera)

                this.previousTime = timestamp
            }

            this.animReq = window.requestAnimationFrame(this.renderScene.bind(this)) //.bind(this) needed to keep context of class instance
        }
    }

    stopAnimation() {
        console.log("stop animation!")
        this.allowedToAnimate = false
        window.cancelAnimationFrame(this.animReq)
    }

    async buildScene() {
        await this.createRoom()
        await this.createObject()

        this.camera.aspect = this.container.aspect
        this.camera.position.y = (((100 * this.container.aspect) / this.camera.aspect) / (2 * Math.tan(this.fov / 2 * (Math.PI / 180)))) + 20
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(this.container.width, this.container.height)
        //renderer.setPixelRatio(window.devicePixelRatio)

    }

    // ----------------------------------
    // WORLD FUNCTIONS
    // ----------------------------------
    setLighting() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
        this.scene.add(ambientLight)

        const topLight = new THREE.PointLight(0xffffff, 0.5)
        topLight.position.set(0, 150, 20)
        topLight.castShadow = true
        topLight.shadow.mapSize.width = 1024
        topLight.shadow.mapSize.height = 1024
        topLight.shadow.camera.near = 80
        topLight.shadow.camera.far = 400
        this.scene.add(topLight)
    }

    async clearScene(classes) {

        return new Promise ( async (resolve, reject) => {

            // GET & LOOP all objects (room & objects, no lights)

            if (this.scene && this.scene.children && this.scene.children != null && this.scene.children.length > 0) {

                let objects = this.scene.children
                if (classes && classes.length > 0) {
                    objects = this.scene.children.filter(x => x.appClass == 'appRoom' || x.appClass == 'appObject')
                }

                objects.forEach( async object => {

                    if (object.appClass == 'appRoom' || object.appClass == 'appObject') {

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
                        await this.scene.remove(object) // OR object.removeFromParent()
                    }
                })

                // REMOVE PHYSICS BODIES
                this.physicsWorld.bodies.forEach( async object => {
                    
                    if (classes && !classes.includes(object.appClass)) {
                        return
                    }

                    await this.physicsWorld.removeBody(object)

                })

                this.objectArray.length = 0
            }

            resolve()

        })
    }

    async disposeEverything() {

        this.stopAnimation()

        await this.clearScene()

        this.renderer.clear()

        this.scene ? this.scene = null : null
        this.physicsWorld ? this.physicsWorld = null : null

        this.camera = null
        this.renderer && this.renderer.renderLists.dispose()
        this.renderer = null

        this.container = null
        this.mesh_classicDice = null
        this.controls = null
        this.rollTimer = null
        this.animReq = null
        this.screenshotMode = null
        this.objectGroupScreenshot = null
        this.baseURL = null
        this.rollOnMount = null
    }





    async createRoom() {

        this.floor.mesh = null
        this.floor.physicsBody = null

        this.walls.meshes = []
        this.walls.physicsBodies = []

        let floorWidth = this.floorSize * this.container.aspect
        let floorHeight = this.floorSize

        // ----------------
        // FLOOR
        // ----------------
        this.floor.mesh = new THREE.Mesh(
            //TODO: Should this be PlaneBufferGeometry ???
            new THREE.PlaneGeometry(floorWidth + 50, floorHeight + 50),
            //new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: 0.7 } )
            new THREE.ShadowMaterial({ opacity: 0.1 })
        )
        this.floor.mesh.receiveShadow = true
        this.floor.mesh.position.y = 0
        this.floor.mesh.quaternion.setFromAxisAngle(new THREE.Vector3(-1, 0, 0), Math.PI * 0.5)

        // Add visual floor to scene
        this.floor.mesh.name="floor"
        this.floor.mesh.appClass="appRoom"
        await this.scene.add(this.floor.mesh)

        // PHYSICS
        this.floor.physicsBody = new CANNON.Body({
            type: CANNON.Body.STATIC,
            shape: new CANNON.Plane()
        })
        this.floor.physicsBody.position.copy(this.floor.mesh.position)
        this.floor.physicsBody.quaternion.copy(this.floor.mesh.quaternion)
        this.floor.physicsBody.appClass = "appRoom"
        this.physicsWorld.addBody(this.floor.physicsBody)


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
            }
        }

        let wall_material = new THREE.MeshBasicMaterial( { transparent: true, alphaTest:0, opacity: 0 } ) // , color: 0x0000ff, wireframe: true
        let wall_vertex = new THREE.Vector3(-1, 0, 0)

        Object.entries(wallPresets).forEach(async entry => {
            let [wallName, wall] = entry

            // TODO: Can we use planes here? Would it be more performant?
            // TODO: Should this be BoxBufferGeometry ?
            let wall_geometry = new THREE.BoxGeometry(...wall.geometry)

            // WALL VISUAL
            // Form initial wall positions.
            // Future: Maybe we make solid visual walls, like a wooden box.
            let wall_scene = new THREE.Mesh( wall_geometry, wall_material )
            wall_scene.position.x = wall.position[0]
            wall_scene.position.y = wall.position[1]
            wall_scene.position.z = wall.position[2]
            wall_scene.quaternion.setFromAxisAngle(wall_vertex, Math.PI * 0.5)

            // -------------------------------
            // Add wall mesh to scene
            // -------------------------------
            /*
            wall_scene.receiveShadow = true
            wall_scene.castShadow = true
            wall_scene.name = wallName
            wall_scene.appClass = "appRoom"
            await this.scene.add(wall_scene)
            this.walls.meshes.push(wall_scene)
            */

            // WALL PHYSICS
            // Uses wall positions and geometry
            // Essentially just allows dice to bounce off walls
            let wall_body = new CANNON.Body({
                type: CANNON.Body.STATIC,
                shape: new CANNON.Box(new CANNON.Vec3(...wall.geometry)),
            })
            wall_body.position.copy(wall_scene.position)
            wall_body.quaternion.copy(wall_scene.quaternion)
            wall_body.appClass = "appRoom"
            this.physicsWorld.addBody(wall_body)
            this.walls.physicsBodies.push(wall_scene)
        })


    }

    createSkybox() {
        var skyBoxGeometry = new THREE.CubeBufferGeometry(10000, 10000, 10000)
        var skyBoxMaterial = new THREE.MeshPhongMaterial({
            color: 0x9999ff,
            side: THREE.BackSide
        })
        var skyBox = new THREE.Mesh(skyBoxGeometry, skyBoxMaterial)
        this.scene.add(skyBox)
        this.scene.fog = new THREE.FogExp2(0x9999ff, 0.00025)
    }


    createFontTexture(text) {

        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        context.fillStyle = 'green'
        context.font = '60px sans-serif'
        context.fillText(text, 0, 60)


        // canvas contents are used for a texture
        const texture = new THREE.Texture(canvas)
        texture.needsUpdate = true
        //document.removeChild(canvas)
        return texture

    }


    // ----------------------------------
    // SCREENSHOT FUNCTIONS
    // ----------------------------------

    getPyramidBase(num) {
        return Math.floor(Math.sqrt(2 * num) + 1/2)
    }


    getRandomRotationPosition() {
        let positions = [0,90,180,-90]
        let randomPos = positions.sort(() => 0.5 - Math.random())[0]
        return randomPos
    }

    setupFormation() {

        // Base of stack (ie pyramid); blocks get rendered from bottom-left first and get stacked upward.
        // This is to assure that regrdless of number of blocks, we always have a pleasing formation.
        let colBase = this.getPyramidBase(this.objectArray.length)

        let col = 1
        let row = 1
        //let gap = objectParams.scale/4

        // Offsets to help re-center the entire grouping
        // TODO: Ideally we don't need to do this. In any case, needs scrutiny if it's actually still accurate.
        let xOffset = (colBase * ((this.objectParams.scale/3)*2) + ((this.objectParams.scale) * col) + (col * (this.objectParams.scale/4))) //(colBase * objectParams.scale / 2) // (((floorSize/2) * container.aspect))// - (objectParams.scale/2)
        let yOffset = 2 * this.objectParams.scale

        // LIGHTING
        // Appears in front of formation, for the screenshot. We do not touch the other scene lights.
        /*
        const formationLight = new THREE.PointLight(0xffffff, 0.3)
        formationLight.position.set(0, objectParams.scale * 2, objectParams.scale * 4)
        formationLight.castShadow = true
        formationLight.shadow.mapSize.width = 2048
        formationLight.shadow.mapSize.height = 2048
        formationLight.shadow.camera.near = 80
        formationLight.shadow.camera.far = 400
        scene.add(formationLight)
        */

        // FLOOR
        // We hide the floor shadows
        // TODO: Possibly don't need these?
        this.floor.mesh.visible = false
        //floor.mesh.receiveShadow = false

        this.objectGroupScreenshot = new THREE.Group()
        this.objectGroupScreenshot.name = "objectFormation"

        for (var i = 0; i < this.objectArray.length; i++) {

            let object = this.objectArray[i]
            //object.mesh.castShadow = false

            // MOTION
            object.body.velocity.setZero()
            object.body.angularVelocity.setZero()

            // ROTATION
            //getRandomFloatWithExclusion(-0.15,0.15,0,0.05)
            object.mesh.rotation.set(0, 0, THREE.MathUtils.degToRad( this.getRandomRotationPosition() + getRandomFloatWithExclusion(-15,15,0,5)) )
            object.body.quaternion.copy(object.mesh.quaternion)

            // POSITION
            // ROW
            let x = (row * ((this.objectParams.scale/3)*2) + ((this.objectParams.scale) * col) + (col * (this.objectParams.scale/4))) - xOffset //(row * (objectParams.scale/2)) + ((objectParams.scale+gap) * col) + (gap) - xOffset
            // COL
            let z = -(this.objectParams.scale * row) + yOffset
            // IN-OUT
            let y = 0
            object.body.position = new CANNON.Vec3(x, y, z)
            object.mesh.position.copy(object.body.position)

            // ANALYZE STEP
            if ((col + 1) > (colBase - (row-1))) {
                // NEXT ROW
                col = 1
                row = row + 1
            } else {
                // NEXT COL
                col = col + 1
            }

            this.objectGroupScreenshot.add(object.mesh)

        }

        //group.scale.set(2, 2, 2)

        this.scene.add(this.objectGroupScreenshot)

        //this.createScreenshot(group)

    }


    rotateObject() {
        //this.objectGroupScreenshot.rotateY(THREE.MathUtils.degToRad( this.getRandomRotationPosition() ))
        //this.objectGroupScreenshot.rotateOnAxis(new THREE.Vector3(0,1,0), THREE.MathUtils.degToRad( this.getRandomRotationPosition() ))
    }

    async createScreenshot(objectInput) {

        let object = objectInput ? objectInput : this.objectGroupScreenshot

        // This needs to be early enough to set image
        this.renderer.render(this.scene, this.camera)


        // SETUP SCREENSHOT CANVAS
        let canvasLabel = "canvasScreenshot"
        let overlayCanvas

        // Use existing
        if (document.getElementById(canvasLabel)) {
            overlayCanvas = document.getElementById(canvasLabel)

        // Make new one
        } else {
            overlayCanvas = document.createElement('canvas')
            overlayCanvas.id = canvasLabel
            document.body.appendChild(overlayCanvas)
        }



        // OLD DEV STUFF
        //renderer.setViewport(0, 0, 200, 400)
        //renderer.setSize( 200, 400 )
        //camera.updateProjectionMatrix()
        //var factor  = Math.min ( canvas.width / img.width, canvas.height / img.height );
        //ctx.scale(factor, factor);
        //ctx.drawImage(img, 0, 0);
        //ctx.scale(1 / factor, 1 / factor);


        // GET CAPTURE COORDS
        //this.canvasEl.width = this.canvasEl.width * 2
        //this.canvasEl.height = this.canvasEl.height * 2

        let scale = 1//object.scale.x * 1.2
        object.scale.set(scale,scale,scale)

        // Gets 2d bounding box, in screen coordinates, around the capture object
        let boundingBox2D = this.computeScreenSpaceBoundingBox(object, this.camera)

        const posX = (boundingBox2D.min.x + 1) * (this.container.width / 2)
        const posY = (1 - boundingBox2D.max.y) * (this.container.height / 2)
        const width = (boundingBox2D.max.x - boundingBox2D.min.x) * (this.container.width / 2) * scale
        const height = (boundingBox2D.max.y - boundingBox2D.min.y) * (this.container.height / 2) * scale
        
        let offset = 0 //25
        let padding = 0 //50

        overlayCanvas.width = width
        overlayCanvas.height = height
        let ctx = overlayCanvas.getContext('2d')
        ctx.lineWidth = 4
        ctx.strokeStyle = 'red'

        ctx.width = width 
        ctx.height = height

        // CREATE BOX IN SCREENSHOT CANVAS
        //ctx.clearRect(0, 0, this.container.width, this.container.width)
        //ctx.strokeRect(posX-offset, posY-offset, width+padding, height+padding)

        // EARLY DEV STUFF
        //var factor = Math.min ( container.width / width, container.height / height )
        //ctx.scale(factor, factor)

        //var factor = Math.min ( canvShot.width / sourceImage.width, canvShot.height / sourceImage.height )
        //ctx.scale(factor, factor);
        //ctx.scale(1 / factor, 1 / factor);
        //ctx.drawImage(img, 0, 0)




        // Need to invoke render (re-render) in the moment before capture, otherwise screenshot may be blank
        this.renderer.render(this.scene, this.camera)
        ctx.drawImage(this.canvasEl, posX, posY, width, height, 0, 0, width, height)

        // Make temporary <a> link as a way to invoke file download
        const a = document.createElement('a')
        document.body.appendChild(a)
        a.style.display = 'none'

        let blobWork = await overlayCanvas.toBlob( (blob) => {
            //this.saveBlob(blob, `screencapture.png`)
            //const url = window.URL.createObjectURL(blob)
            const url = window.URL.createObjectURL(blob)
            a.href = url
            a.download = 'screencapture.png'
            a.click()
        })

        ctx.clearRect(0, 0, width, height)

    }

    saveBlob(blob, filename) {
        return saveData(blob, fileName)
    }


    computeScreenSpaceBoundingBox(obj, camera) {
        var min
        var max

        // If object is array, run recursive loop
        if (Array.isArray(obj)) {
            for (var i = 0; i < obj.length; ++i) {
                let box2 = this.computeScreenSpaceBoundingBox(obj[i], camera)
                if (min === undefined) {
                    min = box2.min.clone()
                    max = box2.max.clone()
                } else {
                    min.min(box2.min)
                    max.max(box2.max)
                }
            }
        }
        
        // Does object have geometry?
        if (obj.geometry !== undefined) {

            var vertices = obj.geometry.vertices

            // BUFFERED GEOMETRY
            if (vertices === undefined && obj.geometry.attributes !== undefined && 'position' in obj.geometry.attributes) {

                const vertex = new THREE.Vector3()
                const pos = obj.geometry.attributes.position
                for (let i = 0; i < pos.count * pos.itemSize; i += pos.itemSize) {
                    vertex.set(pos.array[i], pos.array[i + 1], pos.array[i + 2])
                    const vertexWorldCoord = vertex.applyMatrix4(obj.matrixWorld)
                    const vertexScreenSpace = vertexWorldCoord.project(camera)//.normalize()
                    if (min === undefined) {
                        min = new THREE.Vector2(vertexScreenSpace.x, vertexScreenSpace.y)
                    } else {
                        min.min(vertexScreenSpace)
                    }

                    if (max === undefined) {
                        max = new THREE.Vector2(vertexScreenSpace.x, vertexScreenSpace.y)
                    } else{
                        max.max(vertexScreenSpace)
                    }
                }

            // REGULAR GEOMETRY
            } else {
                var vertex = new THREE.Vector3()
                for (var i = 0; i < vertices.length; ++i) {
                    var vertexWorldCoord = vertex.copy(vertices[i]).applyMatrix4(obj.matrixWorld)
                    var vertexScreenSpace = vertexWorldCoord.project(camera)
                    if (min === undefined) {
                        min = vertexScreenSpace.clone()
                        max = vertexScreenSpace.clone()
                    }
                    min.min(vertexScreenSpace)
                    max.max(vertexScreenSpace)
                }
            }
        }

        // If object has children, run recursive loop
        // TODO: Does order matter? Can this occur before geometry logic above?
        if (obj.children !== undefined) {
            for (var i = 0; i < obj.children.length; ++i) {
                let box2 = this.computeScreenSpaceBoundingBox(obj.children[i], camera)
                if (min === undefined) {
                    min = box2.min.clone()
                    max = box2.max.clone()
                } else {
                    min.min(box2.min)
                    max.max(box2.max)
                }
            }
        }

        return new THREE.Box2(min, max)
    }




    // ----------------------------------
    // OBJECT FUNCTIONS
    // ----------------------------------

    createObjectGroup(object) {

        let mesh

        // BOX DICE (ie pictodice dice)
        if (object != null && object.type != 'classic') {

            let loader = new THREE.TextureLoader()
            let cubeMaterials = []

            // MATERIAL
            for (let i = 0; i < object.faces.length; i++) {
                /*
                let loadItem = new THREE.MeshBasicMaterial(
                    {
                        map: loader.load('images/'+object.faces[i].image_src), transparent: true
                    })
                    , opacity: 0.5, color: 0xFF0000 })
                */


                let mapImage
                if (object.faces[i].type == 'text') {
                    mapImage = this.createFontTexture(object.faces[i].text_src)
                } else if (object.faces[i].type == 'image') {
                    mapImage = loader.load(this.baseURL+'images/'+object.faces[i].image_src)
                }
                
                let loadItem = new THREE.MeshStandardMaterial({
                    map: mapImage,
                    //alphaTest: 1, // Makes it light passes through transparent parts of png texture.
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

                    // TODO: What's all this for?
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

            // MESH: USING BASIC BOX MESH
            // TODO: Future: We use same rounded-corner mesh as classic dice
            // TODO: Should this be BoxBufferGeometry ?
            let object_geometry = new THREE.BoxGeometry(1, 1, 1)
            mesh = new THREE.Mesh(object_geometry, cubeMaterials)
            mesh.castShadow = true
            //mesh.receiveShadow = true // Enable if we want dice to cast shadow on other dice. Leaving disabled for better performance.

            // USING CUSTOM ROUNDED-EDGE MESH
            //mesh = createObjectMesh(useHoles, cubeMaterials)

        // CLASSIC DICE (rounded corners, dots, etc)
        } else if (!object || object.type == 'classic') {
            mesh = this.mesh_classicDice.clone()
        }

        mesh.scale.set(this.objectParams.scale,this.objectParams.scale,this.objectParams.scale)
        //mesh.frustumCulled = false // On every frame, checks whether object is in camera frame. 
        mesh.appClass = "appObject"

        //mesh.position.y = 0
        this.scene.add(mesh)

        // PHYSICS
        let physicsBoxGeometry = [this.objectParams.scale/2, this.objectParams.scale/2, this.objectParams.scale/2]
        const body = new CANNON.Body({
            mass: 1,
            shape: new CANNON.Box(new CANNON.Vec3(...physicsBoxGeometry)), // Values should be HALF of what the mesh geometry values are
            sleepTimeLimit: 0.1,
            //sleepSpeedLimit: 0.1
        })
        body.appClass = "appObject"
        this.physicsWorld.addBody(body)


        return { mesh, body }
    }


    // ===============================================
    // OBJECT MESH CREATION
    // ===============================================

    createObjectMesh(useHoles, cubeMaterials) {

        const objectMeshGroup = new THREE.Group()

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
            innerMesh = new THREE.Mesh(this.createObjectMesh_InnerGeometry(), boxMaterialInner)
        }

        // rest of the object (gray, rounded)
        const outerMesh = new THREE.Mesh(this.createObjectMesh_BoxGeometry(useHoles), boxMaterialOuter)
        
        outerMesh.castShadow = true

        if (useHoles) {
            objectMeshGroup.add(innerMesh, outerMesh)
        } else {
            objectMeshGroup.add(outerMesh)
        }

        return objectMeshGroup
    }

    createObjectMesh_BoxGeometry(useHoles) {

        let segments = useHoles ? this.objectParams.segments_ClassicDice : this.objectParams.segments

        // TODO: Should this be BoxBufferGeometry ?
        let boxGeometry = new THREE.BoxGeometry(1,1,1,segments,segments,segments)

        if (useHoles) {

            // DOTS (notches)
            const positionAttr = boxGeometry.attributes.position
            const subCubeHalfSize = 0.5 - this.objectParams.edgeRadius
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
                    addition.normalize().multiplyScalar(this.objectParams.edgeRadius)
                    position = subCube.add(addition)
                } else if (
                Math.abs(position.x) > subCubeHalfSize &&
                Math.abs(position.y) > subCubeHalfSize
                ) {
                    addition.z = 0
                    addition.normalize().multiplyScalar(this.objectParams.edgeRadius)
                    position.x = subCube.x + addition.x
                    position.y = subCube.y + addition.y
                } else if (
                Math.abs(position.x) > subCubeHalfSize &&
                Math.abs(position.z) > subCubeHalfSize
                ) {
                    addition.y = 0
                    addition.normalize().multiplyScalar(this.objectParams.edgeRadius)
                    position.x = subCube.x + addition.x
                    position.z = subCube.z + addition.z
                } else if (
                Math.abs(position.y) > subCubeHalfSize &&
                Math.abs(position.z) > subCubeHalfSize
                ) {
                    addition.x = 0
                    addition.normalize().multiplyScalar(this.objectParams.edgeRadius)
                    position.y = subCube.y + addition.y
                    position.z = subCube.z + addition.z
                }

                const notchWave = (v) => {
                    v = (1 / this.objectParams.notchRadius) * v
                    v = Math.PI * Math.max(-1, Math.min(1, v))
                    return this.objectParams.notchDepth * (Math.cos(v) + 1)
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
    createObjectMesh_InnerGeometry() {

        // Creates an inner box, slightly smaller, that just serves to fill divots with black color

                                // TODO: Should this be PlaneBufferGeometry?
        const baseGeometry = new THREE.PlaneGeometry(
            1 - 2 * this.objectParams.edgeRadius,
            1 - 2 * this.objectParams.edgeRadius
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

    addObjectEvents(object) {

        object.body.addEventListener("sleep", (e) => {

            object.body.allowSleep = false
            object.body.landed = false

            // CALCULATE FINAL OBJECT LANDING POSITION (ie what face is pointing up)
            const euler = new CANNON.Vec3()
            e.target.quaternion.toEuler(euler)

            const eps = 0.1
            let isZero = (angle) => Math.abs(angle) < eps
            let isHalfPi = (angle) => Math.abs(angle - 0.5 * Math.PI) < eps
            let isMinusHalfPi = (angle) => Math.abs(0.5 * Math.PI + angle) < eps
            let isPiOrMinusPi = (angle) => Math.abs(Math.PI - angle) < eps || Math.abs(Math.PI + angle) < eps

            if (isZero(euler.z)) {
                if (isZero(euler.x)) {
                    this.showRollResults(1)
                    object.body.landed = true
                        // checkObjectStoppedMoving()
                } else if (isHalfPi(euler.x)) {
                    this.showRollResults(4)
                    object.body.landed = true
                        // checkObjectStoppedMoving()
                } else if (isMinusHalfPi(euler.x)) {
                    this.showRollResults(3)
                    object.body.landed = true
                        //  checkObjectStoppedMoving()
                } else if (isPiOrMinusPi(euler.x)) {
                    this.showRollResults(6)
                    object.body.landed = true
                        //  checkObjectStoppedMoving()
                } else {
                    // landed on edge => wait to fall on side and fire the event again
                    object.body.allowSleep = true
                }
            } else if (isHalfPi(euler.z)) {
                this.showRollResults(2)
                object.body.landed = true
                    // checkObjectStoppedMoving()
            } else if (isMinusHalfPi(euler.z)) {
                this.showRollResults(5)
                object.body.landed = true
                //checkObjectStoppedMoving()
            } else {
                // landed on edge => wait to fall on side and fire the event again
                object.body.allowSleep = true
            }

            if (object.body.landed = true) {
                this.checkObjectStoppedMoving()
            }
        })
    }

    checkObjectStoppedMoving() {

        let objectStillMoving = this.objectArray.filter( obj => obj.body.landed == false
        && (obj.body.velocity.z < 0.1 && obj.body.velocity.x < 0.1 && obj.body.velocity.y < 0.1)
        && (obj.body.angularVelocity.z < 0.1 && obj.body.angularVelocity.x < 0.1 && obj.body.angularVelocity.y < 0.1)
        )

        let timeDiff = Math.round(new Date() - this.rollTimer / 1000)


        if (objectStillMoving.length == 0 || timeDiff > 5.5) {

            // TODO: Move this
            //this.store.rolling = false

            //this.stopAnimation()

            if (timeDiff > 2.5) {
                //this.scoreResult = "Roll unfinished"
                this.stopAnimation()
            }
            
        }

    }

    throwObjects() {

        this.allowedToAnimate = true
        this.renderScene()
        // TODO: Move this
        //this.store.rolling = true
        this.rollTimer = new Date()

        //this.scoreResult = null

        this.objectArray.forEach((object, index) => {

            // MOTION
            object.body.velocity.setZero()
            object.body.angularVelocity.setZero()

            // POSITION
            //d.body.position = new CANNON.Vec3(2, index * 1.5, 0)
            //const throwHeight = () => {
            //    return generateRandomInteger(40, 150) //(index+2) * (objectParams.scale - ((40 / 100) * objectParams.scale))
            //}
            object.body.position = new CANNON.Vec3(generateRandomInteger(-10,10), generateRandomInteger(70, 150), generateRandomInteger(-10,10))
            object.mesh.position.copy(object.body.position)

            // ROTATION
            //object.mesh.rotation.set( 2 * Math.PI * Math.random(),   0,  2 * Math.PI * Math.random()  )
            object.mesh.rotation.set( 2 * Math.PI * Math.random(), 2 * Math.PI * Math.random(), 2 * Math.PI * Math.random())
            object.body.quaternion.copy(object.mesh.quaternion)

            // RANDOM FORCE
            const force = 33 + (35 * Math.random())

            // APPLY
            object.body.applyImpulse(

                // POSITION
                new CANNON.Vec3(generateRandomInteger(-4,32), force, -generateRandomInteger(-8,32)), // left-right, gravity, top-bottom

                // ROTATION
                new CANNON.Vec3(generateRandomInteger(3,4)*(100/this.objectParams.scale), generateRandomInteger(3,4)*(100/this.objectParams.scale), -generateRandomInteger(3,4)*(100/this.objectParams.scale))
            )

            object.body.allowSleep = true
        })
    }

    showRollResults(score) {
        /*
        if (!this.scoreResult) {
            this.scoreResult += score
        } else {
            this.scoreResult += "+" + score
        }
        */
    }



}