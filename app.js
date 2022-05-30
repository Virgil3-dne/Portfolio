var scene3d = document.getElementById("scene3d");
var CANVAS_WIDTH = 500;
var CANVAS_HEIGHT = 500;

// SCENE

scene = new THREE.Scene();

// CAMERA 

camera = new THREE.PerspectiveCamera(45, CANVAS_WIDTH / CANVAS_HEIGHT, 0.1, 100);
camera.position.x = -3;
camera.position.y = 0;
camera.position.z = 0;
camera.lookAt(scene.position);

// RENDERER

renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setClearColor(0x000, 1.0);
renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);

// GEOMETRY & MATERIALS

var geometry = new THREE.BoxGeometry( 1, 1, 1 );


var cubeMaterials =
[
    new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load( 'img/1.png' ), shininess  : 200, side: THREE.DoubleSide } ),
    new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load( 'img/2.png' ), shininess  : 200, side: THREE.DoubleSide } ),
    new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load( 'img/3.png' ), shininess  : 200, side: THREE.DoubleSide } ),
    new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load( 'img/4.png' ), shininess  : 200, side: THREE.DoubleSide } ),
    new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load( 'img/5.png' ), shininess  : 200, side: THREE.DoubleSide } ),
    new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load( 'img/6.png' ), shininess  : 200, side: THREE.DoubleSide } ),
];

var material = new THREE.MeshFaceMaterial( cubeMaterials ); 
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
// LIGHT

var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.2 );
scene.add( ambientLight );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set(-5, 0, 0);
scene.add( directionalLight );

// FINISH SCENE SETUP


var animate = function () {
	requestAnimationFrame( animate );


	cube.rotation.y += -0.008;

	renderer.render( scene, camera );
};

animate();

// document.body.appendChild(scene3d.domElement);
scene3d.appendChild(renderer.domElement);
renderer.render(scene, camera);
