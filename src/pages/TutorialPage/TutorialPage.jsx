import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TutorialPage.css";

// import topics here...
import GetStarted from './Topics/01GetStarted/GetStarted';
import ItemSelection from "./Topics/02Tutorial/ItemSelection";
import UIIntro from "./Topics/02Tutorial/UIIntro";
import DataSetupOverview from "./Topics/02Tutorial/DataSetupOverview";
import Item from "./Topics/02Tutorial/Item";
import Transactions from "./Topics/02Tutorial/Transactions";
import SingleTransaction from "./Topics/02Tutorial/SingleTransaction";
import PostedTransaction from "./Topics/02Tutorial/PostedTransaction";
import ReplenishPlan from "./Topics/02Tutorial/ReplenishPlan";
import ProductionPlan from "./Topics/02Tutorial/ProductionPlan";
import Settings from "./Topics/02Tutorial/Settings";


// TOC with sub-subtopics
const tocData = [
    {
        id: "get-started",
        title: "Get Started",
        component: GetStarted
    },
    {
        id: "tutorial",
        title: "Tutorial",
        subtopics: [
            { id: "ui-intro", title: "UI Intro", component: UIIntro },
            {
                id: "data-setup", title: "Data Setup",
                subtopics: [
                    { id: "data-setup-overview", title: "Overview", component: DataSetupOverview },
                    { id: "item", title: "Item", component: Item },
            ]},
        ]
    },
    {
        id: "transactions", title: "Transactions",
        subtopics: [
            { id: "txn-overview", title: "Overview", component: Transactions },
            { id: "txn", title: "Transaction", component: SingleTransaction },
            { id: "posted-txn", title: "Posted Transactions", component: PostedTransaction },
        ]
    },
    {
        id: "master-planning",
        title: "Master Planning",
        subtopics: [
            { id: "replenish", title: "Replenish Plan", component: ReplenishPlan },
            { id: "production-plan", title: "Production Plan", component: ProductionPlan }
        ]
    },
    { id: "setting", title: "Settings", component: Settings },
    {
        id: "others", title: "Others",
        subtopics: [
            { id: "item-selection", title: "Item Selection & Count", component: ItemSelection },
        ]
    }
];

// === Helpers ===
function findPath(items, targetId, path = []) {
    for (const item of items) {
        if (item.id === targetId) return [...path, item.id];
        if (item.subtopics) {
            const subPath = findPath(item.subtopics, targetId, [...path, item.id]);
            if (subPath.length) return subPath;
        }
    }
    return [];
}

function getItemById(items, targetId) {
    for (const item of items) {
        if (item.id === targetId) return item;
        if (item.subtopics) {
            const found = getItemById(item.subtopics, targetId);
            if (found) return found;
        }
    }
    return null;
}

// === Recursive TOC Renderer ===
function TocItem({ item, openTopics, activeId, handleClick, renderSubtopics }) {
    const isOpen = openTopics[item.id];
    const isActive = activeId === item.id;

    return (
        <li>
            <div
                className={`topic ${isActive ? "active" : ""}`}
                onClick={() => handleClick(item)}
            >
                <span>{item.title}</span>
                {item.subtopics && (
                    <span className="arrow">{isOpen ? "▼" : "▶"}</span>
                )}
            </div>
            {item.subtopics && isOpen && (
                <ul>{item.subtopics.map((sub) => renderSubtopics(sub))}</ul>
            )}
        </li>
    );
}

// === Main Tutorial Page ===
export default function TutorialPage() {

    // Expand all topics & subtopics by default
    const buildExpandedState = () => {
        const state = {};
        tocData.forEach((topic) => {
            state[topic.id] = true; // expand each top-level topic
            if (topic.subtopics) {
                topic.subtopics.forEach((sub) => {
                    state[sub.id] = true; // expand each subtopic too
                });
            }
        });
        return state;
    };

    const contentRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const lastHash = useRef('');

    const [openTopics, setOpenTopics] = useState(buildExpandedState);
    const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
    const [isTocCollapsed, setIsTocCollapsed] = useState(false);
    const [activeContent, setActiveContent] = useState(null);
    const [activeId, setActiveId] = useState(null);

    // ✅ NEW: reactively track mobile viewport

    // change this value to set what is mobile view's width. Also change the css file under @media
    const mobileWidth = 900; 

    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth <= mobileWidth : false
    );

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= mobileWidth;
            // ✅ FIX: only reset state when the view mode actually changes
            setIsMobile((prevMobile) => {
                if (prevMobile !== mobile) {
                    if (mobile) {
                        setIsMobileTocOpen(false); // entering mobile: drawer closed
                    } else {
                        setIsTocCollapsed(false);  // entering desktop: TOC expanded
                    }
                }
                return mobile;
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Load from URL or fallback to default
    useEffect(() => {
        document.title = "DianHuo - Tutorial"

        const params = new URLSearchParams(location.search);
        let topicId = params.get("topic");

        if (!topicId) {
            topicId = "get-started"; // ✅ default topic
            navigate(`?topic=${topicId}`, { replace: true });
            return;
        }

        const path = findPath(tocData, topicId);
        if (path.length) {
            setOpenTopics((prev) => {
                const updated = { ...prev };
                path.forEach((pid) => (updated[pid] = true));
                return updated;
            });

            const targetItem = getItemById(tocData, topicId);
            if (targetItem?.component) {
                setActiveContent(() => targetItem.component);
                setActiveId(topicId);
            }
        }
    }, [location.search, navigate]);


    // Handle TOC clicks
    const handleClick = (item) => {
        if (item.subtopics) {
            setOpenTopics((prev) => ({ ...prev, [item.id]: !prev[item.id] }));
        } else {
            navigate(`?topic=${item.id}`); // ✅ update URL
            setIsMobileTocOpen(false);     // close sidebar on mobile
        }
    };

    const renderToc = (item) => (
        <TocItem
            key={item.id}
            item={item}
            openTopics={openTopics}
            activeId={activeId}
            handleClick={handleClick}
            renderSubtopics={renderToc}
        />
    );

    const Content = activeContent || (() => <div>Select a topic</div>);

    // ✅ NEW: derive whether the TOC is currently visible, depending on view
    const isTocVisible = isMobile ? isMobileTocOpen : !isTocCollapsed;

    return (
        <>
            <div className="tutorial-page">
                {/* ✅ UPDATED: icon reflects the correct state per view */}
                <button
                    className={`toc-toggle-btn ${!isTocVisible ? "collapsed" : ""}`}
                    onClick={() => {
                        if (isMobile) {
                            setIsMobileTocOpen((prev) => !prev);
                        } else {
                            setIsTocCollapsed((prev) => !prev);
                        }
                    }}
                    aria-label="Toggle table of contents"
                >
                    {isTocVisible ? "✕" : "☰"}
                </button>

                {/* Sidebar TOC */}
                <aside
                    className={`toc ${isMobileTocOpen ? "open" : ""} ${isTocCollapsed ? "collapsed" : ""}`}
                >
                    {/* ✅ inner wrapper handles sticky + scroll; outer panel stretches to footer */}
                    <div className="toc-inner">
                        <h2><strong>Table of Contents</strong></h2>
                        <ul>{tocData.map(renderToc)}</ul>
                    </div>
                </aside>

                {/* Content Area */}
                <main className="content" ref={contentRef}>
                    <Content />
                </main>
            </div>
        </>
    );
}