import React from "react";
import "./footer.css";
import telegram_footer_icon from "../image/telegram-footer.svg";

export default function Footer(){
    return(
        <>
         <section className="footer">
            <div className="container">
                <h2 className="title-text-footer"><span className="promo-title-text">обсудим</span><span className="footer-title">project?</span></h2>
                <div className="footer__link">
                    <a href="#" className="footer-social-link"><img src={telegram_footer_icon} alt="" /></a>
                    <a className="footer-name-link">altynbekovz</a>
                    </div>
           
                <div className="footer-social">
                    <div className="footer-social-item"><a href="#" className="footer-social-item-link">Telegram</a></div>
                    <div className="footer-social-item"><a href="#" className="footer-social-item-link">WhatsApp</a></div>
                    <div className="footer-social-item"><a href="#" className="footer-social-item-link">Instagram</a></div>
                    <div className="footer-social-item"><a href="#" className="footer-social-item-link">TikTok</a></div>
                </div>
            </div>
         </section>
        </>
    )
}