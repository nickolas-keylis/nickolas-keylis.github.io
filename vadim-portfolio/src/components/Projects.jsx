import React from "react";

export default function Projects() {
    const projects = [
        {
            title: "CodeFlow",
            description:
                "A real-time collaborative coding platform built with React, WebSockets, and Node.js.",
            tech: ["React", "Node.js", "Socket.IO"],
            link: "https://github.com/vadim/codeflow",
        },
        {
            title: "Insight Dashboard",
            description:
                "An analytics dashboard for visualizing business metrics with D3.js and Tailwind CSS.",
            tech: ["D3.js", "Tailwind", "Express"],
            link: "https://github.com/vadim/insight-dashboard",
        },
        {
            title: "TaskTrack",
            description:
                "A productivity app to manage tasks across distributed teams with Firebase backend.",
            tech: ["React", "Firebase", "Redux"],
            link: "https://github.com/vadim/tasktrack",
        },
    ];

    return (
        <section id="projects" className="py-20">
            <h2 className="text-3xl font-bold mb-10 text-blue-400">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition"
                    >
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="text-sm bg-blue-500/20 text-blue-300 px-2 py-1 rounded"
                                >
                  {t}
                </span>
                            ))}
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            View on GitHub →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
