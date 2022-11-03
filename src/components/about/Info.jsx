import React from "react";

export default function Info(){
    return(
        <div class="about__info grid">
            <div className="about__box">
                {/*Box icon*/}
                <i class="bx bx-award about__icon"></i>
                <h3 className="about__title">Experiência</h3>
                <span className="about__subtitle">Em busca do primeiro trabalho </span>
            </div>

            <div className="about__box">
                {/*Box icon*/}
                <i class="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Concluído</h3>
                <span className="about__subtitle">3 pequenos projetos</span>
            </div>

            <div className="about__box">
                {/*Box icon*/}
                <i class="bx bx-support about__icon"></i>
                <h3 className="about__title">Suport</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>
    )
}
