import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Blockprojects({project__img,project__text,project__btn}){
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return(
        <>
        <div className="project-item">
           <a href=""><img data-aos="zoom-in" src={project__img} alt="" /></a>
           <p className="project__text">{project__text}</p>
           <button className="project-btn">{project__btn}</button>
        </div>
        </>
    )
}