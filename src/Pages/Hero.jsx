import React from "react";

export default function Hero() {
    return (
        <div className="flex flex-col md:flex-row bg-white min-h-screen items-center justify-center px-6 md:px-16 py-6">
            {/* Left Side */}
            <div className="md:w-1/2 w-full md:pr-12 flex flex-col justify-center">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                    Welcome to my Web <br />
                    Development Portofolio!
                </h1>
                <p className="text-lg md:text-xl text-gray-500 mb-8">
                    I'm Lily Smith, a passionate web developer based in USA. Here, you'll get a glimpse of my journey in the world of web development, where creativity meets functionality.
                </p>
                <form className="mb-2">
                    <label className="block text-gray-700 mb-1" htmlFor="email">
                        Your email
                    </label>
                    <div className="flex flex-col md:flex-row gap-2">
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="border border-gray-300 rounded-md px-4 py-3 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        <button
                            type="submit"
                            className="bg-gray-900 text-white font-semibold rounded-md px-6 py-3 shadow-md w-full md:w-auto"
                        >
                            REQUIRE OFFER
                        </button>
                    </div>
                </form>
                <p className="text-sm text-gray-500 mt-2">
                    Read my{" "}
                    <a href="#" className="underline text-gray-700">
                        Terms and Conditions
                    </a>
                </p>
            </div>
            {/* Right Side */}
            <div className="md:w-1/2 w-full flex justify-center md:justify-end mt-8 md:mt-0">
                <div className="rounded-lg overflow-hidden max-w-sm md:max-w-lg w-full">
                    <img
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
                        alt="Profile"
                        className="object-cover w-full h-[400px] md:h-[520px]"
                    />
                </div>
            </div>
        </div>
    );
}