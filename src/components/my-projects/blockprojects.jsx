import React from "react";

export default function Blockprojects({project__img,project__text,project__btn}){
    return(
        <>
        <div className="project-item">
           <a href=""><img src={project__img} alt="" /></a>
           <p className="project__text">{project__text}</p>
           <button className="project-btn">{project__btn}</button>
        </div>
        </>
    )
}