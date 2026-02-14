import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Music, VolumeX, Moon } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00" });
    const audioRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Timer Logic
        const targetDate = new Date("2026-03-23T12:00:00").getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;
            if (distance < 0) {
                clearInterval(interval);
                return;
            }
            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0'),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'),
            });
        }, 1000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, []);

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    const links = [
        { name: "HOME", href: "#home" },
        { name: "ABOUT US", href: "#about" },
        { name: "EVENTS", href: "#events" },
        { name: "CONTACT", href: "#contact" },
    ];

    return (
        <nav className="fixed md:absolute top-0 left-0 w-full z-50 py-3 md:py-8 bg-gradient-to-b from-black/90 via-black/70 to-transparent backdrop-blur-md md:bg-transparent md:backdrop-blur-none border-b border-white/5 md:border-0 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
                {/* Left Side: Logo/Branding (Mobile) + Nav Links (Desktop) */}
                <div className="flex items-center gap-4 md:gap-12 md:pl-16">
                    {/* Mobile Logo/Branding */}
                    <a href="#home" className="md:hidden">
                        <h1 className="font-display text-2xl text-transparent bg-clip-text bg-gradient-to-r from-retro-primary to-retro-accent tracking-wider">
                            E-SUMMIT
                        </h1>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-12">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative group overflow-hidden drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                            >
                                <span className="block text-lg font-bold font-oriental tracking-widest text-white transition-transform duration-300 group-hover:-translate-y-full">
                                    {link.name}
                                </span>
                                <span className="absolute inset-0 block text-lg font-bold font-oriental tracking-widest text-retro-accent translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                                    {link.name}
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-retro-accent/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-[0_0_10px_#ffd700]"></span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Side: Timer + Music */}
                <div className="hidden md:flex items-center gap-8">
                    {/* Countdown Timer */}
                    <div className="flex gap-4 items-start">
                        {/* Block Component for Timer */}
                        {[
                            { val: timeLeft.days, label: "DAYS" },
                            { val: ":", label: "" },
                            { val: timeLeft.hours, label: "HOURS" },
                            { val: ":", label: "" },
                            { val: timeLeft.minutes, label: "MINUTES" }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <span className={`text-4xl lg:text-5xl font-tech font-bold tracking-wider text-rose-100 drop-shadow-[0_2px_10px_rgba(255,77,0,0.5)] ${item.val === ":" ? "animate-pulse" : ""}`}>
                                    {item.val}
                                </span>
                                {item.label && (
                                    <span className="text-[10px] font-oriental text-retro-accent tracking-widest uppercase mt-0 opacity-80">
                                        {item.label}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Music Toggle with Floating Notes */}
                    <div className="relative pl-4 border-l border-white/10">
                        <button
                            onClick={toggleAudio}
                            className={`group relative w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 z-20 ${isPlaying
                                ? 'border-desi-gold bg-desi-gold/10'
                                : 'border-white/20 bg-white/5 hover:bg-white/10'
                                }`}
                        >
                            {/* Pulse Effect */}
                            {isPlaying && (
                                <span className="absolute inset-0 rounded-full border border-desi-gold opacity-50 animate-[ping_2s_ease-in-out_infinite]"></span>
                            )}

                            {isPlaying ? (
                                <Music className="w-5 h-5 text-desi-gold relative z-10 drop-shadow-[0_0_5px_rgba(255,215,0,0.8)]" />
                            ) : (
                                <VolumeX className="w-5 h-5 text-white/50 group-hover:text-white transition-colors relative z-10" />
                            )}
                        </button>

                        {/* Floating Notes Animation - Emanating from Button */}
                        {isPlaying && (
                            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                                {[1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 0, scale: 0.5, x: 0 }}
                                        animate={{
                                            opacity: [0, 1, 0],
                                            y: -50,
                                            x: (i % 2 === 0 ? 20 : -20),
                                            scale: 1.2,
                                            rotate: (i % 2 === 0 ? 15 : -15)
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.6,
                                            ease: "easeOut"
                                        }}
                                        className="absolute text-desi-gold font-bold text-xl drop-shadow-[0_0_5px_rgba(255,215,0,0.8)]"
                                    >
                                        {i % 2 === 0 ? "♪" : "♫"}
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>

                    <audio ref={audioRef} loop src="https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c8a73467.mp3?filename=ambient-piano-loop-85bpm-22838.mp3" />
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white pointer-events-auto" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden absolute top-full left-0 w-full pointer-events-auto z-50">
                    <div className="flex flex-col items-center gap-6 py-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xl font-oriental tracking-widest text-white hover:text-retro-primary transition-colors uppercase"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
