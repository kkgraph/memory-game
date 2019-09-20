import React from 'react';
import './Card.css';

const Card = props => (
    <div className="card" id={props.id} onClick={props.handleImageClick}>
        <img className="card-img" src={props.image} alt="dog image" />
    </div>
);

export default Card;
