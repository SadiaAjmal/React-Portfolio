import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { TbStack } from "react-icons/tb";

const skillsDetails = [
    {
        title: "Frontend Web Development:",
        icon: BiCodeAlt,
        description:
            "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
    },
    {
        title: "Mobile App Development",
        icon: MdOutlineMobileFriendly,
        description:
            "I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.",
    },
    {
        title: "Technology Stack",
        icon: TbStack,
        description:
            "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.",
    },
];

const Skills = () => {
    return (
        <section className="py-16 md:px-10 px-3 bg-white">
            <div className=" text-center">
                <h5 className="text-lg font-semibold text-black/80 mb-2">MY SKILLS</h5>
                <h2 className=" text-2xl md:text-4xl font-bold mb-4 text-gray-800">What I do</h2>
                <p className="text-gray-500 text-xl mb-12">
                    I'm not just a developer; I'm a digital dreamweaver. Crafting immersive online experiences is not just a job but my calling.
                    <br />
                    Discover below how I can help you.
                </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
                {skillsDetails.map((skill, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center px-10">
                        <div className="bg-primary/80 text-white rounded-full p-4 mb-6 flex items-center justify-center shadow-lg">
                            <skill.icon className=" text-2xl"/>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-black/70">{skill.title}</h3>
                        <p className="text-gray-500 text-base">{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;