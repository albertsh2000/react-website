import React from "react";
import "../Styles/banner.css";
import mouseImg from "../Images/mouse.svg";

function Banner() {
    return (
        <div className="banner" id="complex">
            <h2 className="banner-title">
                Жилой комплекс <br /> в историческом центре
            </h2>
            <img className="mouse-img" src={mouseImg} alt="mouse-Img" />
            <div className="banner-footer">
                <div className="addres-block">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Наб. реки Фонтанки 10-15</span>
                </div>
                <div className="addres-block">
                    <i className="fas fa-phone-alt"></i>
                    <span>8 (812) 123-45-67</span>
                </div>
            </div>
        </div>
    );
}

export default Banner;
