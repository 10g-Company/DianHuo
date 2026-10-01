import { useState, useEffect } from 'react';

// useInThisArticle.js - Custom hook for tracking active section
export function useInThisArticle(sectionIds, offset = 100) {
    const [activeId, setActiveId] = useState(sectionIds[0] || '');

    useEffect(() => {
        const elements = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        if (!elements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible.length > 0) setActiveId(visible[0].target.id);
            },
            { rootMargin: `-${offset}px 0px -70% 0px`, threshold: 0 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [sectionIds, offset]);

    return activeId;
}