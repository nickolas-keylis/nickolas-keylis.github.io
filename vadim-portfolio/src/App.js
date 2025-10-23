import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import FloatingContact from "./components/FloatingContact";
import Education from "./components/Education";

function App() {
    return (
        <div className="bg-gray-950 text-gray-100 font-sans scroll-smooth min-h-screen">
            <Navbar />
            <main className="max-w-6xl mx-auto px-6">
                <Hero />
                <About />
                <Education />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <FloatingContact />
        </div>
    );
}

export default App;
