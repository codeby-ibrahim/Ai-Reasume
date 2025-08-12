import React from 'react';

const Header = () => {
    return (
        <header className="backdrop-blur-md bg-white/80 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img
                        src="/logo.svg"
                        alt="Logo"
                        className="w-14 h-auto object-contain"
                    />


                </div>

                {/* Button */}
                <button className="px-4 py-1.5 bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-medium rounded-lg shadow-sm hover:shadow-lg transition-all duration-200">
                    Get Started
                </button>
            </div>
        </header >
    );
};

export default Header;
