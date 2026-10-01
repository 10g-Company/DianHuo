import React from 'react';
import './TextImageLayout.css';

const TextImageLayout = ({
    topText,
    bottomText,
    mediaSrc,
    mediaType = 'image', // 'image' | 'video'
    mediaAlt = '',
    videoProps = { autoPlay: true, loop: true, controls: false }, // e.g. { autoPlay: true, loop: true, muted: true, controls: false }
    mediaClassName = '',
    ...rest
}) => {

    const mediaClass = `two-col-layout__media pageScreenShot ${mediaClassName}`.trim();

    const renderMedia = () => {
        if (mediaType === 'video') {
            return (
                <video
                    className={mediaClass}
                    src={mediaSrc}
                    aria-label={mediaAlt}
                    playsInline
                    muted
                    {...videoProps}
                />
            );
        }

        return (
            <img
                className={mediaClass}
                src={mediaSrc}
                alt={mediaAlt}
            />
        );
    };

    return (
        <div className="two-col-layout">
            <div className="two-col-layout__text-column">
                <div className="two-col-layout__top-text">{topText}</div>
                <div className="two-col-layout__bottom-text">{bottomText}</div>
            </div>
            <div className="two-col-layout__media-column">
                {renderMedia()}
            </div>
        </div>
    );
};

export default TextImageLayout;