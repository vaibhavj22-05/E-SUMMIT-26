import React from 'react';
import { Phone, Mail, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
    const team = [
        { name: "Aarav Sharma", role: "President", email: "aarav@example.com" },
        { name: "Ishita Verma", role: "Vice President", email: "ishita@example.com" },
        { name: "Rohan Gupta", role: "Tech Lead", email: "rohan@example.com" },
        { name: "Sneha Patel", role: "Creative Head", email: "sneha@example.com" }
    ];

    return (
        <section id="contact" className="py-24 px-6 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-5xl md:text-7xl font-display text-white mb-20 animate-fade-in-up">
                    GET IN TOUCH
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {team.map((member, i) => (
                        <div
                            key={i}
                            className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-retro-primary/50 transition-colors group hover:-translate-y-2 duration-300"
                        >
                            <div className="w-20 h-20 bg-retro-secondary rounded-full mb-6 mx-auto blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <div className="text-center -mt-16 relative z-10">
                                <h3 className="text-2xl font-display text-white tracking-wide">{member.name}</h3>
                                <p className="text-retro-primary font-retro text-sm mb-4">{member.role}</p>
                                <div className="flex justify-center gap-4 text-gray-400">
                                    <Mail size={18} className="hover:text-white cursor-pointer" />
                                    <Phone size={18} className="hover:text-white cursor-pointer" />
                                    <Linkedin size={18} className="hover:text-white cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <footer className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h4 className="text-3xl font-display text-white mb-2">E-SUMMIT 2026</h4>
                        <p className="text-gray-500 text-sm">MAIT | Communite × EDC</p>
                    </div>

                    <div className="flex gap-8">
                        <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-retro-primary hover:text-white transition-all text-gray-400">
                            <Instagram size={24} />
                        </a>
                        <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-retro-primary hover:text-white transition-all text-gray-400">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-retro-primary hover:text-white transition-all text-gray-400">
                            <Mail size={24} />
                        </a>
                    </div>
                </footer>

                <div className="text-center mt-12 text-gray-600 text-xs font-retro">
                    MADE WITH PASSION BY MAIT E-SUMMIT TEAM
                </div>
            </div>
        </section>
    );
};

export default Contact;
