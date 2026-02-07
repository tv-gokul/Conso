"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
    { label: "Events", value: 20, suffix: "+" },
    { label: "Colleges", value: 300, suffix: "+" },
    { label: "Footfall", value: 15000, suffix: "+" },
    { label: "Speakers", value: 15, suffix: "+" },
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const incrementTime = 20; // ms
            const step = Math.ceil(end / (duration / incrementTime));

            const timer = setInterval(() => {
                start += step;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(start);
                }
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <span ref={ref} className="tabular-nums">
            {count.toLocaleString()}{suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section className="py-20 border-y border-white/5 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, type: "spring" }}
                                className="text-4xl md:text-6xl font-bold font-display text-white mb-2"
                            >
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </motion.div>
                            <p className="text-gray-400 uppercase tracking-widest text-sm font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
