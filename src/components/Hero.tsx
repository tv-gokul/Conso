"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div
            ref={containerRef}
            id="home"
            className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-conso-red/20 via-background to-background opacity-40 animate-pulse-slow" />

            {/* Gradient Grid / Mesh Effect */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            {/* Floating Particles (Simulated with div for performance) */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-conso-red/10 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"
            />

            {/* Hero Content */}
            <motion.div
                style={{ y: y1, opacity }}
                className="relative z-10 text-center px-4 max-w-5xl mx-auto"
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-conso-red font-mono tracking-[0.2em] mb-4 uppercase"
                >
                    E-Cell VNIT Presents
                </motion.p>

                <h1 className="font-display font-bold mb-8 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-64 h-64 md:w-[500px] md:h-500px]"
                    >
                        <Image
                            src="/Untitled design-63.png"
                            alt="Consortium '26 Logo"
                            fill
                            className="object-contain drop-shadow-[0_0_30px_rgba(255,46,46,0.3)]"
                            priority
                        />
                    </motion.div>
                </h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="w-full h-px bg-gradient-to-r from-transparent via-conso-red to-transparent my-8"
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12"
                >
                    Ignite your entrepreneurial spark at Central India's Largest Management Festival.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <button className="px-8 py-4 bg-conso-red text-black font-bold text-lg uppercase tracking-widest hover:bg-white transition-colors">
                        Get Started
                    </button>
                    <button className="px-8 py-4 border border-white/20 text-white font-bold text-lg uppercase tracking-widest hover:bg-white/10 transition-colors backdrop-blur-sm">
                        Watch Teaser
                    </button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-conso-red to-transparent" />
            </motion.div>
        </div>
    );
}
