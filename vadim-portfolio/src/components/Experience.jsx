import React from "react";

export default function Experience() {
    const jobs = [
        {
            role: "Senior Software Engineer",
            company: "TechNova Solutions",
            period: "2020 – Present",
            description:
                "Leading a team of developers building scalable React and Node.js applications. Focused on performance optimization and clean architecture.",
        },
        {
            role: "Software Engineer",
            company: "CloudSync Systems",
            period: "2016 – 2020",
            description:
                "Developed internal tools and REST APIs for large enterprise clients. Collaborated across teams to implement new CI/CD pipelines.",
        },
        {
            role: "Junior Developer",
            company: "NextWave Technologies",
            period: "2013 – 2016",
            description:
                "Maintained legacy systems while introducing React-based frontends to replace older templates. Learned to design maintainable codebases.",
        },
    ];

    return (
        <section id="experience" className="py-20">
            <h2 className="text-3xl font-bold mb-10 text-blue-400">Experience</h2>
            <div className="space-y-8">
                {jobs.map((job) => (
                    <div
                        key={job.role}
                        className="border-l-4 border-blue-500 pl-6 hover:bg-gray-900 transition rounded-lg"
                    >
                        <h3 className="text-xl font-semibold">{job.role}</h3>
                        <p className="text-gray-400 italic">{job.company}</p>
                        <p className="text-sm text-gray-500 mb-2">{job.period}</p>
                        <p className="text-gray-300">{job.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
