import React, { useEffect, useRef, useState } from 'react';
import './FancyLayout.css';

const FancyLayout = ({
    textCol,
    imgCol,
    color1,
    reversed = false,
    animate = true,
    className = '',
    style = {}, // ← accept style
    ...rest    // ← catch any other passthrough props, e.g. id
}) => {
    // Function to create a lighter version of the color
    const getLighterColor = (color) => {
        const hex = color.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);

        const lighterR = Math.round(r + (255 - r) * 0.5);
        const lighterG = Math.round(g + (255 - g) * 0.5);
        const lighterB = Math.round(b + (255 - b) * 0.5);

        return `#${((1 << 24) + (lighterR << 16) + (lighterG << 8) + lighterB)
            .toString(16)
            .slice(1)}`;
    };

    const color2 = getLighterColor(color1);

    // <-- ADDED: ref + in-view state
    const rootRef = useRef(null);
    const [inView, setInView] = useState(false);

    // <-- ADDED: IntersectionObserver to toggle inView on enter AND exit
    useEffect(() => {
        if (!animate) return;
        const el = rootRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update state on both enter and exit so the animation replays
                setInView(entry.isIntersecting);
            },
            { threshold: 0.25 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [animate]);

    // <-- ADDED: build the animation class list
    const animationClasses = animate
        ? `animate ${inView ? 'is-in-view' : ''}`
        : '';

    return (
        <div
            ref={rootRef}                                    // <-- ADDED
            className={`fancy-layout ${reversed ? 'reversed' : ''} ${animationClasses} ${className}`} // <-- ADDED animationClasses
            style={{
                '--color1': color1,
                '--color2': color2,
                ...style, // ← merge user style LAST so it can override anything
            }}
            {...rest}
        >
            <div className="fancy-layout__background">
                {/* <-- CHANGED: this is now the animatable slanted color1 layer */}
                <div className="fancy-layout__color1"></div>
            </div>

            <div className="fancy-layout__content">
                <div className="fancy-layout__col fancy-layout__text-col">
                    {textCol}
                </div>
                <div className="fancy-layout__col fancy-layout__img-col">
                    {imgCol}
                </div>
            </div>
        </div>
    );
};

export default FancyLayout;