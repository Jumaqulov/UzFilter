import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState("EN");

    return (
        <nav className="p-1 own_container nav_main">
            <div className="mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <a href="/" className="logo">
                        <img src='https://www.uzfiltr.uz/_next/static/media/Logo.0fb14761.svg' alt="Uzfilter logo" className="w-25 website-logo" />
                    </a>
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="text-dark hover:underline">Home</a>
                        <a href="#" className="text-dark hover:underline">About</a>
                        <a href="#" className="text-dark hover:underline">Services</a>
                        <a href="#" className="text-dark hover:underline">Contact</a>
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <input
                        type="search"
                        placeholder="Search..."
                        className="px-3 py-1 rounded-md text-black focus:outline border"
                    />
                    <button
                        className="bg-white text-blue-600 px-3 py-1 rounded-md"
                        onClick={() => setLanguage(language === "EN" ? "UZ" : "EN")}
                    >
                        {language}
                    </button>
                </div>

                <button
                    className="md:hidden text-white text-2xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden mt-4 bg-blue-700 text-white flex flex-col space-y-2 p-4 rounded-lg">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Services</a>
                    <a href="#" className="hover:underline">Contact</a>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-3 py-1 rounded-md text-black focus:outline-none"
                    />
                    <button
                        className="bg-white text-blue-600 px-3 py-1 rounded-md"
                        onClick={() => setLanguage(language === "EN" ? "UZ" : "EN")}
                    >
                        {language}
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
