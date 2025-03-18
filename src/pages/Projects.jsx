import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Projects = () => {
    const project = {
        name: 'Project 1',
        description:
            'A cool project I built using React and Tailwind CSS. This project showcases my skills in front-end development and responsive design. It includes features like user authentication, dynamic content loading, and a modern UI.',
        url: 'https://github.com/yourusername/project1',
        technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
        image: 'https://via.placeholder.com/800x400', // Replace with your project image URL
    };

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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen min-w-screen relative overflow-hidden"
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
                className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white p-8"
            >
                {/* Project Image */}
                <motion.img
                    src={project.image}
                    alt={project.name}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="w-full max-w-4xl rounded-lg shadow-2xl mb-8"
                />

                {/* Project Details */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="w-full max-w-4xl text-center"
                >
                    <h1 className="text-6xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl mb-8 text-gray-300">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {project.technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className="bg-white/10 text-white px-4 py-2 rounded-full text-sm"
                            >
                {tech}
              </span>
                        ))}
                    </div>

                    {/* View Project Button */}
                    <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5, duration: 0.5, type: 'spring', stiffness: 100 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="inline-block bg-white text-blue-500 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-100 transition-colors"
                    >
                        View Project
                    </motion.a>
                </motion.div>

                {/* Back to Home Button */}
                <motion.a
                    href="/"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.5, type: 'spring', stiffness: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-12 bg-white text-blue-500 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-100 transition-colors"
                >
                    Back to Home
                </motion.a>
            </motion.div>
        </motion.div>
    );
};

export default Projects;