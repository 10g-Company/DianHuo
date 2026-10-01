import React from 'react';

import './DownloadBadge.css';

import { GOOGLE_PLAY_LINK } from '../../constants'

import GoogleBadge from '../../assets/images/badge-google-play.png';

export default function DownloadBadge() {
    return (
        <>
            <div className="download-badge">
                <figure>
                    <a href={GOOGLE_PLAY_LINK} target="_blank">
                        <img src={GoogleBadge} />
                    </a>
                </figure>

            </div>
        </>
    );
}