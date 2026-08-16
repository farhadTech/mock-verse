import { useEffect, useRef } from "react";
import * as THREE from "three";

const DashboardScene = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    // =====================================================
    // Scene
    // =====================================================

    const scene = new THREE.Scene();

    // =====================================================
    // Camera
    // =====================================================

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );

    camera.position.z = 8;

    // =====================================================
    // Renderer
    // =====================================================

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );

    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);

    // =====================================================
    // Group
    // =====================================================

    const group = new THREE.Group();

    scene.add(group);

    // =====================================================
    // Floating particles
    // =====================================================

    const particleCount = 180;

    const positions = new Float32Array(
      particleCount * 3
    );

    for (let i = 0; i < particleCount; i++) {
      const index = i * 3;

      positions[index] =
        (Math.random() - 0.5) * 18;

      positions[index + 1] =
        (Math.random() - 0.5) * 10;

      positions[index + 2] =
        (Math.random() - 0.5) * 8;
    }

    const particleGeometry =
      new THREE.BufferGeometry();

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        positions,
        3
      )
    );

    const particleMaterial =
      new THREE.PointsMaterial({
        color: 0x10b981,
        size: 0.035,
        transparent: true,
        opacity: 0.4,
        sizeAttenuation: true,
      });

    const particles = new THREE.Points(
      particleGeometry,
      particleMaterial
    );

    scene.add(particles);

    // =====================================================
    // Floating geometric objects
    // =====================================================

    const geometry = new THREE.IcosahedronGeometry(
      0.55,
      1
    );

    const material =
      new THREE.MeshBasicMaterial({
        color: 0x10b981,
        wireframe: true,
        transparent: true,
        opacity: 0.13,
      });

    const object1 = new THREE.Mesh(
      geometry,
      material
    );

    object1.position.set(
      3.2,
      1.5,
      -1
    );

    group.add(object1);

    // -----------------------------------------------------

    const geometry2 =
      new THREE.OctahedronGeometry(
        0.45,
        0
      );

    const material2 =
      new THREE.MeshBasicMaterial({
        color: 0x14b8a6,
        wireframe: true,
        transparent: true,
        opacity: 0.1,
      });

    const object2 = new THREE.Mesh(
      geometry2,
      material2
    );

    object2.position.set(
      -3.5,
      -1.2,
      -2
    );

    group.add(object2);

    // -----------------------------------------------------

    const geometry3 =
      new THREE.TorusGeometry(
        0.65,
        0.02,
        16,
        64
      );

    const material3 =
      new THREE.MeshBasicMaterial({
        color: 0x059669,
        transparent: true,
        opacity: 0.12,
      });

    const object3 = new THREE.Mesh(
      geometry3,
      material3
    );

    object3.position.set(
      2,
      -2.1,
      -1.5
    );

    group.add(object3);

    // =====================================================
    // Mouse interaction
    // =====================================================

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      mouseX =
        (event.clientX /
          window.innerWidth -
          0.5) *
        2;

      mouseY =
        (event.clientY /
          window.innerHeight -
          0.5) *
        2;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    // =====================================================
    // Animation
    // =====================================================

    let animationFrameId = 0;

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId =
        requestAnimationFrame(animate);

      const elapsed =
        clock.getElapsedTime();

      // Rotate objects
      object1.rotation.x =
        elapsed * 0.25;

      object1.rotation.y =
        elapsed * 0.35;

      object2.rotation.x =
        elapsed * -0.2;

      object2.rotation.y =
        elapsed * 0.3;

      object3.rotation.x =
        elapsed * 0.15;

      object3.rotation.z =
        elapsed * 0.25;

      // Slowly rotate particles
      particles.rotation.y =
        elapsed * 0.015;

      particles.rotation.x =
        elapsed * 0.005;

      // Mouse parallax
      group.rotation.y +=
        (mouseX * 0.08 -
          group.rotation.y) *
        0.02;

      group.rotation.x +=
        (-mouseY * 0.05 -
          group.rotation.x) *
        0.02;

      particles.rotation.y +=
        (mouseX * 0.015 -
          particles.rotation.y) *
        0.01;

      renderer.render(
        scene,
        camera
      );
    };

    animate();

    // =====================================================
    // Resize
    // =====================================================

    const handleResize = () => {
      if (!container) {
        return;
      }

      const width =
        container.clientWidth;

      const height =
        container.clientHeight;

      camera.aspect =
        width / height;

      camera.updateProjectionMatrix();

      renderer.setSize(
        width,
        height
      );

      renderer.setPixelRatio(
        Math.min(
          window.devicePixelRatio,
          2
        )
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    handleResize();

    // =====================================================
    // Cleanup
    // =====================================================

    return () => {
      cancelAnimationFrame(
        animationFrameId
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      geometry.dispose();
      geometry2.dispose();
      geometry3.dispose();

      material.dispose();
      material2.dispose();
      material3.dispose();

      particleGeometry.dispose();
      particleMaterial.dispose();

      renderer.dispose();

      if (
        renderer.domElement.parentNode ===
        container
      ) {
        container.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        absolute
        inset-0
        h-full
        w-full
      "
      aria-hidden="true"
    />
  );
};

export default DashboardScene;