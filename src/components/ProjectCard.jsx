const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white text-green-500 p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
            <p className="mb-6">{project.description}</p>
            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
                View Project
            </a>
        </div>
    );
};

export default ProjectCard;