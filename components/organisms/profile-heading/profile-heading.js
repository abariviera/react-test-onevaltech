import React from "react";
import HeartCounter from "../../atoms/heart/heart-counter";
import Link from 'next/link'

const ProfileHeading = (props) => {
    return (
        <section className="profile-heading">
            <style id="style-49108baf-ee61-4470-bb6b-e602a7efecd5"></style>
            <img className="img img--round" src={props.image} alt={props.alt}/>
            <h2 className="featured-profile__user">{props.user}</h2>
            <HeartCounter counter={props.counter} heartColor="#2F1160"/>
            <ul className="featured-profile__tags">
                {props.tags.map((item, index)=> {
                    return <li className="featured-profile__item" key={index}>{item}</li>
                })}
            </ul>            
        </section>
    )
}

export default ProfileHeading;