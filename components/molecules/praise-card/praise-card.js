import React from "react";
import Image from "next/image";
import Heart from '../../atoms/heart/heart';

const PraiseCard = (props) => {
    console.log(props)
    return (
        <div className="praise-card">
            <p className="comment">{props.comment}</p>
            <div className="praise-card__info">
                <Image src={props.image} alt={props.alt} height={'100%'} width={'100%'} className="img img--round"/>
                <div className="person">
                    <p>{props.name}</p>
                    <p>{props.date}</p>
                </div>
            </div>
            <Heart heartColor="#2F1160"/>
        </div>
    )
}

export default PraiseCard;