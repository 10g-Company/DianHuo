import { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './behaviors/ScrollToTop';

import HomePage from './pages/HomePage/HomePage';
import TutorialPage from './pages/TutorialPage/TutorialPage';
import AboutUsPage from './pages/AboutUs/AboutUs';
import PrivacyPage from './pages/Privacy/Privacy';
import TncPage from './pages/TnC/TnC';

function App() {
    useEffect(() => {
        document.title = "DianHuo";
    }, []); // Empty dependency array = runs once on mount

    return (
        <>
            <link rel="icon" href="images/logo.png" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />

            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tutorial" element={<TutorialPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/tnc" element={<TncPage />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
