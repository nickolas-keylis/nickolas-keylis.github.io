import React from "react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="flex flex-col justify-center items-center text-center h-[90vh]"
        >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-blue-400">Vadim</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                Senior Software Engineer specializing in building scalable web
                applications and leading high-performing development teams.
            </p>
            <a
                href="#projects"
                className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition"
            >
                View My Work
            </a>
        </section>
    );
}
