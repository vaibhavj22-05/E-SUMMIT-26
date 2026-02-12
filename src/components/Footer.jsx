import React from 'react';
import { Mail, Linkedin, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-[#0f0505] pt-24 pb-12 overflow-hidden">
            {/* Top Gradient Fade */}
            <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-[#1a0505] to-transparent z-10 pointer-events-none" />

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 mix-blend-overlay z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start">

                    {/* Left Section: Branding & Info (Col Span 5) */}
                    <div className="md:col-span-4 space-y-8">
                        {/* Logos */}
                        <div className="flex items-center gap-6">
                            {/* Placeholder for Mountain Logo */}
                            <div className="w-16 h-16 rounded-full border-2 border-white/20 bg-gradient-to-tr from-cyan-900 to-blue-900 flex items-center justify-center relative overflow-hidden group hover:border-retro-primary transition-colors">
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-black/30 transform skew-y-6" />
                                <span className="font-display text-white text-xl relative z-10">EDC</span>
                            </div>

                            {/* Placeholder for Bulb Logo */}
                            <div className="w-16 h-16 rounded-full border-2 border-white/20 bg-black flex items-center justify-center group hover:border-retro-primary transition-colors">
                                <span className="font-display text-white text-3xl">MAIT</span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-sm font-body leading-relaxed">
                            E-Summit MAIT is North India's one of the largest entrepreneurial fest, organized by the Entrepreneurship Development Cell to inspire and empower future leaders.
                        </p>

                        {/* Email Button - Red */}
                        <a href="mailto:esummit@mait.ac.in" className="inline-flex items-center gap-3 bg-[#c41e3a] hover:bg-[#a01830] text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg group">
                            <Mail size={20} className="group-hover:scale-110 transition-transform" />
                            <span className="font-display tracking-wider pt-0.5">esummit@mait.ac.in</span>
                        </a>

                        {/* Made with Love */}
                        <div className="text-gray-500 text-xs font-retro flex items-center gap-1.5 pt-4">
                            <span>Made with</span>
                            <span className="text-[#c41e3a] animate-pulse">❤</span>
                            <span>by WebDev Team</span>
                        </div>
                    </div>

                    {/* Middle Section: Explore & Socials (Col Span 3) */}
                    <div className="md:col-span-3 flex flex-col sm:flex-row gap-12 md:gap-8 justify-between md:pl-8">

                        {/* Explore */}
                        <div className="space-y-6">
                            <h3 className="text-white font-display text-2xl tracking-wide">Explore</h3>
                            <ul className="space-y-3 text-sm font-body text-gray-400">
                                <li><a href="#about" className="hover:text-retro-primary transition-colors hover:pl-1 duration-300 block">About</a></li>
                                <li><a href="#events" className="hover:text-retro-primary transition-colors hover:pl-1 duration-300 block">Events</a></li>
                                <li><a href="#speakers" className="hover:text-retro-primary transition-colors hover:pl-1 duration-300 block">Speakers</a></li>
                                <li><a href="#sponsors" className="hover:text-retro-primary transition-colors hover:pl-1 duration-300 block">Sponsors</a></li>
                            </ul>
                        </div>

                        {/* Socials */}
                        <div className="space-y-6">
                            <h3 className="text-white font-display text-2xl tracking-wide">Socials</h3>
                            <ul className="space-y-4 text-sm font-body text-gray-400">
                                <li>
                                    <a href="#" className="flex items-center gap-2 hover:text-white transition-colors group">
                                        <Linkedin size={18} className="group-hover:text-[#0077b5] transition-colors" />
                                        <span>LinkedIn</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-2 hover:text-white transition-colors group">
                                        <Instagram size={18} className="group-hover:text-[#e4405f] transition-colors" />
                                        <span>Instagram</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-2 hover:text-white transition-colors group">
                                        <MessageCircle size={18} className="group-hover:text-[#25D366] transition-colors" />
                                        <span>WhatsApp</span>
                                    </a>
                                </li>


                            </ul>
                        </div>
                    </div>

                    {/* Right Section: Location (Col Span 5) */}
                    <div className="md:col-span-5 space-y-6">
                        <h3 className="text-white font-display text-2xl tracking-wide text-center md:text-left">Location</h3>

                        {/* Map Container */}
                        <div className="w-full h-64 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group bg-[#1a1a1a]">
                            {/* Overlay while loading or interaction */}
                            <div className="absolute inset-0 bg-transparent pointer-events-none group-hover:bg-transparent transition-colors z-10 box-border border-4 border-transparent group-hover:border-white/5 duration-500 rounded-xl" />

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.997443658253!2d77.06612741508608!3d28.719611682386047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0b036f0653a9%3A0xe5a363259e262176!2sMaharaja%20Agrasen%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="MAIT Location"
                            ></iframe>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar Simple */}
                <div className="border-t border-white/5 pt-8 text-center md:text-left text-xs text-gray-700 font-tech uppercase tracking-wider">
                    <p>© 2026 E-SUMMIT MAIT. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
