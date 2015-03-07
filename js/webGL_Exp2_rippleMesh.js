var gl; // A global variable for the WebGL context

function start() {
    "use strict";
    
    var renderer,
        container,
        camera,
        mesh,
        material,
        scene;
    
    window.addEventListener('load', init );
    
    function init(){
        
        scene = new THREE.Scene();
        
        camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 10, 1000);
        camera.position.z = 100;
        
        scene.add( camera );
        
        
        
        renderer = new THREE.WebGLRenderer( {antialias:true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        container = renderer.domElement;
        document.body.appendChild( container );
        
        render();
    }
    
    function render(){
        requestAnimationFrame( render );
        
        renderer.render( scene, camera );
    
    }

}