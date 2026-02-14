import React, { useRef, useState } from 'react';
import { motion, useTransform, useScroll, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, Trophy, Users, AlertCircle } from 'lucide-react';

const EventPopup = ({ event, onClose }) => {
    if (!event) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
            {/* Main Content Container */}
            <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="w-full max-w-6xl h-full max-h-[90vh] bg-[#1a0505] rounded-[2rem] border border-desi-gold/20 overflow-hidden relative flex flex-col md:flex-row shadow-2xl shadow-desi-gold/5"
            >
                {/* Back Button - Moved Inside Card */}
                <div className="absolute top-4 left-4 z-50">
                    <button
                        onClick={onClose}
                        className="group flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-black/60 shadow-lg"
                    >
                        <ArrowLeft size={18} />
                        <span className="font-oriental text-xs tracking-widest uppercase">Back</span>
                    </button>
                </div>
                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-desi-gold/30 rounded-tl-[2rem] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-desi-gold/30 rounded-br-[2rem] pointer-events-none" />

                {/* Left Side: Visual / Title Header (Mobile: Top) */}
                <div className={`relative w-full md:w-1/3 h-48 md:h-full bg-gradient-to-br ${event.color} overflow-hidden p-8 flex flex-col justify-end`}>
                    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-30 mix-blend-overlay" />
                    <div className="relative z-10">
                        <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-tech tracking-wider text-white/80 mb-4 border border-white/10">
                            SEASON 2026
                        </span>
                        <h2 className="text-4xl md:text-6xl font-display text-white leading-none mb-2 drop-shadow-xl">
                            {event.title}
                        </h2>
                        <p className="font-body text-white/80 text-lg">
                            {event.desc}
                        </p>
                    </div>
                </div>

                {/* Right Side: Details Scrollable */}
                <div className="flex-1 h-full overflow-y-auto custom-scrollbar bg-[#120505] relative">
                    <div className="p-8 md:p-12 space-y-12">
                        {/* About Section */}
                        <section>
                            <h3 className="text-2xl font-oriental text-desi-gold mb-4 flex items-center gap-3">
                                <AlertCircle size={20} /> About The Event
                            </h3>
                            <p className="text-gray-300 font-body leading-relaxed text-lg">
                                {event.fullDesc}
                            </p>
                        </section>

                        {/* Grid Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                                <h4 className="text-retro-primary font-tech tracking-wider mb-2 flex items-center gap-2">
                                    <Trophy size={18} /> PRIZE POOL
                                </h4>
                                <p className="text-2xl text-white font-display tracking-wide">{event.prize}</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                                <h4 className="text-retro-primary font-tech tracking-wider mb-2 flex items-center gap-2">
                                    <Users size={18} /> TEAM SIZE
                                </h4>
                                <p className="text-2xl text-white font-display tracking-wide">{event.teamSize}</p>
                            </div>
                        </div>

                        {/* Rules Section */}
                        <section>
                            <h3 className="text-2xl font-oriental text-desi-gold mb-6">Rules & Regulations</h3>
                            <ul className="space-y-4">
                                {event.rules.map((rule, i) => (
                                    <li key={i} className="flex items-start gap-4 text-gray-400 group">
                                        <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs text-retro-accent border border-white/10 group-hover:border-retro-accent transition-colors shrink-0 mt-0.5">
                                            {i + 1}
                                        </span>
                                        <span className="font-body leading-relaxed group-hover:text-gray-200 transition-colors">{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Footer Action */}
                        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-6 items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500 font-tech uppercase tracking-wider mb-1">Registration Closes</span>
                                <span className="text-white font-body font-semibold flex items-center gap-2"><Calendar size={16} className="text-retro-primary" /> 20th March, 2026</span>
                            </div>
                            <button className="px-8 py-4 bg-gradient-to-r from-retro-primary to-retro-secondary text-white font-bold font-tech tracking-widest rounded-lg hover:scale-105 transition-transform shadow-lg shadow-retro-primary/20">
                                REGISTER NOW
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const EventCard = ({ event, index, total, scrollYProgress, onSelect }) => {
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
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-white mb-3 leading-[0.9] drop-shadow-lg group-hover:text-retro-accent transition-colors">
                                {event.title}
                            </h3>
                            <div className="h-1 w-12 bg-retro-primary mb-4 rounded-full group-hover:w-20 group-hover:bg-retro-accent transition-all duration-500 ease-out" />

                            <p className="text-base sm:text-lg font-body text-gray-300 line-clamp-2 leading-snug group-hover:text-white transition-colors">
                                {event.desc}
                            </p>
                        </div>

                        {/* CTA - Reveals on Hover */}
                        <div className="mt-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                            <button
                                onClick={() => onSelect(event)}
                                className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-retro-accent transition-colors shadow-lg shadow-white/5"
                            >
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
    const [selectedEvent, setSelectedEvent] = useState(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // --- Responsive Configuration ---
    const eventsCount = 6;
    // Map scroll progress 0-0.9 to the full index range, leaving the last 10% as a buffer where the last card stays visible.
    const scrollIndex = useTransform(scrollYProgress, [0, 0.9], [0, eventsCount - 1]);
    const x = useMotionTemplate`calc(${scrollIndex} * -1 * (var(--card-width) + var(--gap)))`;

    const events = [
        {
            title: "TRADING ALGO",
            desc: "Algorithmic Trading Competition",
            fullDesc: "Participants design and implement an algorithm that automatically executes trades in financial markets based on predefined logic",
            color: "from-retro-purple to-indigo-900",
            prize: "₹50,000",
            teamSize: "3-4 Members",
            EvaluationCriteria: ["Profitability", "Risk-adjusted returns", "Robustness of strategy", "Code efficiency and logic"]
        },
        {
            title: "REBRANDING",
            desc: "Company Transformation & Pitch",
            fullDesc: "You’re given an existing company (often outdated or struggling) and must redesign its identity and reposition it in the market",
            color: "from-retro-primary to-rose-900",
            prize: "Funding + ₹30,000",
            teamSize: "1-3 Members",
            EvaluationCriteria: ["Creativity + practicality", "Market research logic", "Strategic alignment", "Persuasiveness of pitch"]
        },
        {
            title: "HI-TABLE COMPETITION",
            desc: "High Table / Case Round Format",
            fullDesc: "A high-pressure boardroom-style competition where teams present solutions to judges (acting as investors, CEOs, or board members",
            color: "from-retro-accent to-amber-900",
            prize: "₹20,000",
            teamSize: "2-3 Members",
            EvaluationCriteria: ["Depth of analysis", "Confidence & articulation", "Structured thinking", "Handling counter-questions"]
        },
        {
            title: "ESPORTS",
            desc: "Battle for ultimate glory.",
            fullDesc: "Compete in top-tier titles like Valorant and BGMI. showcase your reflexes, strategy, and teamwork on the big stage.",
            color: "from-emerald-600 to-green-950",
            prize: "₹25,000",
            teamSize: "5 Members",
            rules: ["Bring your own peripherals (Mouse/Keyboard allowed).", "Standard tournament draft rules apply.", "Toxic behavior leads to immediate disqualification."]
        },
        {
            title: "ROBOWARS",
            desc: "Metal on metal showdown.",
            fullDesc: "The ultimate destruction derby. Build a combat robot and destroy your opponents in the arena. Sparks will fly!",
            color: "from-slate-500 to-gray-900",
            prize: "₹40,000",
            teamSize: "4-6 Members",
            rules: ["Bot weight limit: 15kg / 60kg categories.", "No liquid projectiles or EMP devices.", "Safety inspection is mandatory before matches."]
        },
        {
            title: "TRADING",
            desc: "High stakes stock simulation.",
            fullDesc: "Master the markets in this real-time stock trading simulation. Analyze trends, make moves, and maximize your portfolio value.",
            color: "from-sky-600 to-blue-950",
            prize: "₹15,000",
            teamSize: "Solo / Duo",
            rules: ["Initial virtual capital: ₹10,00,000", "Market manipulation exploits are banned.", "Portfolio value at market close determines the winner."]
        },
    ];

    return (
        <section
            ref={targetRef}
            id="events"
            className="relative h-[600vh] bg-[#1a0505]"
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

            {/* Event Popup Overlay */}
            <AnimatePresence>
                {selectedEvent && (
                    <EventPopup event={selectedEvent} onClose={() => setSelectedEvent(null)} />
                )}
            </AnimatePresence>

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
                    <h2 className="text-4xl sm:text-5xl md:text-8xl font-display text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 uppercase tracking-widest select-none drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">EVENTS</h2>
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
                                onSelect={setSelectedEvent}
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
