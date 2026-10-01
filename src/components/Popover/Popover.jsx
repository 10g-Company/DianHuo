import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import './Popover.css';

const MARGIN = 15; // minimum gap between popup and viewport edge

export default function Popover({ title, children, body, ...props }) {
    const [isOpen, setIsOpen] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const wrapperRef = useRef(null);
    const boxRef = useRef(null);

    // Close when clicking outside
    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Position the popup after it renders (and on resize/scroll)
    useLayoutEffect(() => {
        if (!isOpen) return;

        const reposition = () => {
            const trigger = wrapperRef.current;
            const box = boxRef.current;
            if (!trigger || !box) return;

            const triggerRect = trigger.getBoundingClientRect();
            const boxRect = box.getBoundingClientRect();
            const vw = window.innerWidth;
            const vh = window.innerHeight;

            // Default: below the trigger, left-aligned
            let top = triggerRect.bottom + MARGIN;
            let left = triggerRect.left;

            // Flip above if it overflows the bottom
            if (top + boxRect.height > vh - MARGIN) {
                const aboveTop = triggerRect.top - boxRect.height - MARGIN;
                if (aboveTop >= MARGIN) {
                    top = aboveTop;
                } else {
                    // Not enough room above either — clamp to viewport bottom
                    top = Math.max(MARGIN, vh - boxRect.height - MARGIN);
                }
            }

            // Shift left if it overflows the right edge
            if (left + boxRect.width > vw - MARGIN) {
                left = vw - boxRect.width - MARGIN;
            }

            // Clamp to left edge
            if (left < MARGIN) {
                left = MARGIN;
            }

            setCoords({ top, left });
        };

        reposition();

        window.addEventListener('resize', reposition);
        window.addEventListener('scroll', reposition, true);
        return () => {
            window.removeEventListener('resize', reposition);
            window.removeEventListener('scroll', reposition, true);
        };
    }, [isOpen]);

    const toggle = (e) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
    };

    return (
        <span className="popover-wrapper" ref={wrapperRef} {...props}>
            <span
                className="popover-trigger"
                onClick={toggle}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggle(e);
                    }
                }}
            >
                {children}
            </span>

            {isOpen && (
                <div
                    ref={boxRef}
                    className="popover-box"
                    role="dialog"
                    style={{
                        top: coords.top,
                        left: coords.left,
                        // hide until positioned to avoid a flash at 0,0
                        visibility: coords.top === 0 && coords.left === 0 ? 'hidden' : 'visible',
                    }}
                >
                    <div className="popover-title">{title || children}</div>
                    <div
                        className="popover-bodytext"
                        dangerouslySetInnerHTML={
                            typeof body === 'string' ? { __html: body } : undefined
                        }
                    >
                        {typeof body !== 'string' ? body : null}
                    </div>
                </div>
            )}
        </span>
    );
}