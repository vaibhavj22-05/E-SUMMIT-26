import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center py-20 px-6 md:px-12 relative overflow-hidden bg-[#1a0505]">
            {/* Shared Background Gradient from Hero - Adjusted for Continuity */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a0505] via-[#4a1212] to-[#1a0505] z-0" />

            {/* Shared Noise Texture */}
            <div className="absolute left-0 inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay z-0" />

            {/* Seamless Transition Overlay - Top */}
            <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-[#1a0505] to-transparent z-10 pointer-events-none" />

            {/* Seamless Transition Overlay - Bottom */}
            <div className="absolute left-0 bottom-0 w-full h-32 bg-gradient-to-t from-[#1a0505] to-transparent z-10 pointer-events-none" />

            {/* Background Gradients */}
            <div className="absolute left-0 top-0 right-0 w-[500px] h-[500px] bg-retro-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10 px-4 sm:px-6">
                {/* Left: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-10"
                >
                    <div className="relative">
                        <span className="text-retro-accent font-oriental tracking-widest text-sm uppercase mb-4 block pl-1">The Vision</span>
                        <h2 className="text-[15vw] sm:text-[10vw] md:text-8xl font-display text-white leading-[0.9]">
                            ABOUT <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-retro-primary via-retro-secondary to-retro-red">E-SUMMIT</span>
                        </h2>
                    </div>

                    <p className="text-base sm:text-xl md:text-2xl font-body font-light text-gray-300 leading-relaxed">
                        E-Summit is the flagship entrepreneurship summit organized to promote <span className="text-white font-semibold">innovation</span>, <span className="text-white font-semibold">entrepreneurship</span>, and <span className="text-white font-semibold">leadership</span> among students and professionals.
                    </p>

                    {/* Decorative Elements */}
                    <div className="flex gap-3 pt-2">
                        <div className="h-1.5 w-24 bg-gradient-to-r from-retro-primary to-retro-secondary rounded-full"></div>
                        <div className="h-1.5 w-12 bg-retro-accent/80 rounded-full"></div>
                        <div className="h-1.5 w-4 bg-retro-purple/80 rounded-full"></div>
                    </div>
                </motion.div>

                {/* Right: Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="aspect-[3/4] sm:aspect-[4/5] md:h-[500px] w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative border border-white/10 group shadow-2xl shadow-retro-primary/10">
                        {/* Abstract Background */}
                        <div className="absolute inset-0 bg-[#0f0505]"></div>

                        {/* Animated Elements inside Card */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-retro-primary/20 rounded-full blur-[80px] group-hover:bg-retro-primary/30 transition-colors duration-700"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-retro-accent/10 rounded-full blur-[80px]"></div>

                        {/* Grid Texture */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

                        {/* Central Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
                            <span className="text-[8rem] md:text-[10rem] font-display text-white/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">26</span>

                            <div className="relative z-10 space-y-2">
                                <div className="text-retro-accent font-oriental text-xl tracking-[0.2em] uppercase">Mait Presents</div>
                                <div className="h-px w-16 bg-white/20 mx-auto"></div>
                                <div className="text-white font-tech text-3xl tracking-wider">ZENITH</div>
                            </div>
                        </div>

                        {/* Hover Glow Border */}
                        <div className="absolute inset-0 border-2 border-white/5 rounded-[2.5rem] group-hover:border-retro-primary/30 transition-colors duration-500"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
