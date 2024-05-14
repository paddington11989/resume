import React, { useEffect } from "react";
import "./header.css";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import telegram_icon from "../image/telegram.svg";
import promo_img from "../image/promo-img.svg";
import Slider from "react-slick";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Header(){
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const [isOpen, setIsOpen] = useState(false);
    const [isNavlist, setIsnavlist] = useState(false);
    const toggleMenu = () => {
        setIsOpen((open) => !open);
        setIsnavlist((open)=>!open)
    }

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        variableWidth: true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow:2.2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow:1.5,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 460,
            settings: {
              slidesToShow:1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
        ]
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
        variableWidth: true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow:2.2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow:1.5,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 460,
            settings: {
              slidesToShow:1,
              slidesToScroll: 1,
              infinite: true,
            }
          },

        ]
      };


    return(
        <>
         <section className="top-screen">
            <div className="top-screen-line"></div>
            <div className="container">
                <header  data-aos="fade-down" className={`header ${isOpen ? 'isopen' : ''}`}>
                <div className="header__logo">
                    <a href="#" className="logo-link">altynbekovz</a>
                </div>
                <div className="nav-toggle" onClick={toggleMenu}>
                                {isOpen ? <IoMdClose  size={"50px"} color="#0066ff"/> : (
                                    <>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </>
                                )}
                            </div>
                   <ul className={`header__nav-list ${isNavlist ? 'nav__list-open' : ''}`}>
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
                <div data-aos="fade-right" className="promo-text">
                    <h2 className="promo-title"><span>Front</span>-end</h2>
                    <h2 className="promo-title-text">разработчик</h2>
                    <p className="promo-describtion">Я - Front-End разработчик с годом опыта работы, 
специализирующийся на создании качественных и удобных 
сайтов и мобильных приложений.</p>
                    <button className="promo-btn">Обсудить проект</button>
                </div>
                <div data-aos="fade-left" data-aos-delay="300" className="promo-img"><img src={promo_img} alt="" /></div>
              </div>
              
             

<div data-aos="fade-up" className="slider-container">
      <Slider {...settings}>
        <div>
          <h3 className="slider-text">мобильные приложения</h3>
        </div>
        <div>
          <h3 className="slider-text web-text">сайты</h3>
        </div>
        <div>
          <h3 className="slider-text lending-text">лендинги</h3>
        </div>
        <div>
          <h3 className="slider-text verstka-text">верстка</h3>
        </div>
        <div>
          <h3 className="slider-text">многостраничные сайты</h3>
        </div>
        <div>
          <h3 className="slider-text adaptive-text">адаптивные сайты</h3>
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