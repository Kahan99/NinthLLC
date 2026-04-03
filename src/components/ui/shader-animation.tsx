"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    camera: THREE.Camera
    scene: THREE.Scene
    renderer: THREE.WebGLRenderer
    uniforms: any
    animationId: number
  } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Vertex shader
    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

    // Fragment shader
    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      float hash(float n) {
        return fract(sin(n) * 43758.5453123);
      }

      float get_bar(vec2 uv, float t, float offset) {
        float x = uv.x + offset;
        float col_id = floor(x * 120.0);
        float col_fract = fract(x * 120.0);
        
        float h = hash(col_id);
        float speed = (h - 0.5) * 1.5;
        float phase = hash(col_id + 7.23) * 6.28;
        
        // Vertical windowing
        float y_center = 0.5 + (hash(col_id + 13.41) - 0.5) * 0.2;
        float y_spread = 0.2 + hash(col_id + 21.09) * 0.4;
        float y_grad = smoothstep(y_center - y_spread, y_center, uv.y) * smoothstep(y_center + y_spread, y_center, uv.y);
        
        // Horizontal bar shape
        float bar_width = 0.05 + hash(col_id + 3.1) * 0.45;
        float bar = smoothstep(0.5 - bar_width, 0.5, col_fract) * smoothstep(0.5 + bar_width, 0.5, col_fract);
        
        // Animation
        float pulse = sin(t * speed + phase) * 0.5 + 0.5;
        pulse = pow(pulse, 3.0); // Sharpen the pulses
        
        return bar * pulse * y_grad;
      }

      void main(void) {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        float t = time * 0.2;
        
        // Chromatic aberration shift values
        float shift = 0.0025;
        
        vec3 col;
        col.r = get_bar(uv, t, -shift);
        col.g = get_bar(uv, t, 0.0);
        col.b = get_bar(uv, t, shift);
        
        // Add subtle horizontal "glitch" lines
        float glitch = step(0.995, hash(uv.y + t * 5.0)) * hash(t) * 0.2;
        col += glitch;
        
        // Darken the overall result for better text legibility
        col *= 0.7;
        
        // Add scanline texture
        float scanline = sin(uv.y * 1200.0) * 0.04;
        col -= scanline;
        
        gl_FragColor = vec4(col, 1.0);
      }
    `

    // Initialize Three.js scene
    const camera = new THREE.Camera()
    camera.position.z = 1

    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
    }

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)

    container.appendChild(renderer.domElement)

    // Handle window resize
    const onWindowResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      renderer.setSize(width, height)
      uniforms.resolution.value.x = renderer.domElement.width
      uniforms.resolution.value.y = renderer.domElement.height
    }

    // Initial resize
    onWindowResize()
    window.addEventListener("resize", onWindowResize, false)

    // Animation loop
    const animate = () => {
      const animationId = requestAnimationFrame(animate)
      uniforms.time.value += 0.05
      renderer.render(scene, camera)

      if (sceneRef.current) {
        sceneRef.current.animationId = animationId
      }
    }

    // Store scene references for cleanup
    sceneRef.current = {
      camera,
      scene,
      renderer,
      uniforms,
      animationId: 0,
    }

    // Start animation
    animate()

    // Cleanup function
    return () => {
      window.removeEventListener("resize", onWindowResize)

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId)

        if (container && sceneRef.current.renderer.domElement) {
          container.removeChild(sceneRef.current.renderer.domElement)
        }

        sceneRef.current.renderer.dispose()
        geometry.dispose()
        material.dispose()
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{
        background: "#000",
        overflow: "hidden",
      }}
    />
  )
}
