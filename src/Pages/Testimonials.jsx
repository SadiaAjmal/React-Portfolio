import React from "react";

const Testimonial = () => {
    const testimonial = {
        title: "Mobile App Development",
        description:
            "I had the pleasure of working with Lily on a critical web development project, and I can confidently say that their expertise and professionalism exceeded my expectations.",
        name: "Michael - Technical Manager",
        role: "Marketing @ APPLE INC.",
        image:
            "https://i.pinimg.com/originals/5a/33/22/5a33227b0d3dc8f1b3ecf8f4180e29f2.jpg",
    };

    const avatars = [
        "https://randomuser.me/api/portraits/women/1.jpg",
        "https://randomuser.me/api/portraits/women/2.jpg",
        "https://randomuser.me/api/portraits/men/3.jpg",
        "https://i.pinimg.com/originals/5a/33/22/5a33227b0d3dc8f1b3ecf8f4180e29f2.jpg", // current testimonial image
    ];

    return (
        <section
            className="bg-white py-16 px-3 md:px-10"
            aria-labelledby="testimonial-heading"
        >
            {/* Section Header */}
            <header className="text-center mb-12">
                <h2
                    id="testimonial-heading"
                    className="text-2xl md:text-4xl text-gray-800 font-bold mb-3"
                >
                    What Clients Say
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover what clients have to say about their experiences working with
                    me. My client's satisfaction is my greatest achievement!
                </p>
            </header>

            {/* Testimonial Content */}
            <article className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
                {/* Left Side */}
                <div className="flex-1">
                    <h3 className="text-xl text-gray-800 font-semibold mb-4">{testimonial.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        {testimonial.description}
                    </p>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-500 mb-6">{testimonial.role}</p>

                    {/* Avatars */}
                    <nav aria-label="Client testimonials" className="flex gap-3">
                        {avatars.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`Client testimonial ${i + 1}`}
                                className="w-10 h-10 rounded-full cursor-pointer border-2 border-transparent hover:border-gray-400 transition"
                            />
                        ))}
                    </nav>
                </div>

                {/* Right Side */}
                <figure className="flex-1 flex justify-center md:justify-end">
                    <img
                        src={testimonial.image}
                        alt={`Portrait of ${testimonial.name}`}
                        className="w-72 h-80 object-cover rounded-lg shadow-md"
                    />
                    <figcaption className="sr-only">{testimonial.name}</figcaption>
                </figure>
            </article>
        </section>
    );
};

export default Testimonial;
