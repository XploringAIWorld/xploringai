'use client'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import earthTexture from '@/assets/earthimg.jpg';

const Earth = () => {
    const containerRef = useRef();

    useEffect(() => {
        let scene, camera, renderer, earth, controls;

        const container = containerRef.current;

        // Create scene
        scene = new THREE.Scene();

        // Create camera
        camera = new THREE.PerspectiveCamera(
            75,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        // Create renderer
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        // Create Earth geometry and material
        const earthGeometry = new THREE.SphereGeometry(10, 64, 64);
        const earthTextureLoader = new THREE.TextureLoader().load(earthTexture);
        const earthMaterial = new THREE.MeshPhongMaterial({
            map: earthTextureLoader,
            shininess: 10,
        });
        earth = new THREE.Mesh(earthGeometry, earthMaterial);
        scene.add(earth);

        // Create directional light
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 3, 5);
        scene.add(light);

        // Create controls
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.rotateSpeed = 0.5;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Update controls
            controls.update();

            renderer.render(scene, camera);
        };

        animate();

        // Clean up
        return () => {
            container.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Earth;
