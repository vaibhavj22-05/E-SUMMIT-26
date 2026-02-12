import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-[#0f0505] pt-24 pb-12 overflow-hidden">
            {/* Top Gradient Fade */}
            <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-[#1a0505] to-transparent z-10 pointer-events-none" />

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 mix-blend-overlay z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <span className="text-retro-accent font-oriental tracking-widest text-xs uppercase mb-1">Mait Presents</span>
                            <h2 className="text-4xl font-display text-white tracking-wider">ZENITH</h2>
                        </div>
                        <p className="text-gray-400 text-sm font-body leading-relaxed max-w-xs">
                            E-Summit '26 is the flagship entrepreneurship summit promoting innovation and leadership among the next generation of changemakers.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-white font-display text-xl tracking-wide">Explore</h3>
                        <ul className="space-y-3 text-sm font-body text-gray-400">
                            <li><a href="#home" className="hover:text-retro-primary transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-retro-primary transition-colors">About Us</a></li>
                            <li><a href="#events" className="hover:text-retro-primary transition-colors">Events</a></li>
                            <li><a href="#contact" className="hover:text-retro-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="space-y-6">
                        <h3 className="text-white font-display text-xl tracking-wide">Contact</h3>
                        <ul className="space-y-4 text-sm font-body text-gray-400">
                            <li className="flex items-start gap-3">
                                <LinkIconWrapper>
                                    <MapPin size={16} />
                                </LinkIconWrapper>
                                <span>Maharaja Agrasen Institute of Technology, Delhi, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <LinkIconWrapper>
                                    <Mail size={16} />
                                </LinkIconWrapper>
                                <a href="mailto:contact@edc-mait.com" className="hover:text-white transition-colors">contact@edc-mait.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Socials */}
                    <div className="space-y-6">
                        <h3 className="text-white font-display text-xl tracking-wide">Follow Us</h3>
                        <div className="flex gap-4">
                            <SocialIcon href="#" icon={<Instagram size={20} />} />
                            <SocialIcon href="#" icon={<Twitter size={20} />} />
                            <SocialIcon href="#" icon={<Linkedin size={20} />} />
                            <SocialIcon href="#" icon={<Facebook size={20} />} />
                        </div>
                        <div className="mt-6 border border-white/10 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                            <p className="text-xs text-gray-400 mb-2">Subscribe to our newsletter</p>
                            <div className="flex">
                                <input type="email" placeholder="Email" className="bg-transparent border-b border-white/20 text-white text-sm w-full focus:outline-none focus:border-retro-primary py-1 placeholder-gray-600" />
                                <button className="text-retro-primary text-xs font-bold uppercase ml-2 hover:text-white transition-colors">→</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-tech uppercase tracking-wider">
                    <p>© 2026 E-SUMMIT ZENITH. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Helper Components
const SocialIcon = ({ href, icon }) => (
    <a
        href={href}
        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-retro-primary hover:border-retro-primary transition-all duration-300"
    >
        {icon}
    </a>
);

const LinkIconWrapper = ({ children }) => (
    <span className="text-retro-primary mt-0.5">{children}</span>
);

export default Footer;
