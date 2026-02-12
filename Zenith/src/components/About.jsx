import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-12 relative overflow-hidden bg-retro-bg/50 backdrop-blur-3xl">
            <div className="max-w-7xl mx-auto space-y-32">
                {/* Section 1 */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-white space-y-8">
                        <h2 className="text-5xl md:text-8xl font-display leading-[0.9]">
                            WHAT IS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-retro-primary to-retro-red">E-SUMMIT?</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-body font-light text-gray-300 leading-relaxed border-l-4 border-retro-secondary pl-6">
                            More than an event. It's a <span className="text-white font-bold">movement</span>.
                            Where ideas collide with action. The ultimate startup playground for the dreamers, the builders, and the disruptors.
                        </p>
                    </div>
                    <div className="relative h-96 bg-gradient-to-br from-retro-purple via-retro-primary to-retro-orange rounded-[3rem] overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(255,77,0,0.3)] hover:scale-105 transition-transform duration-500">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-9xl font-display text-white/20 mix-blend-overlay">2026</span>
                        </div>
                        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="text-center space-y-16">
                    <h2 className="text-4xl md:text-6xl font-display text-white">
                        WHY IT MATTERS
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { num: "2500+", text: "Footfall", color: "text-retro-primary" },
                            { num: "50+", text: "Startups", color: "text-retro-secondary" },
                            { num: "∞", text: "Possibilities", color: "text-retro-accent" }
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="p-10 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all group hover:-translate-y-2"
                            >
                                <div className={`text-6xl md:text-8xl font-display ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>{stat.num}</div>
                                <div className="text-2xl font-retro text-gray-300 uppercase tracking-widest">{stat.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
