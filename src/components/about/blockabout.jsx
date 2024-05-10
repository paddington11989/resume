import React from "react";


export default function Blockabout({title, subtitle, text,date}){
    return(
        <>
        <div className="about-item">
            <h4 className="about-item-title">{title}</h4>
            <p className="about-subtitle">{subtitle}</p>
            <p className="about-text">{text}</p>
            <p className="about-date">{date}</p>
        </div>
        </>
    )
}