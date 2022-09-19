import React from "react";
import PraiseCard from '../../molecules/praise-card/praise-card';

const PraiseGrid = ({praises}) => {
    return (
        <ul className="praise-grid">
            {praises.map((item, index) => {
                return <li className="praise-grid__item" key={index}>
                    <PraiseCard
                        comment={item.comment}
                        date={item.date}
                        name={item.name}
                        image={item.image}
                        alt={item.alt}
                    />
                </li>
            })}
        </ul>
    )
}

export default PraiseGrid;