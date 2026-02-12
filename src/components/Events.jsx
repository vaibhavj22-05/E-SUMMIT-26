import React, { useRef } from 'react';
import { motion, useTransform, useScroll, useMotionTemplate } from 'framer-motion';

const EventCard = ({ event, index, total, scrollYProgress }) => {
    // 1. Calculate Activation Timeline
    const step = 1 / (total - 1);
    const center = step * index;
    const rangeVals = [Math.max(0, center - step), center, Math.min(1, center + step)];

    // --- Active State Animations ---
    const scale = useTransform(scrollYProgress, rangeVals, [0.85, 1.15, 0.85]);
    const opacity = useTransform(scrollYProgress, rangeVals, [0.4, 1, 0.4]);
    const y = useTransform(scrollYProgress, rangeVals, ["10%", "-5%", "10%"]);
    const blurVal = useTransform(scrollYProgress, rangeVals, [4, 0, 4]);
    const filter = useMotionTemplate`blur(${blurVal}px)`;

    // 3D Tilt
    const rotateY = useTransform(scrollYProgress, rangeVals, [15, 0, -15]);

    // Z-Index: Ensure center card is top. Step-based logic for clean stacking.
    // We lift the active card significantly above neighbors.
    const zIndexVal = useTransform(scrollYProgress, rangeVals, [1, 50, 1]);
    const zIndex = useTransform(zIndexVal, (v) => Math.round(v));

    // Pointer Events: Interactive only when active
    const pointerEvents = useTransform(scrollYProgress, (val) => {
        const dist = Math.abs(val - center);
        return dist < step * 0.4 ? "auto" : "none";
    });

    return (
        <motion.div
            style={{
                scale,
                opacity,
                y,
                filter,
                rotateY,
                zIndex,
                pointerEvents
            }}
            className="relative flex-shrink-0 rounded-[2.5rem] perspective-1000 group cursor-pointer"
            // Use CSS variables for sizing to maintain sync with parent layout
            css={{
                width: "var(--card-width)",
                height: "55vh"
            }}
        >
            {/* Explicit size container to fix framer layout issues if css prop is flaky */}
            <div className="w-[var(--card-width)] h-[55vh] relative rounded-[2.5rem]">
                {/* 3D Inner Container */}
                <div className="w-full h-full relative rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl transition-all duration-500 hover:border-retro-accent/50 hover:shadow-[0_0_60px_rgba(255,215,0,0.15)] origin-center">

                    {/* Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-40 group-hover:opacity-60 transition-opacity duration-700`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0505] via-black/40 to-transparent z-10" />
                    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay z-10" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 p-8 md:p-10 z-20 w-full flex flex-col justify-end h-full">
                        <div className="absolute top-6 right-6 bg-white/5 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                            <span className="text-white/60 text-[10px] font-tech tracking-[0.2em] uppercase">2026</span>
                        </div>

                        {/* Animated Text Block */}
                        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-3 leading-[0.9] drop-shadow-lg group-hover:text-retro-accent transition-colors">
                                {event.title}
                            </h3>
                            <div className="h-1 w-12 bg-retro-primary mb-4 rounded-full group-hover:w-20 group-hover:bg-retro-accent transition-all duration-500 ease-out" />

                            <p className="text-lg font-body text-gray-300 line-clamp-2 leading-snug group-hover:text-white transition-colors">
                                {event.desc}
                            </p>
                        </div>

                        {/* CTA - Reveals on Hover */}
                        <div className="mt-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                            <button className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-retro-accent transition-colors shadow-lg shadow-white/5">
                                Explore Event
                            </button>
                        </div>
                    </div>

                    {/* Rim Light */}
                    <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 pointer-events-none group-hover:border-retro-accent/20 transition-colors duration-500 mix-blend-screen" />
                </div>
            </div>
        </motion.div>
    );
};

