import React, { useState } from "react";
import { FaRegClone, FaUserCircle } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Navigation Links
    const navLinks = [
        {
            label: "Page",
            icon: <FaRegClone className="mr-2 text-xl" />,
            href: "#",
        },
        {
            label: "Account",
            icon: <FaUserCircle className="mr-2 text-xl" />,
            href: "#",
        },
        {
            label: "Docs",
            icon: <BiCodeBlock className="mr-2 text-xl" />,
            href: "#",
        },
    ];

    return (
        <header className="w-full border-b border-gray-200 bg-white">
            {/* Actual Navbar */}
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <span className="text-lg font-bold text-gray-800">
                    Material Tailwind
                </span>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="flex items-center text-gray-800 hover:text-gray-900 font-medium"
                        >
                            {link.icon}
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-6">
                    <span className="font-semibold text-gray-800">SIGN IN</span>
                    <button className="bg-gray-800 px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:bg-gray-900 transition">
                        BLOCKS
                    </button>
                </div>

                {/* Mobile Hamburger / Close */}
                <button
                    className="md:hidden ml-auto text-2xl text-gray-700"
                    aria-label={menuOpen ? "Close Menu" : "Open Menu"}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
                </button>
            </nav>

            {/* Mobile Drawer (slides down below navbar) */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col px-5 py-6 bg-white shadow-lg">
                    {/* Nav Links */}
                    <div className="flex flex-col gap-5 mb-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="flex items-center text-gray-800 hover:text-gray-900 font-medium"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.icon}
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Bottom Buttons */}
                    <div className="mt-auto flex flex-col items-center gap-4">
                        <span className="font-semibold text-gray-800">SIGN IN</span>
                        <button className="bg-gray-800 px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:bg-gray-900 transition">
                            BLOCKS
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
