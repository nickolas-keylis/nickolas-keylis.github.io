import React from "react";

export default function Navbar() {
    const navLinks = ["About", "Experience", "Projects", "Contact"];

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800">
            <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
                <h1 className="text-xl font-bold text-blue-400">Vadim.dev</h1>
                <ul className="flex gap-6">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <a
                                href={`#${link.toLowerCase()}`}
                                className="hover:text-blue-400 transition"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
