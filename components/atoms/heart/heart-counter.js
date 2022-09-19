import React from "react";
import Heart from './heart';

const HeartCounter = ({counter, heartColor}) => {
    return (
        <div className="heart-counter">
            <span>{counter}</span>
            <Heart heartColor={heartColor}></Heart>
        </div>
    )
}

export default HeartCounter;