// src/components/Header.js
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../public/fox.json'; // If you're importing the JSON

export default function Header() {
    return (
        <header className="bg-[#F8EDE3] text-white flex justify-between items-center px-6 py-4">
            <div className="flex items-center">
                <div className="mr-6">
                    <div className="w-20 h-15 flex justify-center items-center"> {/* Adjust w-32 h-32 to the size you want */}
                        <Lottie
                            animationData={animationData}
                            loop={true}
                            style={{ width: '70%', height: '60%' }} // Ensures the Lottie fills the container
                        />
                    </div>
                </div>
                <nav>
                    <a href="#" className="text-black px-4 py-2 hover:bg-[#EDDBC7]  rounded">Emotions</a>
                    <a href="#" className="text-black px-4 py-2 hover:bg-[#EDDBC7]  rounded">Manifesto</a>
                    <a href="#" className="text-black px-4 py-2 hover:bg-[#EDDBC7]  rounded">Self-awareness test</a>
                    <a href="#" className="text-black px-4 py-2 hover:bg-[#EDDBC7] rounded">Work With Us</a>
                </nav>
            </div>
            <button className="bg-[#BA704F]  hover:bg-[#DFD3C3]  text-white hover:text-black font-bold py-2 px-4 rounded font-normal-on-hover">
                Download app
            </button>
        </header>
    )
}
