// the container of the object
const scene = new THREE.Scene();

// how to view the object
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    // how close to the object
    0.1,
    // how far from the object
    1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

// show the object to the html
document.body.appendChild(renderer.domElement);

// create the box geometry
// the size of the box geometry
const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshBasicMaterial( {color: 0x9ab9d4} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

// this function run like a loop
function animate(){
    // this keep displaying the box geometry
    requestAnimationFrame(animate);

    // rotate the cube based on axis by speed
    cube.rotation.x += 0.03;
    cube.rotation.y += 0.03;

    renderer.render(scene, camera);
}

animate();