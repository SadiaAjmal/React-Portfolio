
import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    const links = [
        { id: 1, title: "Home", link: "#" },
        { id: 2, title: "About Us", link: "#" },
        { id: 3, title: "Blog", link: "#" },
        { id: 4, title: "Services", link: "#" },
    ];

    return (
        <footer className=" md:px-10 px-3 w-full md:pt-10">
            <div className=" w-full flex flex-col md:flex-row items-center justify-between gap-6 md:border-t py-5 border-gray-300">
                
                
                {/* Right Side - Links + Subscribe */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:order-last">
                    {/* Links */}
                    <ul className="flex flex-wrap items-center gap-6 text-gray-700 font-medium">
                        {links.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.link}
                                    className="hover:text-gray-900 transition"
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Subscribe Button */}
                    <button className="bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-900 transition uppercase cursor-pointer">
                        Subscribe
                    </button>
                </div>
                
                
                
                {/* Left Side */}
                <div className="text-gray-700  text-center md:text-left md:order-first">
                    <p>
                        &copy; {year} Made with <span className="font-semibold">Material Tailwind</span> by Creative Tim. Distributed by
                        <a href="#" className="hover:underline">
                            ThemeWagon
                        </a>
                    </p>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
