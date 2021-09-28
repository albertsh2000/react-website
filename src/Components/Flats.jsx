import React from "react";
import "../Styles/flats.css";
import room1 from "../Images/room1.png";
import room2 from "../Images/room2.png";
import room3 from "../Images/room3.png";
import room4 from "../Images/room4.png";

const flatItems = [
    {
        flatImg: room1,
        title: "Лофт — 3 этажа",
        id:1
    },
    {
        flatImg: room2,
        title: "Лофт — 2 этажа",
        id:2
    },
    {
        flatImg: room3,
        title: "Лофт — 3 этажа",
        id:3
    },
    {
        flatImg: room4,
        title: "Лофт — 2 этажа",
        id:4
    },
];

function Flats() {
    return (
        <div className="flats-container" id='catalog'>
            <h2 className="flats-title">Наши квартиры</h2>
            <div className="flats-block">
                {flatItems.map((item) => {
                    return (
                        <div key={item.id} className="flats">
                            <img src={item.flatImg} alt="flat" />
                            <p>{item.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Flats;
