import React from "react";
import Reveal from "./Reveal";

export default function About() {
    return (
        <section id="about" className="py-20">
            <Reveal replay>
                <h2 className="text-3xl font-bold mb-6 text-blue-400">About Me</h2>
            </Reveal>
            <Reveal replay>
                <p className="text-gray-300 leading-relaxed">
                    BLAH BLAH BLAH BLAH
                </p>
            </Reveal>
        </section>
    );
}
