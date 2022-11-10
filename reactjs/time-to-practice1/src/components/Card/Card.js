import React from 'react';
import estilo from './Card.module.css';

const Card = (props) => {
    return (
        <div className={estilo.card}>
            {props.children}
        </div>
    )
}

export default Card;