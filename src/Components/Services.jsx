import React from "react";
import "../Styles/services.css";
import item1 from "../Images/item1.png";
import item2 from "../Images/item2.svg";
import item3 from "../Images/item3.svg";
import item4 from "../Images/item4.svg";

const servicesItems = [
    {
        icon: item1,
        text: "Рядом исторические парки и скверы",
        id: 1,
    },
    {
        icon: item2,
        text: "Полностью  обустроенный",
        id: 2,
    },
    {
        icon: item3,
        text: "10 фонтанов  на территории",
        id: 3,
    },
    {
        icon: item4,
        text: "Рядом исторические парки и скверы6 км велодорожек",
        id: 4,
    },
];

function Services() {
    return (
        <div className="services" id="services">
            {servicesItems.map((item) => {
                return (
                    <div key={item.id} className="item">
                        <img src={item.icon} alt="img" />
                        <p className="text">{item.text}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Services;
