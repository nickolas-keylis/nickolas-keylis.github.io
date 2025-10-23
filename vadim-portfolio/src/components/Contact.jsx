import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-20 text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Get in Touch</h2>
            <p className="text-gray-300 mb-8">
                I’m always open to discussing new projects, tech opportunities, or
                mentorship. Feel free to connect!
            </p>
            <div className="flex justify-center gap-6 text-2xl">
                <a
                    href="mailto:vadim@example.com"
                    className="text-gray-400 hover:text-blue-400 transition"
                >
                    <FaEnvelope />
                </a>
                <a
                    href="https://linkedin.com/in/vadim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/vadim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition"
                >
                    <FaGithub />
                </a>
            </div>
        </section>
    );
}
