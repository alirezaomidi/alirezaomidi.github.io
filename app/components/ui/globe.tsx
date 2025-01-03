"use client"

import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "app/lib/utils"

const GLOBE_CONFIG: COBEOptions = {
    width: 400,
    height: 400,
    onRender: () => { },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [1, 1, 1],
    markers: [
        // North America
        { location: [49.2827, -123.1207], size: 0.1 }, // Vancouver
        { location: [45.5017, -73.5673], size: 0.05 }, // Montreal
        { location: [43.6532, -79.3832], size: 0.05 }, // Toronto
        { location: [51.0447, -114.0719], size: 0.05 }, // Calgary
        { location: [51.1784, -115.5708], size: 0.05 }, // Banff
        { location: [48.4284, -123.3656], size: 0.05 },  // Victoria

        // Europe
        { location: [37.9838, 23.7275], size: 0.05 },  // Athens
        { location: [36.3932, 25.4615], size: 0.05 },  // Santorini
        { location: [50.1109, 8.6821], size: 0.05 },   // Frankfurt
        { location: [48.8566, 2.3522], size: 0.05 },   // Paris
        { location: [52.3676, 4.9041], size: 0.05 },   // Amsterdam
        { location: [41.0082, 28.9784], size: 0.05 },  // Istanbul

        // Iran
        { location: [35.6892, 51.3890], size: 0.075 },  // Tehran
        { location: [32.6546, 51.6680], size: 0.1 },    // Isfahan
    ],
}

export function Globe({
    className,
    config = GLOBE_CONFIG,
}: {
    className?: string
    config?: COBEOptions
}) {
    let phi = 0
    let width = 0
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const pointerInteracting = useRef(null)
    const pointerInteractionMovement = useRef(0)
    const [r, setR] = useState(0)

    const updatePointerInteraction = (value: any) => {
        pointerInteracting.current = value
        if (canvasRef.current) {
            canvasRef.current.style.cursor = value ? "grabbing" : "grab"
        }
    }

    const updateMovement = (clientX: any) => {
        if (pointerInteracting.current !== null) {
            const delta = clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta
            setR(delta / 200)
        }
    }

    const onRender = useCallback(
        (state: Record<string, any>) => {
            if (!pointerInteracting.current) phi += 0.005
            state.phi = phi + r
            state.width = width * 2
            state.height = width * 2
        },
        [r],
    )

    const onResize = () => {
        if (canvasRef.current) {
            width = canvasRef.current.offsetWidth
        }
    }

    useEffect(() => {
        window.addEventListener("resize", onResize)
        onResize()

        const globe = createGlobe(canvasRef.current!, {
            ...config,
            width: width * 2,
            height: width * 2,
            onRender,
        })

        setTimeout(() => (canvasRef.current!.style.opacity = "1"))
        return () => globe.destroy()
    }, [])

    return (
        <div
            className={cn(
                "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
                className,
            )}
        >
            <canvas
                className={cn(
                    "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
                )}
                ref={canvasRef}
                onPointerDown={(e) =>
                    updatePointerInteraction(
                        e.clientX - pointerInteractionMovement.current,
                    )
                }
                onPointerUp={() => updatePointerInteraction(null)}
                onPointerOut={() => updatePointerInteraction(null)}
                onMouseMove={(e) => updateMovement(e.clientX)}
                onTouchMove={(e) =>
                    e.touches[0] && updateMovement(e.touches[0].clientX)
                }
            />
        </div>
    )
} 