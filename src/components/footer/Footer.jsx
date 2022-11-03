import React from 'react'
import "./footer.css"

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">Alther</h1>
                
                <ul className="footer__list">
                    <li>
                        <a className="footer__link" href="#about">About</a>
                    </li>

                    <li>
                        <a className="footer__link" href="#portfolio">Projects</a>
                    </li>
                </ul>

            <span className="footer__copy">&#169; Crypticalcoder. All rights reserved</span>
            </div>
            
        </footer>
    )
}
