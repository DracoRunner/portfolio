import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
    const containerRef = useRef(null);
    const rendererRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xFDFBF7);

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        rendererRef.current = renderer;
        container.appendChild(renderer.domElement);

        // Create a TorusKnot (Abstract shape)
        const geometry = new THREE.TorusKnotGeometry(1.8, 0.6, 100, 16);
        const material = new THREE.MeshBasicMaterial({
            color: 0x121212,
            wireframe: true,
            transparent: true,
            opacity: 0.15
        });
        const torusKnot = new THREE.Mesh(geometry, material);
        scene.add(torusKnot);

        // Particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 200;
        const posArray = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 15;
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.05,
            color: 0xCCFF00
        });
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Mouse Interaction
        let mouseX = 0;
        let mouseY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        const handleMouseMove = (event) => {
            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;
        };
        document.addEventListener('mousemove', handleMouseMove);

        // Animation Loop
        let animationId;
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            const targetX = mouseX * 0.001;
            const targetY = mouseY * 0.001;

            torusKnot.rotation.y += 0.05 * (targetX - torusKnot.rotation.y);
            torusKnot.rotation.x += 0.05 * (targetY - torusKnot.rotation.x);
            torusKnot.rotation.z += 0.002;

            particlesMesh.rotation.y = -mouseX * 0.0005;
            particlesMesh.rotation.x = -mouseY * 0.0005;

            renderer.render(scene, camera);
        };
        animate();

        // Resize Handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            cancelAnimationFrame(animationId);
            document.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            if (rendererRef.current) {
                container.removeChild(rendererRef.current.domElement);
                rendererRef.current.dispose();
            }
        };
    }, []);

    return <div ref={containerRef} id="canvas-container" />;
};

export default ThreeBackground;
