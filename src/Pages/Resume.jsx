import React from "react";
import { FaChartBar, FaPuzzlePiece } from "react-icons/fa";
import { MdAutoAwesome } from "react-icons/md";

const resumeItems = [
    {
        icon: FaChartBar,
        text: "Bachelor of Science in Computer Science",
    },
    {
        icon: FaPuzzlePiece ,
        text: "Certified Web Developer",
    },
    {
        icon: MdAutoAwesome,
        text: "Frontend Framework Proficiency Certification",
    },
];

export default function Resume() {
    return (
        <section className="w-full px-3 md:px-10 py-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-start md:items-center min-h-[320px]">
                {/* Left Section */}
                <div className="flex-1 mb-10 md:mb-0">
                    <h2 className=" text-2xl md:text-4xl font-bold text-gray-800 mb-4">My Resume</h2>
                    <p className="text-gray-500 mb-8 max-w-xl">
                        Highly skilled and creative Web Developer with 5+ years of experience in crafting visually stunning and functionally robust websites and web applications.
                    </p>

                    {/* Shimmer Button - Black */}
                    <button
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-200 px-6 py-2 text-base font-semibold text-black transition-all duration-300 ease-in-out  hover:shadow-xl hover:shadow-black/50 cursor-pointer"
                    >
                        <span className="text-lg">View More</span>
                        <div
                            className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] 
                            group-hover:duration-1000 group-hover:[transform:skew(-13deg)_translateX(100%)]"
                        >
                            <div className="relative h-full w-10 bg-primary/20"></div>
                        </div>
                    </button>
                </div>

                {/* Right Section */}
                <div className="flex-1 flex flex-col gap-8 md:pl-16">
                    {resumeItems.map((item, idx) => (
                        <div key={idx} className="flex items-center">
                            <div className="bg-gray-800 rounded-lg shadow-md flex items-center justify-center w-10 h-10 mr-4">
                                <item.icon className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-gray-500 text-lg">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
