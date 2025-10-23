import React from "react";
import { FaEnvelope } from "react-icons/fa";

export default function FloatingContact() {
    return (
        <a
            href="#contact"
            className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg shadow-blue-600/40 transition"
            title="Contact Vadim"
        >
            <FaEnvelope className="text-2xl" />
        </a>
    );
}
