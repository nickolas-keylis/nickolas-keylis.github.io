import React from "react";
import Reveal from "./Reveal";

export default function Hero() {
    return (
        <section
            id="hero"
            className="flex flex-col justify-center items-center text-center min-h-[75vh] md:min-h-[80vh] mb-10"
        >
            <Reveal always>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-3 leading-tight">
                    Vadim <span className="text-blue-400">K.</span>
                </h1>
            </Reveal>

            <Reveal always delay={0.3}>
                <h2 className="text-2xl text-gray-300 mb-3">
                    Senior Software Engineer • Full-Stack Developer
                </h2>
            </Reveal>

            <Reveal always delay={0.6}>
                <p className="text-gray-400 max-w-2xl mb-5">
                    I design and build scalable systems that make technology simpler,
                    faster, and more human.
                </p>
            </Reveal>

            <Reveal always delay={0.9}>
                <div className="flex gap-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition"
                    >
                        Contact Me
                    </a>
                </div>
            </Reveal>
        </section>
    );
}
