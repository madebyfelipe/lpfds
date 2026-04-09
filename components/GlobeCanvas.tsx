"use client";

import { useEffect, useRef } from "react";

export function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animId: number;

    async function init() {
      const THREE = await import("three");

      const canvas = canvasRef.current;
      if (!canvas) return;

      const W = canvas.clientWidth || 480;
      const H = canvas.clientHeight || 480;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(W, H, false);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 100);
      camera.position.set(0, 0, 3.4);

      // ── Wireframe sphere ──────────────────────────────
      const sphereGeo = new THREE.SphereGeometry(1, 28, 18);
      const wireGeo = new THREE.WireframeGeometry(sphereGeo);
      const wireMat = new THREE.LineBasicMaterial({
        color: 0xd42b2b,
        opacity: 0.14,
        transparent: true,
      });
      const wireframe = new THREE.LineSegments(wireGeo, wireMat);
      scene.add(wireframe);

      // ── Surface dots ──────────────────────────────────
      const dotPositions: number[] = [];
      for (let i = 0; i < 90; i++) {
        const phi = Math.acos(2 * Math.random() - 1);
        const theta = Math.random() * Math.PI * 2;
        dotPositions.push(
          Math.sin(phi) * Math.cos(theta),
          Math.cos(phi),
          Math.sin(phi) * Math.sin(theta)
        );
      }
      const dotGeo = new THREE.BufferGeometry();
      dotGeo.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(dotPositions, 3)
      );
      const dotMat = new THREE.PointsMaterial({
        color: 0xff5555,
        size: 0.032,
        transparent: true,
        opacity: 0.75,
        sizeAttenuation: true,
      });
      const dots = new THREE.Points(dotGeo, dotMat);
      scene.add(dots);

      // ── Connection arcs ───────────────────────────────
      const arcGroup = new THREE.Group();
      const ptCount = dotPositions.length / 3;

      function surfacePoint(i: number) {
        return new THREE.Vector3(
          dotPositions[i * 3],
          dotPositions[i * 3 + 1],
          dotPositions[i * 3 + 2]
        );
      }

      for (let i = 0; i < 14; i++) {
        const ia = Math.floor(Math.random() * ptCount);
        const ib = Math.floor(Math.random() * ptCount);
        const p1 = surfacePoint(ia);
        const p2 = surfacePoint(ib);
        // Push control point outward along the arc midpoint
        const ctrl = p1.clone().add(p2).multiplyScalar(0.5).normalize().multiplyScalar(1.4);
        const curve = new THREE.QuadraticBezierCurve3(p1, ctrl, p2);
        const arcGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(36));
        const arcMat = new THREE.LineBasicMaterial({
          color: 0xd42b2b,
          opacity: 0.28,
          transparent: true,
        });
        arcGroup.add(new THREE.Line(arcGeo, arcMat));
      }
      scene.add(arcGroup);

      // ── Saturn-style rings ─────────────────────────────
      const RING_TILT = Math.PI / 2.6;

      const ring1Geo = new THREE.RingGeometry(1.22, 1.52, 80);
      const ring1Mat = new THREE.MeshBasicMaterial({
        color: 0xd42b2b,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.1,
      });
      const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
      ring1.rotation.x = RING_TILT;
      scene.add(ring1);

      const ring2Geo = new THREE.RingGeometry(1.58, 1.74, 80);
      const ring2Mat = new THREE.MeshBasicMaterial({
        color: 0xcc3333,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.06,
      });
      const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
      ring2.rotation.x = RING_TILT;
      scene.add(ring2);

      // Inner ring edge line for crispness
      const edgeGeo = new THREE.RingGeometry(1.51, 1.53, 80);
      const edgeMat = new THREE.MeshBasicMaterial({
        color: 0xff4444,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.2,
      });
      const edge = new THREE.Mesh(edgeGeo, edgeMat);
      edge.rotation.x = RING_TILT;
      scene.add(edge);

      // ── Pause when off-screen or tab hidden ──────────
      function animate() {
        animId = requestAnimationFrame(animate);
        const t = Date.now() * 0.00018;

        wireframe.rotation.y = t * 0.55;
        wireframe.rotation.x = t * 0.14;
        dots.rotation.y = t * 0.55;
        dots.rotation.x = t * 0.14;
        arcGroup.rotation.y = t * 0.55;
        arcGroup.rotation.x = t * 0.14;

        ring1.rotation.z = t * 0.18;
        ring2.rotation.z = t * 0.13;
        edge.rotation.z = t * 0.18;

        renderer.render(scene, camera);
      }

      let running = false;
      function stop() { cancelAnimationFrame(animId); running = false; }
      function start() { if (!running) { running = true; animate(); } }

      const io = new IntersectionObserver(
        ([entry]) => { entry.isIntersecting ? start() : stop(); },
        { threshold: 0 }
      );
      io.observe(canvas);

      function onVisibility() { document.hidden ? stop() : start(); }
      document.addEventListener("visibilitychange", onVisibility);

      start();

      // Cleanup ref so we can dispose in the return
      (canvas as HTMLCanvasElement & { _threeCleanup?: () => void })._threeCleanup = () => {
        cancelAnimationFrame(animId);
        io.disconnect();
        document.removeEventListener("visibilitychange", onVisibility);
        wireGeo.dispose(); wireMat.dispose(); sphereGeo.dispose();
        dotGeo.dispose(); dotMat.dispose();
        ring1Geo.dispose(); ring1Mat.dispose();
        ring2Geo.dispose(); ring2Mat.dispose();
        edgeGeo.dispose(); edgeMat.dispose();
        arcGroup.children.forEach((c) => {
          const l = c as import("three").Line;
          l.geometry.dispose();
          (l.material as import("three").Material).dispose();
        });
        renderer.dispose();
      };
    }

    init();

    return () => {
      cancelAnimationFrame(animId);
      const canvas = canvasRef.current as (HTMLCanvasElement & { _threeCleanup?: () => void }) | null;
      canvas?._threeCleanup?.();
    };
  }, []);

  return <canvas ref={canvasRef} className="cta-globe" aria-hidden="true" />;
}
