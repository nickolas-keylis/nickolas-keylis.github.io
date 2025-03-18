const SocialButton = ({ name, url }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors"
        >
            {name}
        </a>
    );
};

export default SocialButton;