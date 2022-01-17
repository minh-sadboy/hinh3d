import * as THREE from './lib/three.module.js';
import { GLTFLoader } from './lib/GLTFLoader.js'
import { OrbitControls } from './lib/OrbitControls.js';

const canvas = document.querySelector('.webgl');
const scene = new THREE.Scene();


const loader = new GLTFLoader();
loader.load('scene.glb', function (gltf) {
    const root = gltf.scene;
    root.rotation.set(0.6,-0.45,0)
    console.log(root)
    scene.add(root);
    var aabb = new THREE.Box3().setFromObject(gltf.scene);
    aabb.getCenter(controls.target);
})

const light1 = new THREE.DirectionalLight(0xffffff, 0.6)
light1.position.set(0,300,500)
scene.add(light1)
const light2 = new THREE.DirectionalLight(0xffffff, 0.6)
light2.position.set(500,100,0)
scene.add(light2)

const light3 = new THREE.DirectionalLight(0xffffff, 0.6)
light3.position.set(0,100,-500)
scene.add(light3)

const light4 = new THREE.DirectionalLight(0xffffff, 0.6)
light4.position.set(-500,300,500)
scene.add(light4)




const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})
renderer.setSize(window.innerWidth -10, window.innerHeight-10);
document.body.appendChild(renderer.domElement);
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(10, 10, 30);
controls.update();
scene.add(camera);


function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    renderer.setClearColor(0xffffff);
    controls.update();

}
animate()