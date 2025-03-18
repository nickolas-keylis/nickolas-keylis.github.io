import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Social icons
import { SiJavascript, SiPython, SiReact, SiNodedotjs, SiTailwindcss } from 'react-icons/si'; // Programming language icons
import { useEffect } from 'react';
import './Home.css';

const Home = () => {
    const programmingLanguages = [
        { name: 'JavaScript', icon: <SiJavascript className="w-12 h-12" /> },
        { name: 'Python', icon: <SiPython className="w-12 h-12" /> },
        { name: 'React', icon: <SiReact className="w-12 h-12" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="w-12 h-12" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12" /> },
    ];

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/jevidee', icon: <FaGithub className="w-8 h-8" /> },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: <FaLinkedin className="w-8 h-8" /> },
        { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: <FaTwitter className="w-8 h-8" /> },
    ];

    const currentProjects = [
        {
            name: 'Project 1',
            description: 'A cool project I built using React and Tailwind CSS.',
            url: 'https://github.com/yourusername/project1',
        },
        {
            name: 'Project 2',
            description: 'A backend API built with Node.js and Express.',
            url: 'https://github.com/yourusername/project2',
        },
    ];

    const educationTimeline = [
        {
            school: 'University of Example',
            years: '2016 - 2020',
            degree: 'Bachelor of Science in Computer Science',
        },
        {
            school: 'Example High School',
            years: '2012 - 2016',
            degree: 'High School Diploma',
        },
    ];

    // Gradient animation
    const controls = useAnimation();

    useEffect(() => {
        const animateGradient = async () => {
            while (true) {
                await controls.start({
                    background: `linear-gradient(45deg, #0A0A0A, #1A1A1A, #2A2A2A)`,
                    transition: { duration: 10, ease: 'linear' },
                });
                await controls.start({
                    background: `linear-gradient(45deg, #1A1A1A, #2A2A2A, #0A0A0A)`,
                    transition: { duration: 10, ease: 'linear' },
                });
                await controls.start({
                    background: `linear-gradient(45deg, #2A2A2A, #0A0A0A, #1A1A1A)`,
                    transition: { duration: 10, ease: 'linear' },
                });
            }
        };
        animateGradient();
    }, [controls]);

    return (
        <body>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen min-w-screen relative overflow-y-auto" // Enable vertical scrollbar
        >
            {/* Gradient Background */}
            <motion.div
                className="absolute inset-0 z-0"
                animate={controls}
            />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 flex flex-col items-center justify-start text-white p-8 space-y-12" // Added space-y-12 for spacing
            >
                {/* Name and Title */}
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-6xl font-bold mb-4 text-center"
                >
                    Nickolas Keylis
                </motion.h1>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-xl mb-6 text-center"
                >
                    Full Stack Developer
                </motion.p>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="flex space-x-6 mb-12"
                >
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-blue-500 p-3 rounded-full shadow-lg hover:bg-blue-100 transition-colors"
                        >
                            {social.icon}
                        </a>
                    ))}
                </motion.div>

                {/* Technical Skills */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="w-full max-w-4xl mb-12"
                >
                    <h2 className="text-4xl font-bold mb-8 text-center">Technical Skills</h2>
                    <div className="flex justify-center space-x-8">
                        {programmingLanguages.map((lang, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center"
                                initial={{ y: 0 }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: index * 0.2,
                                }}
                                whileHover={{ scale: 1.2, rotate: 10 }}
                            >
                                <div className="bg-white text-blue-500 p-4 rounded-full shadow-lg">
                                    {lang.icon}
                                </div>
                                <span className="mt-2 text-sm">{lang.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Current Projects */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="w-full max-w-4xl mb-12"
                >
                    <h2 className="text-4xl font-bold mb-8 text-center">Current Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {currentProjects.map((project, index) => (
                            <motion.a
                                key={index}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.3, duration: 0.5 }}
                                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                                <p className="text-gray-300">{project.description}</p>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Education Timeline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                    className="w-full max-w-4xl mb-12"
                >
                    <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>
                    <div className="space-y-8">
                        {educationTimeline.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.3, duration: 0.5 }}
                                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg"
                            >
                                <h3 className="text-2xl font-bold mb-2">{edu.school}</h3>
                                <p className="text-gray-300 mb-2">{edu.years}</p>
                                <p className="text-gray-300">{edu.degree}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
        </body>
    );
};

export default Home;