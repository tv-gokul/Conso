"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500); // 2.5s loading time

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
                >
                    {/* Pulsing Glow Background */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute w-64 h-64 bg-conso-red/20 rounded-full blur-[100px]"
                    />

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Logo Animation */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative w-40 h-40 md:w-56 md:h-56 mb-8"
                        >
                            <Image
                                src="/Untitled design-63.png"
                                alt="Consortium '26 Logo"
                                fill
                                className="object-contain drop-shadow-[0_0_15px_rgba(255,46,46,0.5)]"
                                priority
                            />
                        </motion.div>

                        {/* Loading Bar */}
                        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 2.2, ease: "easeInOut" }}
                                className="absolute inset-0 bg-conso-red shadow-[0_0_10px_#FF2E2E]"
                            />
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-4 text-white/50 text-xs font-mono tracking-[0.3em] uppercase"
                        >
                            Initializing...
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
