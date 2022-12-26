import React from 'react';
import './Feature.css';

function Feature({title, text}) {
    return (
        <div className='feature-container'>
            <div className="feature-title">
                <div />
                <h1>{title}</h1>
            </div>
            <div className="feature-text">
                {text}
            </div>
        </div>
    )
}

export default Feature;