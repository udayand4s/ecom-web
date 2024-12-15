'use client'
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-6">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
                    {/* LEFT COLUMN */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                        {/* MENU START */}
                        <div className="flex flex-col gap-4">
                            <div className="font-medium uppercase text-sm cursor-pointer hover:text-gray-400 transition-all">
                                Find a store
                            </div>
                            <div className="font-medium uppercase text-sm cursor-pointer hover:text-gray-400 transition-all">
                                Become a partner
                            </div>
                            <div className="font-medium uppercase text-sm cursor-pointer hover:text-gray-400 transition-all">
                                Sign up for email
                            </div>
                            <div className="font-medium uppercase text-sm cursor-pointer hover:text-gray-400 transition-all">
                                Send us feedback
                            </div>
                            <div className="font-medium uppercase text-sm cursor-pointer hover:text-gray-400 transition-all">
                                Student discount
                            </div>
                        </div>
                        {/* MENU END */}

                        {/* HELP MENU */}
                        <div className="flex flex-col gap-4">
                            <div className="font-medium uppercase text-sm">Get help</div>
                            <div className="text-sm text-white/[0.7] hover:text-white cursor-pointer">
                                Order Status
                            </div>
                            <div className="text-sm text-white/[0.7] hover:text-white cursor-pointer">
                                Delivery
                            </div>
                            <div className="text-sm text-white/[0.7] hover:text-white cursor-pointer">
                                Returns
                            </div>
                            <div className="text-sm text-white/[0.7] hover:text-white cursor-pointer">
                                Payment Options
                            </div>
                            <div className="text-sm text-white/[0.7] hover:text-white cursor-pointer">
                                Contact Us
                            </div>
                        </div>

                        {/* ABOUT NIKE MENU */}
                        <div className="flex flex-col gap-4">
                            <div className="font-medium uppercase text-sm">About Nike</div>
                            <div className="text-sm text-white/[0.7] hover:text-white cursor-pointer">
                                News
                            </div>
                            <div className="text-sm text-white/[0.7] hover:text-white cursor-pointer">
                                Careers
                            </div>
                            <div className="text-sm text-white/[0.7] hover:text-white cursor-pointer">
                                Investors
                            </div>
                            <div className="text-sm text-white/[0.7] hover:text-white cursor-pointer">
                                Sustainability
                            </div>
                        </div>
                    </div>
                    {/* LEFT COLUMN END */}

                    {/* RIGHT COLUMN */}
                    <div className="flex gap-6 justify-center md:justify-start">
                        <div
                            onClick={() =>
                                window.open("https://facebook.com", "_blank")
                            }
                            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer transition-all"
                        >
                            <FaFacebookF size={20} />
                        </div>
                        <Link
                            href="https://twitter.com"
                            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer transition-all"
                        >
                            <FaTwitter size={20} />
                        </Link>
                        <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer transition-all">
                            <FaYoutube size={20} />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer transition-all">
                            <FaInstagram size={20} />
                        </div>
                    </div>
                </div>
                
                {/* BOTTOM SECTION */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-4 md:gap-0">
                    {/* LEFT BOTTOM */}
                    <div className="text-xs text-white/[0.7] text-center md:text-left">
                        © 2023 Nike, Inc. All Rights Reserved
                    </div>

                    {/* RIGHT BOTTOM */}
                    <div className="flex gap-4 text-xs text-white/[0.7] text-center md:text-left flex-wrap justify-center">
                        <div className="hover:text-white cursor-pointer transition-all">
                            Guides
                        </div>
                        <div className="hover:text-white cursor-pointer transition-all">
                            Terms of Sale
                        </div>
                        <div className="hover:text-white cursor-pointer transition-all">
                            Terms of Use
                        </div>
                        <div className="hover:text-white cursor-pointer transition-all">
                            Privacy Policy
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
