import React from "react";
import Reveal from "./Reveal";

export default function Experience() {
    const jobs = [
        {
            role: "Senior Software Engineer",
            company: "TechNova Solutions",
            period: "2020 – Present",
            description:
                "Leading development of scalable web applications using React, Node.js, and cloud infrastructure. Focus on performance and maintainability.",
        },
        {
            role: "Software Engineer",
            company: "CloudSync Systems",
            period: "2016 – 2020",
            description:
                "Developed REST APIs and internal tools, contributed to frontend architecture and CI/CD pipelines.",
        },
        {
            role: "Junior Developer",
            company: "NextWave Technologies",
            period: "2013 – 2016",
            description:
                "Maintained and modernized legacy systems while introducing React-based interfaces and reusable components.",
        },
    ];

    return (
        <section id="experience" className="py-20">
            <Reveal>
                <h2 className="text-3xl font-bold mb-10 text-blue-400">Experience</h2>
            </Reveal>
            <div className="space-y-8">
                {jobs.map((job, i) => (
                    <Reveal key={job.role} delay={i * 0.1}>
                        <div className="border-l-4 border-blue-500 pl-6 hover:bg-gray-900 transition rounded-lg">
                            <h3 className="text-xl font-semibold">{job.role}</h3>
                            <p className="text-gray-400 italic">{job.company}</p>
                            <p className="text-sm text-gray-500 mb-2">{job.period}</p>
                            <p className="text-gray-300">{job.description}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
