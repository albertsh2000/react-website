import React, { useState } from "react";
import "../Styles/registration.css";
import Modal from "./Modal";

function Registration() {
    const [openModal,setOpenModal] = useState(false)

    return (
        <>
            <h2 className="registration-title">Хотите посмотреть?</h2>
            <div className="registration">
                <div className="left-side">
                    <p>
                        Lorem Ipsum - это текст-"рыба", часто используемый в
                        печати и вэб-дизайне. Lorem Ipsum является стандартной
                        "рыбой" для текстов на латинице с начала XVI века. В то
                        время некий безымянный печатник создал большую коллекцию
                        размеров и форм шрифтов, используя Lorem Ipsum для
                        распечатки образцов.
                    </p>
                </div>
                <div className="right-side">
                    <div className="top-btns">
                        <button
                            onClick={() => {
                                setOpenModal(true);
                            }}
                        >
                            Ваше имя
                        </button>
                        <button>Ваш телефон</button>
                        {openModal && <Modal closeModal ={setOpenModal} />}
                    </div>
                    <div className="bottom">
                        <p>
                            *Мы никому не передаем ваши данные. И не сохраняем
                            ваш номер в базу.
                        </p>
                        <button className="bottom-btn">Посмотреть район</button>
                    </div>
                </div>
            </div>
       </>
    );
}

export default Registration;
