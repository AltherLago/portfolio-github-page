import React from "react";
import "./home.css"
import Social from "./Social"
import Data from "./Data";
import ScrollDown from "./ScrollDown";

export default function Home() {
    return(
        <section id="home" className="home section">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social/>
                    <div className="home__img"></div> 
                    <Data/>
                </div>
                <ScrollDown/>
            </div>
        </section>
    )
}

