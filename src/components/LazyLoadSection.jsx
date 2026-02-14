import React, { useRef, useState, useEffect } from 'react';

const LazyLoadSection = ({ children, placeholderHeight = "100vh" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: "300px", // Start loading 300px before the section comes into view
                threshold: 0.01 // Trigger as soon as 1% is visible (plus margin)
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} style={{ minHeight: isVisible ? "auto" : placeholderHeight }}>
            {isVisible ? children : null}
        </div>
    );
};

export default LazyLoadSection;
