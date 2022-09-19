import React from "react";
import Heart from "../../atoms/heart/heart";
import Image from "next/image";

const FeaturedProfile = (props) => {
    return (
        <section className="featured-profile">
            <h1 className="featured-profile__heading">{props.title}</h1>
            <img src={props.image} alt={props.alt}/>
            <div className="featured-profile__info">
                <h2 className="featured-profile__user">{props.user}</h2>
                <div className="featured-profile__praiseArea">
                    <p className="featured-profile__praiseCounter">{props.praiseCounter}</p>
                    <Heart heartColor="#2F1160" />
                </div>

                <p className="featured-profile__comment">{props.comment}</p>
                <p className="featured-profile__commentAuthor">{props.commentAuthor}</p>
            </div>
        </section>
    )
}

export default FeaturedProfile;