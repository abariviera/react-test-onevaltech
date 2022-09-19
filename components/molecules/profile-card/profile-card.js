import React from "react";
import Heart from '../../atoms/heart/heart';

const ProfileCard = (props) => {
    return (
        <div className="profile-card">
            <img src={props.image} alt={props.alt} width="100%" height="100%" className="img profile-card__image"/>
            <div className="profile-card__info">
                <p>{props.name}</p>
                <div className="profile-card__info__likes">
                    <span>{props.likeCount}</span>
                    <Heart heartColor="#2F1160"/>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;