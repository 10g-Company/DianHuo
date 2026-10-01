import React, { useState, useRef, useEffect } from 'react';
import { useInThisArticle } from '../../hooks/useInThisArticle';
import './InThisArticle.css';

const MAX_VISIBLE_ITEMS = 3;
const WIDE_THRESHOLD = 900;   // total width needed to go wide (content + sidebar)

export function InThisArticle({ sections }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isWide, setIsWide] = useState(false);
    const rootRef = useRef(null);

    const activeId = useInThisArticle(sections.map((s) => s.id));

    // Measure the .article parent. Docking the sidebar doesn't shrink this,
    // so there's no feedback loop.
    useEffect(() => {
        const host = rootRef.current?.closest('.article');
        if (!host) return;

        const ro = new ResizeObserver(([entry]) => {
            setIsWide(entry.contentRect.width >= WIDE_THRESHOLD);
        });
        ro.observe(host);
        return () => ro.disconnect();
    }, []);

    const go = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (isWide) {
        return (
            <nav ref={rootRef} className="ita ita--sidebar" aria-label="In this article">
                <h4 className="ita__title">In this article</h4>
                <ul className="ita__list">
                    {sections.map((s) => (
                        <li key={s.id} className="ita__item">
                            <a
                                href={`#${s.id}`}
                                onClick={(e) => go(e, s.id)}
                                className={`ita__link ${activeId === s.id ? 'ita__link--active' : ''}`}
                                aria-current={activeId === s.id ? 'location' : undefined}
                            >
                                {s.topic}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }

    const hasMore = sections.length > MAX_VISIBLE_ITEMS;
    const visible = isExpanded ? sections : sections.slice(0, MAX_VISIBLE_ITEMS);
    const remaining = sections.length - MAX_VISIBLE_ITEMS;

    return (
        <nav ref={rootRef} className="ita ita--top" aria-label="In this article">
            <h4 className="ita__title">In this article</h4>
            <ul className="ita__list">
                {visible.map((s) => (
                    <li key={s.id} className="ita__item">
                        <a href={`#${s.id}`} onClick={(e) => go(e, s.id)} className="ita__link">
                            {s.topic}
                        </a>
                    </li>
                ))}
            </ul>
            {hasMore && (
                <button
                    type="button"
                    className="ita__toggle"
                    onClick={() => setIsExpanded((v) => !v)}
                    aria-expanded={isExpanded}
                >
                    {isExpanded ? '[Show less]' : `[Show ${remaining} more]`}
                </button>
            )}
        </nav>
    );
}