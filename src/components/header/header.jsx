import React from "react";
import "./header.css";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import telegram_icon from "../image/telegram.svg";
import promo_img from "../image/promo-img.svg";
import Slider from "react-slick";


export default function Header(){

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    const setting = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        rtl:true,
      };


    return(
        <>
         <section className="top-screen">
            <div className="top-screen-line"></div>
            <div className="container">
                <header className="header">
                <div className="header__logo">
                    <a href="#" className="logo-link">altynbekovz</a>
                </div>
                <ul className="header__nav-list">
                        <li className="header__nav-item"><a href="#" className="nav-item-link">Обо мне</a></li>
                        <li className="header__nav-item"><a href="#" className="nav-item-link">Скиллы</a></li>
                        <li className="header__nav-item"><a href="#" className="nav-item-link">Проекты</a></li>
                    </ul>
                    <ul className="header__nav-social">
                        <li className="header__nav-social-item"><a href="#" className="social-link"><AiFillInstagram fontSize={"20px"} color="white"/></a></li>
                        <li className="header__nav-social-item"><a href="#" className="social-link"><IoLogoWhatsapp fontSize={"20px"} color="white"/></a></li>
                        <li className="header__nav-social-item"><a href="#" className="social-link"><img src={telegram_icon} alt="" /></a></li>
                    </ul>
                </header>
              <div className="promo">
                <div className="promo-text">
                    <h2 className="promo-title"><span>Front</span>-end</h2>
                    <h2 className="promo-title-text">разработчик</h2>
                    <p className="promo-describtion">Я - Front-End разработчик с годом опыта работы, 
специализирующийся на создании качественных и удобных 
сайтов и мобильных приложений.</p>
                    <button className="promo-btn">Обсудить проект</button>
                </div>
                <div className="promo-img"><img src={promo_img} alt="" /></div>
              </div>
              
             

<div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3 className="slider-text">мобильные приложения</h3>
        </div>
        <div>
          <h3 className="slider-text">сайты</h3>
        </div>
        <div>
          <h3 className="slider-text">лендинги</h3>
        </div>
        <div>
          <h3 className="slider-text">верстка</h3>
        </div>
        <div>
          <h3 className="slider-text">многостраничные сайты</h3>
        </div>
        <div>
          <h3 className="slider-text">адаптивные сайты</h3>
        </div>
      </Slider>
</div>
<div className="slider-container-2">
      <Slider {...setting}>
        <div>
          <h3 className="slider-text-2">мобильные приложения</h3>
        </div>
        <div>
          <h3 className="slider-text-2">сайты</h3>
        </div>
        <div>
          <h3 className="slider-text-2">лендинги</h3>
        </div>
        <div>
          <h3 className="slider-text-2">верстка</h3>
        </div>
        <div>
          <h3 className="slider-text-2">многостраничные сайты</h3>
        </div>
        <div>
          <h3 className="slider-text-2">адаптивные сайты</h3>
        </div>
      </Slider>
</div>







            </div>
         </section>
        </>
    )
}