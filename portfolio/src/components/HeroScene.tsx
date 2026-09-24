"use client";

import { useEffect, useRef } from "react";

// Ink-on-paper "signal ridges": stacked oscilloscope traces with hidden-line removal.
// Pointer = probe that raises the field; click = ripple; scroll calms the signal.
export function HeroScene() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let disposed = false;
    let cleanup = () => {};

    import("three").then((THREE) => {
      if (disposed) return;
      const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
      const small = innerWidth < 760;
      const LINES = small ? 26 : 44;
      const PTS = small ? 110 : 170;
      const X0 = -11, X1 = 11, Z0 = -14, Z1 = 2.5, FLOOR = -3;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      el.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);

      // One ribbon (paper-coloured, hides lines behind) + one line per ridge
      const linePos = new Float32Array(LINES * PTS * 3);
      const lineCol = new Float32Array(LINES * PTS * 3);
      const lineIdx: number[] = [];
      const ribPos = new Float32Array(LINES * PTS * 2 * 3);
      const ribIdx: number[] = [];
      for (let l = 0; l < LINES; l++) {
        for (let p = 0; p < PTS - 1; p++) {
          const a = l * PTS + p;
          lineIdx.push(a, a + 1);
          const r = (l * PTS + p) * 2;
          ribIdx.push(r, r + 1, r + 2, r + 1, r + 3, r + 2);
        }
      }
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute("position", new THREE.BufferAttribute(linePos, 3));
      lineGeo.setAttribute("color", new THREE.BufferAttribute(lineCol, 3));
      lineGeo.setIndex(lineIdx);
      const ribGeo = new THREE.BufferGeometry();
      ribGeo.setAttribute("position", new THREE.BufferAttribute(ribPos, 3));
      ribGeo.setIndex(ribIdx);

      const lineMat = new THREE.LineBasicMaterial({ vertexColors: true });
      const ribMat = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
      scene.add(new THREE.Mesh(ribGeo, ribMat));
      scene.add(new THREE.LineSegments(lineGeo, lineMat));

      const HOT = Math.floor(LINES * 0.72); // the one orange trace
      const paintColors = () => {
        const cs = getComputedStyle(document.documentElement);
        const ink = new THREE.Color(cs.getPropertyValue("--ink").trim() || "#2a1d14");
        const paper = new THREE.Color(cs.getPropertyValue("--bg-primary").trim() || "#f6edd6");
        const orange = new THREE.Color(cs.getPropertyValue("--orange").trim() || "#e07a2f");
        ribMat.color.copy(paper);
        const c = new THREE.Color();
        for (let l = 0; l < LINES; l++) {
          const depth = l / (LINES - 1); // 0 = far, 1 = near
          if (l === HOT) c.copy(orange);
          else c.copy(paper).lerp(ink, 0.18 + 0.72 * depth);
          for (let p = 0; p < PTS; p++) c.toArray(lineCol, (l * PTS + p) * 3);
        }
        lineGeo.attributes.color.needsUpdate = true;
      };
      paintColors();
      const themeObs = new MutationObserver(() => {
        paintColors();
        if (reduced) update(1.2);
      });
      themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

      // Pointer probe (world space on y=0 plane) + click ripples
      const probe = { x: 3, z: -2, tx: 3, tz: -2, amp: 0, tamp: 0 };
      const ripples: { x: number; z: number; t: number }[] = [];
      const ray = new THREE.Raycaster();
      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
      const hit = new THREE.Vector3();
      const toWorld = (cx: number, cy: number) => {
        const r = el.getBoundingClientRect();
        ray.setFromCamera(new THREE.Vector2(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1), camera);
        return ray.ray.intersectPlane(plane, hit);
      };
      const onMove = (e: PointerEvent) => {
        if (toWorld(e.clientX, e.clientY)) { probe.tx = hit.x; probe.tz = hit.z; probe.tamp = 1; }
      };
      const onLeave = () => (probe.tamp = 0);
      const onDown = (e: PointerEvent) => {
        if ((e.target as HTMLElement).closest("a,button")) return;
        if (toWorld(e.clientX, e.clientY)) ripples.push({ x: hit.x, z: hit.z, t: now() });
        if (ripples.length > 4) ripples.shift();
      };
      const section = el.parentElement!;
      section.addEventListener("pointermove", onMove);
      section.addEventListener("pointerleave", onLeave);
      section.addEventListener("pointerdown", onDown);

      const resize = () => {
        const w = el.clientWidth, h = el.clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        const wide = w / h > 1.2;
        // wide: push the field to the right so the headline sits on clean paper
        camera.position.set(wide ? -2.8 : 0, wide ? 2.6 : 3.4, wide ? 9.5 : 12.5);
        camera.lookAt(wide ? -2.8 : 0, wide ? 0.9 : 0.6, -4);
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(el);

      const t0 = performance.now();
      const now = () => (performance.now() - t0) / 1000;
      const update = (t: number) => {
        const calm = Math.min(1, window.scrollY / (innerHeight * 0.9)); // scroll settles the signal
        probe.x += (probe.tx - probe.x) * 0.08;
        probe.z += (probe.tz - probe.z) * 0.08;
        probe.amp += (probe.tamp - probe.amp) * 0.05;
        for (let l = 0; l < LINES; l++) {
          const z = Z0 + (Z1 - Z0) * (l / (LINES - 1));
          for (let p = 0; p < PTS; p++) {
            const x = X0 + (X1 - X0) * (p / (PTS - 1));
            const env = Math.exp(-((x - 1.5) ** 2) / 22); // taller in the middle, like a spectrum
            let y =
              env * (0.55 * Math.sin(x * 0.9 + t * 0.9 + l * 0.35) + 0.35 * Math.sin(x * 2.1 - t * 1.3 + l * 0.8) * Math.sin(l * 1.7)) *
              (1 - 0.75 * calm);
            y += env * 0.45 * Math.abs(Math.sin(x * 1.7 + l * 2.1 + t * 0.3)) ** 6 * (1 - calm); // occasional peaks
            const d2 = (x - probe.x) ** 2 + (z - probe.z) ** 2;
            y += probe.amp * 1.7 * Math.exp(-d2 / 2.2);
            for (const r of ripples) {
              const age = t - r.t;
              const d = Math.sqrt((x - r.x) ** 2 + (z - r.z) ** 2);
              y += 0.8 * Math.sin(d * 2.2 - age * 7) * Math.exp(-age * 1.1) * Math.exp(-((d - age * 3.2) ** 2) / 3);
            }
            const i = (l * PTS + p) * 3;
            linePos[i] = x; linePos[i + 1] = y; linePos[i + 2] = z;
            const r = (l * PTS + p) * 6;
            ribPos[r] = x; ribPos[r + 1] = y; ribPos[r + 2] = z;
            ribPos[r + 3] = x; ribPos[r + 4] = FLOOR; ribPos[r + 5] = z;
          }
        }
        lineGeo.attributes.position.needsUpdate = true;
        ribGeo.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
      };

      let raf = 0;
      let visible = true;
      const loop = () => {
        raf = requestAnimationFrame(loop);
        if (visible && !document.hidden) update(now());
      };
      const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
      io.observe(el);
      if (reduced) update(1.2);
      else loop();

      cleanup = () => {
        cancelAnimationFrame(raf);
        io.disconnect(); ro.disconnect(); themeObs.disconnect();
        section.removeEventListener("pointermove", onMove);
        section.removeEventListener("pointerleave", onLeave);
        section.removeEventListener("pointerdown", onDown);
        lineGeo.dispose(); ribGeo.dispose(); lineMat.dispose(); ribMat.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <div ref={host} className="hero-canvas" aria-hidden="true" />;
}
