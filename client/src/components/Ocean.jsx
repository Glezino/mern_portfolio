import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';

const Ocean = () => {
    const containerRef = useRef(null);
     // Referencia al contenedor donde se renderizará la escena
     const azimuthRef = useRef(130); // Ref para el valor del azimuth

    useEffect(() => { //Lógica relacionada con la creación, actualización y limpieza de la escena
        let container;
        let camera, scene, renderer;
        let water, sun;

        const init = () => {
            container = containerRef.current;

            // Renderer
            renderer = new THREE.WebGLRenderer(); // Creamos el renderizador WebGL
            //renderer.setPixelRatio(window.devicePixelRatio); // Establecemos la relación de píxeles
            renderer.setSize(window.innerWidth, window.innerHeight); // Establecemos el tamaño de renderizado
            container.appendChild(renderer.domElement); // Agregamos el canvas del renderizador al contenedor

            // Scene
            scene = new THREE.Scene(); // Creamos la escena

            // Camera
            camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1,20000); // Creamos la cámara
            camera.position.set(0, 10, 0); // Establecemos la posición de la cámara

            // Water
            const waterGeometry = new THREE.PlaneGeometry(10000, 10000); // Creamos la geometría del agua
            water = new Water(waterGeometry, { // Creamos el objeto Water
                textureWidth: 512,
                textureHeight: 512,
                waterNormals: new THREE.TextureLoader().load('/src/assets/textures/waternormals.jpg', function (texture) {
                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping; // Repetición de la textura
                }),
                sunDirection: new THREE.Vector3(),
                sunColor: 0xffffff,
                waterColor: 0x001e0f,
                distortionScale: 3.7, // Escala de distorsión de la textura
                fog: scene.fog !== undefined // Habilita la niebla en el agua si la escena tiene niebla
            });
            water.rotation.x = -Math.PI / 2; // Rotamos el agua para que esté horizontal
            scene.add(water); // Agregamos el agua a la escena

            // Sun
            sun = new THREE.Vector3(); // Creamos un vector para representar la posición del sol

            // Skybox
            const sky = new Sky(); // Creamos el objeto Sky para el cielo
            sky.scale.setScalar(10000); // Escalamos el cielo
            scene.add(sky); // Agregamos el cielo a la escena

            const skyUniforms = sky.material.uniforms; // Obtenemos los uniformes del material del cielo
            skyUniforms['turbidity'].value = 8; // Configuramos la turbidez del cielo: brumoso
            skyUniforms['rayleigh'].value = 2; // Rayleigh del cielo: color del cielo durante el día
            skyUniforms['mieCoefficient'].value = 0.002; // Coeficiente de Mie del cielo: dispersión en partículas más grandes
            skyUniforms['mieDirectionalG'].value = 0.8; // Dirección de Mie del cielo: resplandor y claridad

            const parameters = { elevation: .5, azimuth: 10 }; // Parámetros para la posición del sol
            const pmremGenerator = new THREE.PMREMGenerator(renderer); // Generador de prefiltrado
            const sceneEnv = new THREE.Scene(); // Escena para el entorno
            let renderTarget;

            const updateSun = () => { // Función para actualizar la posición del sol
                const phi = THREE.MathUtils.degToRad(90 - parameters.elevation); // Convertir la elevación de grados a radianes
                const theta = THREE.MathUtils.degToRad(azimuthRef.current); // Convertir el azimut de grados a radianes
                sun.setFromSphericalCoords(1, phi, theta); // Establecer la posición del sol en coordenadas esféricas
                sky.material.uniforms['sunPosition'].value.copy(sun); // Copiar la posición del sol al uniforme 'sunPosition' del material del cielo
                water.material.uniforms['sunDirection'].value.copy(sun).normalize(); // Copiar la posición del sol al uniforme 'sunDirection' del material del agua y normalizarlo
                if (renderTarget !== undefined) renderTarget.dispose(); // Descartar el objetivo de renderizado actual si existe
                sceneEnv.add(sky); // Añadir el cielo al entorno de la escena
                renderTarget = pmremGenerator.fromScene(sceneEnv); // Generar un mapa de renderizado de prefiltering de múltiples entornos desde la escena del entorno
                scene.add(sky); // Añadir el cielo a la escena principal
                scene.environment = renderTarget.texture; // Establecer el entorno de la escena principal como la textura del objetivo de renderizado
            };
            updateSun(); // Actualizamos la posición inicial del sol

            window.addEventListener('resize', onWindowResize); // Evento de redimensionamiento de ventana
            window.addEventListener('scroll', handleScroll);
        };  
        
        const handleScroll = () => {
            // Obtener el valor actual del scroll
            const scrollValue = window.scrollY;
            // Calcular el nuevo valor del azimuth en función del scroll
            const newAzimuth = 180 + scrollValue;
            // Actualizar el valor del azimuth
            azimuthRef.current = newAzimuth;
            // Llamar a la función para actualizar la posición del sol con el nuevo azimuth
            updateSun();
        };
        
        const onWindowResize = () => { // Función para manejar el redimensionamiento de la ventana
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        const animate = () => { // Función de animación
            requestAnimationFrame(animate);
            render();
        };

        const render = () => { // Función de renderizado
            water.material.uniforms['time'].value += 1.0 / 60.0;
            renderer.render(scene, camera);
        };
    

        init(); // Inicializamos la escena
        animate(); // Comenzamos la animación

        // Cleanup
        return () => {
            window.removeEventListener('resize', onWindowResize);
            window.removeEventListener('scroll', handleScroll); 
            containerRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={containerRef} />; // Retornamos el contenedor de la escena
};

export default Ocean; // Exportamos el componente
