'use client'
import React, { useState } from 'react';

function SizeButton() {
    const [selected, setSelected] = useState(null);

    const handleClick = (index) => {
        setSelected(index);
    };

    return (
        <div className="flex space-x-4 mt-4">
            {/* Small Button */}
            <button
                className={`size-button py-1 px-4 text-lg font-semibold uppercase border-2 border-black transition-all duration-200 ${
                    selected === 0
                        ? 'bg-black text-white'
                        : 'bg-white text-black hover:bg-black hover:text-white'
                }`}
                onClick={() => handleClick(0)}
            >
                S
            </button>

            {/* Medium Button */}
            <button
                className={`size-button py-1 px-4 text-lg font-semibold uppercase border-2 border-black transition-all duration-200 ${
                    selected === 1
                        ? 'bg-black text-white'
                        : 'bg-white text-black hover:bg-black hover:text-white'
                }`}
                onClick={() => handleClick(1)}
            >
                M
            </button>

            {/* Large Button */}
            <button
                className={`size-button py-1 px-4 text-lg font-semibold uppercase border-2 border-black transition-all duration-200 ${
                    selected === 2
                        ? 'bg-black text-white'
                        : 'bg-white text-black hover:bg-black hover:text-white'
                }`}
                onClick={() => handleClick(2)}
            >
                L
            </button>
        </div>
    );
}

export default SizeButton;
