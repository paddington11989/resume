import React from "react";
import "./about.css";
import Blockabout from "./blockabout";
import img_1 from "../image/js.svg";
import img_2 from "../image/react.svg";
import img_3 from "../image/Nextjs.svg";
import img_4 from "../image/api.svg";
import img_5 from "../image/css.svg";
import img_6 from "../image/github.svg";
import img_7 from "../image/html.svg";
import img_8 from "../image/img-8.svg";
import img_9 from "../image/img-9.svg";
import img_10 from "../image/img-10.svg";
import img_11 from "../image/img-11.svg";
import img_12 from "../image/img-12.svg";
import img_13 from "../image/img-13.svg";


export default function About(){
    return(
        <>
        <section className="about">
            <div className="container">
                <h2 className="about-title">обо <span>mne</span></h2>
                <div className="about__wrapper">
                    <Blockabout title='Образование' subtitle='КОМТЕХНО' text='Прикладная информатика' date='2021-2024 гг.'/>
                    <Blockabout title='Курсы' subtitle='IT-школа Navis academy' text='Front-End Разработчик' date='2022 г. феврал-май'/>
                    <Blockabout title='Опыт работы' subtitle='Компания Navidevs' text='Front-End Разработчик' date='2022 г. июль -2024 г. май'/>
                </div>

                 
                 <h2 className="about-title">работаю на <span>programms</span></h2>
                    
                    <div className="programms__wrapper">
                        <div className="wrapper-block-1">
                        <img src={img_1} alt="" />
                        <img src={img_2} alt="" />
                        <img src={img_7} alt="" />
                        <img src={img_5} alt="" />
                        <img src={img_3} alt="" />
                        <img src={img_4} alt="" />
                        </div>
                        <div className="wrapper-block-2">
                            <div></div>
                            <img src={img_6} alt="" />
                            <img src={img_8} alt="" />
                            <img src={img_9} alt="" />
                            <img src={img_10} alt="" />
                            <img src={img_11} alt="" />
                            <div></div>
                            
                        </div>
                        <div className="wrapper-block-3">
                            <img src={img_12} alt="" />
                            <img src={img_13} alt="" />
                        </div>
                    </div>
            </div>
        </section>
        </>
    )
}