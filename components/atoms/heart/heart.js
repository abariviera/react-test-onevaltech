import React from "react";

const Heart = ({heartColor}) => {
    return (
        <svg className="heart-icon" width="27" height="24" viewBox="0 0 74 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M55.5 0L37 12.3636L18.5 0L0 15.4545V37.0909L37 68L74 37.0909V15.4545L55.5 0Z" fill={heartColor}/>
        </svg>
    );
}

export default Heart;