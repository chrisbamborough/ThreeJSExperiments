var camera;
var scene;
var renderer;
var mesh;

init();
animate();

function init() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);

    // add subtle ambient lighting
    var ambientLight = new THREE.AmbientLight(0xbbbbbb);
    scene.add(ambientLight);

    // directional lighting
    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);


    // Add the geometry type
    var geometry = new THREE.CubeGeometry(10, 10, 10);

    // control texture mapping from here
    var material = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture("images/crate.jpg")
    });
    //var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/crate.jpg') } );
    /*var material = new THREE.MeshPhongMaterial({
        ambient: 0x050505,
        color: 0x0033ff,
        specular: 0x555555,
        shininess: 30
    });*/

    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    mesh.position.z = -50;
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);

    render();
}

function animate() {
    mesh.rotation.x += .04;
    mesh.rotation.y += .02;

    render();
    requestAnimationFrame(animate);
}

function render() {
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}