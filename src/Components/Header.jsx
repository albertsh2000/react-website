import React, { useState } from "react";
import "../Styles/header.css";
import Banner from "./Banner";
// import Slide from 'react-reveal/Slide';

const menuList = [
    {
        name: "О комплексе",
        scroll: "complex",
    },
    {
        name: "Район",
        scroll: "services",
    },
    {
        name: "Каталог квартир",
        scroll: "catalog",
    },
    {
        name: "Ипотека",
        scroll: "hipotek",
    },
    {
        name: "Контакты",
        scroll: "contacts",
    },
];
function Header() {
    const [showMenu, setShowMenu] = useState(false);
    let menu;
    if (showMenu) {
        menu = (
            // <Slide top duration={800}>
            <div className="tada animate__animated animate__slideInDown ">
                <span className="close-btn" onClick={() => setShowMenu(false)}>
                    X
                </span>
                <ul className="mobile-menu">
                    {menuList.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={`#${item.scroll}`}>{item.name}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            // </Slide>
        );
    }

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <p className="logo-title">HouseVOP</p>
                    <p className="logo-subtitle">ЖИЛОЙ КОМПЛЕКС</p>
                </div>
                <i
                    id="burger-Menu"
                    className="fas fa-bars"
                    onClick={() => setShowMenu(!showMenu)}
                ></i>
                {menu}
                <div className="menu">
                    {menuList.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={`#${item.scroll}`}>{item.name}</a>
                            </li>
                        );
                    })}
                </div>
            </div>
            <Banner />
        </header>
    );
}

export default Header;
