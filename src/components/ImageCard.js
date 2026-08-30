import React from 'react';

function ImageCard({ imageUrl, title, description }) {
    return (
        <article className="image-card">
            <img src={imageUrl} alt={title} className="image-card__image" />
            <div className="image-card__content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </article>
    );
}

export default ImageCard;
