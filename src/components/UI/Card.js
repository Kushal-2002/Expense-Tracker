import './Card.css';
import React from 'react';

function Card(props){
    const classes='card ' + props.className;// Add a property with classname automatically to the div
    return <div className={classes}>{props.children}</div>
}
export default Card;