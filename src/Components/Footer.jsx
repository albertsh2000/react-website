import React from "react";
import FooterList from "./FooterList";
import "../Styles/footer.css";

function Footer() {
    return (
        <div className="footer" id="contacts">
            <div className="footer-container">
                <div className="footer-logo">
                    <p className="footer-logo-title">HouseVOP</p>
                    <p className="logo-footer-subtitle">ЖИЛОЙ КОМПЛЕКС</p>
                </div>
                <FooterList />
                <FooterList />
                <FooterList />
                <ul className='list'>
                    <li><a  href="\">Адрес: Наб. реки Фонтанки 10-15</a></li>
                    <li><a href="\">Телефон: 8 (812) 123-45-67</a></li>
                    <li><a href="\">Отдел продаж: 10:00 - 20:00</a></li>
                    <li><a href="\">E-mail: vip@housevip.ru</a></li>
                    <li><a href="\">Контакты</a></li>
               </ul>
            </div>
        </div>
    );
}

export default Footer;
