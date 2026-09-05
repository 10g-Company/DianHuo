import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

import { GOOGLE_PLAY_LINK } from '../../constants'

import SmartphoneFrame from '../../components/SmartphoneFrame/SmartphoneFrame';

function HomePage() {
    useEffect(() => {
        document.title = "DianHuo";
    }, []); // Empty dependency array = runs once on mount

    return (
        <>
            <p>Hello World !</p>
        </>
    )
}

export default HomePage
