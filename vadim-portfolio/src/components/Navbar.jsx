import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const links = ["About", "Experience", "Projects", "Contact"];

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="sticky top-0 z-50 backdrop-blur bg-gray-900/80 border-b border-gray-800"
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
                <h1 className="text-xl font-bold text-blue-400">Vadim Keylis</h1>
                <ul className="flex gap-6">
                    {links.map((link) => (
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
        </motion.nav>
    );
}
