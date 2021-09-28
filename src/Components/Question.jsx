import React from "react";
import "../Styles/question.css";

function Question() {
    return (      
        <div className="question-container" id='hipotek'>
            <h2 className="question-title">Есть вопросы?</h2>
            <div className="question-block">
                <p className="question-text">
                    *Мы никому не передаем ваши данные И не сохраняем ваш номер
                    в базу.
                </p>
                <button className="grey-btn">Ваше имя </button>
                <button className="grey-btn">Ваш телефон</button>
                <button className="see-region">Посмотреть район</button>
            </div>
        </div>
    );
}

export default Question;
