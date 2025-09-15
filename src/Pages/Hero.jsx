import React from "react";

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row bg-white min-h-screen items-center justify-center px-3 md:px-10 py-6 pt-20">
            {/* Left Side */}
            <div className="md:w-1/2 w-full md:pr-12 flex flex-col justify-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Welcome to my Web <br />
                    Development Portofolio!
                </h1>
                <p className="text-lg md:text-xl text-gray-500 mb-8">
                    I'm Lily Smith, a passionate web developer based in USA. Here, you'll get a glimpse of my journey in the world of web development, where creativity meets functionality.
                </p>
                <form className="mb-2">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                        Your email
                    </label>
                    <div className="flex flex-col md:flex-row gap-2 w-full">
                        
                        <div className="w-full md:w-2/3 relative flex group ">
                            <input
                                id="email"
                                type="email"
                                className="border focus:border focus:border-black rounded-md px-4 py-3 w-full outline-none group"
                            />
                            <p className=" absolute px-1 bg-white group-focus-within:-translate-y-6 top-[25%] transition transform group-focus-within:duration-500 group-focus-within:text-sm group-focus-within:text-black left-5">Enter your email</p>
                        </div>
                        
                     
                        <button
                            type="submit"
                            className="bg-gray-900 text-white font-semibold rounded-md cursor-pointer hover:shadow-2xl px-6 py-3 w-full md:w-auto"
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

export default Hero;