const Events = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // --- Responsive Configuration ---
    // Defined as CSS variables in the container style to keep JS and CSS synced.
    // Desktop: 60vh width, 3rem gap. Mobile: 85vw width, 1.5rem gap.

    // Transform Mapper: Maps 0-1 scroll progress to 0-N index steps
    const eventsCount = 6;
    const scrollIndex = useTransform(scrollYProgress, [0, 1], [0, eventsCount - 1]);

    // Dynamic X Transform using CSS Calc + Motion Value
    // Logic: -1 * scrollIndex * (cardWidth + gap)
    const x = useMotionTemplate`calc(${scrollIndex} * -1 * (var(--card-width) + var(--gap)))`;

    const events = [
        { title: "HACKATHON", desc: "24h of pure code & chaos.", color: "from-retro-purple to-indigo-900" },
        { title: "SHARK TANK", desc: "Pitch your ideas to investors.", color: "from-retro-primary to-rose-900" },
        { title: "IPL AUCTION", desc: "Build your dream team.", color: "from-retro-accent to-amber-900" },
        { title: "ESPORTS", desc: "Battle for ultimate glory.", color: "from-emerald-600 to-green-950" },
        { title: "ROBOWARS", desc: "Metal on metal showdown.", color: "from-slate-500 to-gray-900" },
        { title: "TRADING", desc: "High stakes stock simulation.", color: "from-sky-600 to-blue-950" },
    ];

    return (
        <section
            ref={targetRef}
            id="events"
            className="relative h-[400vh] bg-[#1a0505]"
            style={{
                // Responsive Variables
                "--card-width": "60vh",
                "--gap": "3rem",
                "@media (max-width: 768px)": {
                    "--card-width": "80vw", // Slightly smaller than 100vw to show neighbors
                    "--gap": "1rem"
                }
            }}
        >
            {/* Inject Mobile Media Query via Style Tag hack or standard CSS class usage. 
                 Since inline style media queries aren't standard, we'll use a wrapper class or Tailwind arbitrary values. 
                 Let's use a class approach for the variables to be safe. 
             */}
            <style>{`
                .events-track {
                    --card-width: 80vw;
                    --gap: 1.5rem;
                }
                @media (min-width: 768px) {
                    .events-track {
                        --card-width: 60vh;
                        --gap: 4rem;
                    }
                }
             `}</style>

            <div className="sticky top-0 flex h-screen items-center overflow-hidden perspective-1000 events-track">
                {/* Shared Backgrounds */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0505] via-[#2b0a0a] to-[#1a0505] z-0" />
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay z-0" />

                {/* Seamless Transition Overlay - Top */}
                <div className="absolute top-0 w-full h-64 bg-gradient-to-b from-[#1a0505] via-[#1a0505]/80 to-transparent z-20 pointer-events-none" />

                {/* Seamless Transition Overlay - Bottom */}
                <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-[#1a0505] via-[#1a0505]/80 to-transparent z-20 pointer-events-none" />

                {/* Ambient Glows */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-retro-primary/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" />
                    <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-retro-purple/10 rounded-full blur-[100px] mix-blend-screen animate-pulse delay-1000" />
                </div>

                {/* Fixed Heading - Moved Outside for Visibility */}
                <div className="absolute top-8 left-0 w-full text-center md:text-left md:left-12 z-50 pointer-events-none">
                    <h2 className="text-5xl md:text-8xl font-display text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 uppercase tracking-widest select-none drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">EVENTS</h2>
                </div>

                <div className="relative z-10 w-full h-full flex flex-col justify-center">
                    {/* Infinite Scroll Container */}
                    {/* Padding Left/Right = calc(50vw - 30vh) to center the first/last items */}
                    <motion.div
                        style={{ x }}
                        className="flex gap-[var(--gap)] w-fit items-center will-change-transform pl-[calc(50vw-var(--card-width)/2)] pr-[calc(50vw-var(--card-width)/2)]"
                    >
                        {events.map((event, i) => (
                            <EventCard
                                key={i}
                                event={event}
                                index={i}
                                total={events.length}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </motion.div>

                    {/* Scroll Hint */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 mix-blend-plus-lighter">
                        <div className="w-5 h-8 border border-white rounded-full flex justify-center pt-2">
                            <div className="w-1 h-1 bg-white rounded-full animate-bounce" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;
