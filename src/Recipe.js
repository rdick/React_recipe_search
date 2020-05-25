import React from 'react';

const Recipe = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>Calories: {props.calories.toFixed(0)}</p>
            <img src={props.image} alt=""></img>
        </div>
    )
}

export default Recipe