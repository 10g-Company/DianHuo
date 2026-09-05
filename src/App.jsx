import { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './behaviors/ScrollToTop';

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
            </Routes>

            <Footer />
        </>
    )
}

export default App
