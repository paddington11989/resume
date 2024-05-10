import React from "react";
import "./projects.css";
import Blockprojects from "./blockprojects";
import project_1 from "../image/project-1.svg";
import project_2 from "../image/project-2.svg";
import project_3 from "../image/project-3.svg";
import project_4 from "../image/project-4.svg";


export default function Projects(){
    return(
        <>
          <section className="project">
            <div className="container">
                <h2 className="about-title">мои <span>projects</span></h2>
                <div className="project__wrapper">
                    <Blockprojects project__img={project_1} project__text="Сайт Xbt.kg для обмена и продажи криптовалюты" project__btn="Посмотреть сайт"/>
                    <Blockprojects project__img={project_2} project__text="Мобильное приложение  Kelechek Taxi 
для заказа такси" project__btn="Посмотреть приложение"/>
                    <Blockprojects project__img={project_3} project__text="Одностаричный сайт для мобильного приложения по заказу такси" project__btn="Посмотреть сайт"/>
                    <Blockprojects project__img={project_4} project__text="Мобильное приложение для управление графиком и продуктивностью персонала" project__btn="Посмотреть приложение"/>
                </div>
            </div>
          </section>
        </>
    )
}