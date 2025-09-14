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
        <footer className="bg-gray-100 border-t border-gray-200">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-10">
                {/* Left Side */}
                <div className="text-gray-700 text-sm text-center md:text-left">
                    <p>
                        &copy; {year} Made with <span className="font-semibold">Material Tailwind</span> by{" "}
                        <a href="#" className="hover:underline">
                            Creative Tim
                        </a>
                        . Distributed by{" "}
                        <a href="#" className="hover:underline">
                            ThemeWagon
                        </a>
                    </p>
                </div>

                {/* Right Side - Links + Subscribe */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                    {/* Links */}
                    <ul className="flex flex-wrap items-center gap-6 text-gray-700 text-sm font-medium">
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
                    <button className="bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-900 transition">
                        Subscribe
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
