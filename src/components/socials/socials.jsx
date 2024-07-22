import React from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

function Socials() {
    return (
        <>
            <div className="bg-[url('./socials/socialsbg.jpg')] w-full bg-cover bg-center">
                <div className="flex flex-row justify-center items-center p-12">
                    <div className="h-[50px] w-[50px] bg-[#FED853]"></div>
                    <h1 className="text-[25px] ml-[-25px] font-bold">Social Handles</h1>
                </div>
                <div className="text-center text-[45px] font-bold">Subscribe To Get The Latest News And Updates</div>
                <div className="flex justify-center items-center space-x-4 p-12">
                    <a href="https://www.instagram.com/edcbitmesra" target="_blank" rel="noopener noreferrer">
                        <button className="bg-white text-black border-4 border-[#FED853] px-10 py-4 flex items-center justify-center space-x-2 rounded-xl text-lg">
                            <FaInstagram className="text-3xl" />
                            <span>Instagram</span>
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/company/edcbitmesra/mycompany/" target="_blank" rel="noopener noreferrer">
                        <button className="bg-white text-black border-4 border-[#FED853] px-10 py-4 flex items-center justify-center space-x-2 rounded-xl text-lg">
                            <FaLinkedinIn className="text-3xl" />
                            <span>LinkedIn</span>
                        </button>
                    </a>
                    <a href="https://www.facebook.com/edcbitmesra" target="_blank" rel="noopener noreferrer">
                        <button className="bg-white text-black border-4 border-[#FED853] px-10 py-4 flex items-center justify-center space-x-2 rounded-xl text-lg">
                            <FaFacebookF className="text-3xl" />
                            <span>Facebook</span>
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Socials;