import React from "react";
import Reveal from "./Reveal";
import { FaUniversity } from "react-icons/fa";

export default function Education() {
    const schools = [
        {
            degree: "B.S. Computer Science",
            school: "San Francisco State University ",
            period: "1997 - 1999",
        }

    ];

    return (
        <section id="education" className="py-20">
            <Reveal>
                <h2 className="text-3xl font-bold mb-10 text-blue-400 flex items-center gap-2">
                    <FaUniversity className="text-blue-400" />
                    Education
                </h2>
            </Reveal>

            <div className="space-y-8">
                {schools.map((edu, i) => (
                    <Reveal key={edu.degree} delay={i * 0.1}>
                        <div className="bg-gray-900/40 border border-gray-800 rounded-lg p-6 hover:border-blue-500 transition">
                            <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                            <p className="text-gray-400 italic mb-1">{edu.school}</p>
                            <p className="text-sm text-gray-500 mb-3">{edu.period}</p>
                            <p className="text-gray-300">{edu.details}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

