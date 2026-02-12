import React from 'react';

const Events = () => {
    const events = [
        { title: "HACKATHON", desc: "24 Hours of Code & Coffee", color: "from-retro-purple to-blue-900" },
        { title: "SHARK TANK", desc: "Pitch Your Billion Dollar Idea", color: "from-retro-primary to-red-900" },
        { title: "IPL AUCTION", desc: "Strategy Meets Bidding Wars", color: "from-retro-accent to-yellow-900" },
        { title: "ESPORTS", desc: "Battle for Glory", color: "from-green-600 to-green-900" },
        { title: "ROBOWARS", desc: "Metal on Metal Action", color: "from-gray-600 to-gray-900" },
        { title: "STOCK TRADING", desc: "Master the Markets", color: "from-blue-500 to-blue-900" },
    ];

    return (
        <section id="events" className="relative min-h-screen bg-retro-bg py-24 overflow-x-hidden">
            <div className="px-6 md:px-12 mb-12">
                <h2 className="text-6xl md:text-8xl font-display text-white opacity-20">EVENTS</h2>
            </div>

            <div className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-12 snap-x scrollbar-hide">
                {events.map((event, i) => (
                    <div key={i} className="snap-center group relative h-[60vh] md:h-[70vh] w-[85vw] md:w-[60vh] flex-shrink-0 overflow-hidden rounded-[2.5rem] bg-neutral-900 border border-white/10 transition-transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

                        <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-5xl md:text-7xl font-display text-white mb-4 group-hover:text-retro-accent transition-colors leading-[0.9]">{event.title}</h3>
                            <p className="text-xl md:text-2xl font-retro text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{event.desc}</p>
                            <button className="mt-6 px-6 py-2 border border-white text-white rounded-full font-bold hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100 delay-200">
                                Explore &rarr;
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Events;
