import React from "react";
import { FiPhone, FiMail, FiLifeBuoy } from "react-icons/fi";

const Contact = () => {
    return (
        <section className="flex flex-col md:flex-row min-h-screen gap-6 md:gap-10 p-6 md:p-16 bg-white">
            {/* Left Side - Contact Info */}
            <aside className="bg-gray-900 text-white rounded-lg p-8 md:p-12 flex-1">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="text-gray-400 mb-8">
                    Fill up the form and our Team will get back to you within 24 hours.
                </p>
                <ul className="space-y-6">
                    <li className="flex items-center space-x-3">
                        <FiPhone className="text-xl" />
                        <span className="font-medium">+1(424) 535 3523</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <FiMail className="text-xl" />
                        <span className="font-medium">hello@mail.com</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <FiLifeBuoy className="text-xl" />
                        <span className="font-medium">Open Support Ticket</span>
                    </li>
                </ul>
            </aside>

            {/* Right Side - Contact Form */}
            <form className="flex-1 bg-white p-6 md:p-10">
                {/* Name Fields */}
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex flex-col flex-1">
                        <label
                            htmlFor="first-name"
                            className="text-sm text-gray-600 mb-1"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="first-name"
                            name="first-name"
                            placeholder="eg. Lucas"
                            className="border-b border-gray-300 focus:outline-none p-2"
                        />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="last-name" className="text-sm text-gray-600 mb-1">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="last-name"
                            name="last-name"
                            placeholder="eg. Jones"
                            className="border-b border-gray-300 focus:outline-none p-2"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="flex flex-col mb-6">
                    <label htmlFor="email" className="text-sm text-gray-600 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="eg. lucas@mail.com"
                        className="border-b border-gray-300 focus:outline-none p-2"
                    />
                </div>

                {/* Radio Options */}
                <fieldset className="mb-6">
                    <legend className="text-sm text-gray-600 mb-3">
                        What are you interested on?
                    </legend>
                    <div className="flex flex-wrap gap-6">
                        <label className="flex items-center gap-2 text-sm">
                            <input type="radio" name="interest" value="design" defaultChecked />
                            Design
                        </label>
                        <label className="flex items-center gap-2 text-sm">
                            <input type="radio" name="interest" value="development" />
                            Development
                        </label>
                        <label className="flex items-center gap-2 text-sm">
                            <input type="radio" name="interest" value="support" />
                            Support
                        </label>
                        <label className="flex items-center gap-2 text-sm">
                            <input type="radio" name="interest" value="other" />
                            Other
                        </label>
                    </div>
                </fieldset>

                {/* Message */}
                <div className="flex flex-col mb-6">
                    <label htmlFor="message" className="text-sm text-gray-600 mb-1">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="border-b border-gray-300 focus:outline-none p-2 resize-none h-28"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-gray-900 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-md"
                >
                    SEND MESSAGE
                </button>
            </form>
        </section>
    );
};

export default Contact;
