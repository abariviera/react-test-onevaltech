import React from "react";
import ProfileCard from "../../molecules/profile-card/profile-card";

const ProfileGrid = ({profiles}) => {
    return (
        <div className="profile-grid">
            <ul className="profile-grid__wrapper">
                {profiles.map((item, index) => {
                    return <li className="profile-grid__item" key={index}>
                        <ProfileCard image={item.image}
                                     alt={item.alt}
                                     name={item.name}
                                     likeCount={item.likeCount}  />
                    </li>
                })}
            </ul>
        </div>
    ) 
}

export default ProfileGrid;