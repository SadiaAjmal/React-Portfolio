import React from "react";

// List of logo image URLs and alt text
const logos = [
    {
        name: "coinbase",
        src: "https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-coinbase.svg",
        alt: "Coinbase Logo",
    },
    {
        name: "spotify",
        src: "https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-spotify.svg",
        alt: "Spotify Logo",
    },
    {
        name: "pinterest",
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pinterest_Logo.svg/1200px-Pinterest_Logo.svg.png",
        alt: "Pinterest Logo",
    },
    {
        name: "google",
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        alt: "Google Logo",
    },
    {
        name: "amazon",
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        alt: "Amazon Logo",
    },
    {
        name: "netflix",
        src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        alt: "Netflix Logo",
    },
];

export default function Clients() {
    return (
        <section className="w-full py-12 bg-white">
            <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-10 text-center">
                    My awesome clients
                </h3>
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 w-full">
                    {logos.map((logo) => (
                        <div key={logo.name} className="flex items-center justify-center">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-12 md:h-16 w-auto object-contain"
                                loading="lazy"
                                style={{ maxWidth: "160px" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}