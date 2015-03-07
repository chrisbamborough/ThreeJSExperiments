window.onload = function () {
    "use strict";
    
    // GRAB THE CONTAINER DIV
    var container = document.getElementById("webGLContainer");
    
    // create the three.js renderer and add it to the div
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    //container.appendChild(renderer.domElement);
    document.body.appendChild(renderer.domElement);
    
    // create a new three.js scene
    var scene = new THREE.Scene();
    
    // Create a camera and add to the scene
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //camera.position.set(0,0,3.33);
    camera.position.z = 5;
    scene.add(camera);
    
    
    // now create a cube and add it to the scene
    var geometry = new THREE.CubeGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
    });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    

    var render = function () {
        requestAnimationFrame(render);

        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;

        renderer.render(scene, camera);
    };

    render();

}