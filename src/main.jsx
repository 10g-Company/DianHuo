import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import { PopupProvider } from './behaviors/PopupContext';
import ScrollToAnchor from './behaviors/ScrollToAnchor';

// 1. Bootstrap FIRST
import 'bootstrap/dist/css/bootstrap.min.css';
// 2. Then your own CSS
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router basename="/DianHuo/">
            <ScrollToAnchor />
            <PopupProvider>
                <App />
            </PopupProvider>
        </Router>
    </StrictMode>
)
