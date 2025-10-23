import React from "react";
import Reveal from "./Reveal";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative py-28 text-center bg-gradient-to-t from-gray-950 via-gray-900 to-gray-950 border-t border-gray-800 mt-20"
        >
            <Reveal>
                <h2 className="text-4xl font-extrabold mb-6 text-blue-400 tracking-tight">
                    Let’s Work Together
                </h2>
            </Reveal>

            <Reveal delay={0.2}>
                <p className="text-gray-300 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                    I’m always open to new opportunities and collaborations.
                    Reach out or connect with me directly on LinkedIn.
                </p>
            </Reveal>

            <Reveal delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a
                        href="mailto:vadim@example.com"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition animate-pulse-glow"
                    >
                        <FaEnvelope className="text-xl" />
                        Email Me
                    </a>
                    <a
                        href="https://linkedin.com/in/vadim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition animate-pulse-glow"
                    >
                        <FaLinkedin className="text-xl" />
                        Connect on LinkedIn
                    </a>
                </div>
            </Reveal>


        </section>
    );
}
