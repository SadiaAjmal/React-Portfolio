import React from 'react';

const projects = [
    {
        title: 'Mobile App Development',
        description:
            'Mobile app designed to help users discover and explore local restaurants and cuisines.',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
        link: 'https://your-showcase-link.com/mobile-app-dev'
    },
    {
        title: 'Landing Page Development',
        description:
            'Promotional landing page for a fitness website Summer Campaign. Form development included.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        link: 'https://your-showcase-link.com/landing-page'
    },
    {
        title: 'Mobile App Development',
        description:
            'Mobile app designed to help users discover and explore local restaurants and cuisines.',
        image: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80',
        link: 'https://your-showcase-link.com/mobile-app-dev2'
    },
    {
        title: 'E-commerce development',
        description:
            'Ecommerce website offering access to the latest and greatest gadgets and accessories.',
        image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=800&q=80',
        link: 'https://your-showcase-link.com/ecommerce'
    },


    {
        title: 'Mobile App Development',
        description:
            'Mobile app designed to help users discover and explore local restaurants and cuisines.',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
        link: 'https://your-showcase-link.com/mobile-app-dev'
    },
    {
        title: 'Landing Page Development',
        description:
            'Promotional landing page for a fitness website Summer Campaign. Form development included.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        link: 'https://your-showcase-link.com/landing-page'
    },
    {
        title: 'Mobile App Development',
        description:
            'Mobile app designed to help users discover and explore local restaurants and cuisines.',
        image: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80',
        link: 'https://your-showcase-link.com/mobile-app-dev2'
    },
    {
        title: 'E-commerce development',
        description:
            'Ecommerce website offering access to the latest and greatest gadgets and accessories.',
        image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=800&q=80',
        link: 'https://your-showcase-link.com/ecommerce'
    },

];

const Projects = () => {
    return (
        <div className="px-3 md:px-10 py-12 flex flex-col items-center justify-center">
            <div className="text-center mb-12">
                <h2 className=" text-2xl md:text-4xl font-bold mb-4 text-gray-800">My Projects</h2>

                <p className=" text-lg max-w-2xl text-gray-600">
                    Whether you have a mobile app idea that needs to come to life or a website that requires a facelift, I'm here to turn your digital dreams into reality.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="bg-white  overflow-hidden flex flex-col"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-48 w-full object-cover shadow-lg rounded-lg"
                        />
                        <div className=" py-5 flex-1 flex flex-col">
                            <h3 className="font-bold text-xl mb-2 text-gray-800">{project.title}</h3>
                            <p className="text-gray-600 mb-6">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto bg-primary/80 text-white px-5 py-2 rounded-md font-semibold shadow hover:bg-primary/90 transition w-fit text-center"
                            >
                                SEE DETAILS
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;