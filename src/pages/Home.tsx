import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiPython, SiReact, SiTailwindcss, SiNodedotjs } from 'react-icons/si';

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Navigation */}
            <nav className="bg-white dark:bg-gray-800 shadow-sm">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Nickolas Keylis</h1>
                        <div className="flex space-x-4">
                            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600">About</a>
                            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600">Skills</a>
                            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600">Projects</a>
                            <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600">Experience</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="about" className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
                        <div className="relative">
                            <img
                                src="https://via.placeholder.com/300"
                                alt="Profile"
                                className="rounded-full w-64 h-64 object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2 text-white">
                        <h1 className="text-4xl font-bold mb-4">Hi, I'm Nickolas Keylis</h1>
                        <h2 className="text-2xl mb-6">Full Stack Developer</h2>
                        <p className="text-lg mb-8">
                            Passionate about building beautiful, functional web applications with modern technologies.
                            Currently specializing in React, TypeScript, and Node.js.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
                                Download CV
                            </a>
                            <a href="#contact" className="border-2 border-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">My Skills</h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {/* Language Skills */}
                        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-sm text-center">
                            <SiTypescript className="text-4xl text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">TypeScript</h3>
                            <p className="text-gray-600 dark:text-gray-300">Advanced</p>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-sm text-center">
                            <SiJavascript className="text-4xl text-yellow-500 dark:text-yellow-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">JavaScript</h3>
                            <p className="text-gray-600 dark:text-gray-300">Expert</p>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-sm text-center">
                            <SiPython className="text-4xl text-blue-400 dark:text-blue-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Python</h3>
                            <p className="text-gray-600 dark:text-gray-300">Intermediate</p>
                        </div>

                        {/* Framework Skills */}
                        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-sm text-center">
                            <SiReact className="text-4xl text-blue-500 dark:text-blue-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">React</h3>
                            <p className="text-gray-600 dark:text-gray-300">Expert</p>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-sm text-center">
                            <SiTailwindcss className="text-4xl text-cyan-500 dark:text-cyan-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Tailwind</h3>
                            <p className="text-gray-600 dark:text-gray-300">Advanced</p>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-sm text-center">
                            <SiNodedotjs className="text-4xl text-green-600 dark:text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Node.js</h3>
                            <p className="text-gray-600 dark:text-gray-300">Advanced</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">My Projects</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="https://via.placeholder.com/600x400"
                                alt="Project 1"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">E-commerce Platform</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Full-featured online store with React, Node.js, and MongoDB.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs px-3 py-1 rounded-full">
                    React
                  </span>
                                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full">
                    TypeScript
                  </span>
                                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-3 py-1 rounded-full">
                    Node.js
                  </span>
                                </div>
                                <div className="flex space-x-3">
                                    <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Live Demo</a>
                                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline">Source Code</a>
                                </div>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="https://via.placeholder.com/600x400"
                                alt="Project 2"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Task Management App</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Productivity application with drag-and-drop functionality and real-time updates.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs px-3 py-1 rounded-full">
                    React
                  </span>
                                    <span className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-xs px-3 py-1 rounded-full">
                    Tailwind
                  </span>
                                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-3 py-1 rounded-full">
                    Firebase
                  </span>
                                </div>
                                <div className="flex space-x-3">
                                    <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Live Demo</a>
                                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline">Source Code</a>
                                </div>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="https://via.placeholder.com/600x400"
                                alt="Project 3"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Portfolio Website</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Responsive portfolio built with React and Tailwind CSS (this site!).
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full">
                    TypeScript
                  </span>
                                    <span className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-xs px-3 py-1 rounded-full">
                    Tailwind
                  </span>
                                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">
                    Responsive
                  </span>
                                </div>
                                <div className="flex space-x-3">
                                    <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Live Demo</a>
                                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline">Source Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education & Experience Section */}
            <section id="experience" className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Education & Experience</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Education */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                                <FaGraduationCap className="mr-3 text-indigo-600 dark:text-indigo-400" />
                                Education
                            </h3>

                            <div className="space-y-8">
                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Computer Science Degree</h4>
                                        <p className="text-gray-600 dark:text-gray-300 mb-2">University of Technology</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">2018 - 2022</p>
                                        <p className="mt-2 text-gray-700 dark:text-gray-300">
                                            Specialized in web development and software engineering. Graduated with honors.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Frontend Development Bootcamp</h4>
                                        <p className="text-gray-600 dark:text-gray-300 mb-2">Code Masters Academy</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">2021</p>
                                        <p className="mt-2 text-gray-700 dark:text-gray-300">
                                            Intensive 3-month program focused on modern JavaScript frameworks and responsive design.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Experience */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                                <FaBriefcase className="mr-3 text-indigo-600 dark:text-indigo-400" />
                                Experience
                            </h3>

                            <div className="space-y-8">
                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Frontend Developer</h4>
                                        <p className="text-gray-600 dark:text-gray-300 mb-2">Tech Solutions Inc.</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">2022 - Present</p>
                                        <p className="mt-2 text-gray-700 dark:text-gray-300">
                                            Developing responsive web applications with React and TypeScript. Leading UI/UX improvements.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Junior Web Developer</h4>
                                        <p className="text-gray-600 dark:text-gray-300 mb-2">Digital Creations</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">2020 - 2022</p>
                                        <p className="mt-2 text-gray-700 dark:text-gray-300">
                                            Built and maintained client websites. Collaborated on e-commerce projects.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Get In Touch</h2>

                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Contact Information</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <FaEnvelope className="text-indigo-600 dark:text-indigo-400 mr-4" />
                                        <span className="text-gray-600 dark:text-gray-300">nickolas@example.com</span>
                                    </div>

                                    <div className="flex items-center">
                                        <FaGithub className="text-indigo-600 dark:text-indigo-400 mr-4" />
                                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:underline">github.com/nickolas</a>
                                    </div>

                                    <div className="flex items-center">
                                        <FaLinkedin className="text-indigo-600 dark:text-indigo-400 mr-4" />
                                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:underline">linkedin.com/in/nickolas</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <form>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-800 py-8 border-t border-gray-200 dark:border-gray-700">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-600 dark:text-gray-300">
                        © {new Date().getFullYear()} Nickolas Keylis. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}