import React, { useState } from 'react';
import "./header.css";

const Header = () => {
    window.addEventListener("scroll",function(){
        const header = document.querySelector(".header");
        if(this.scrollY >= 80){
            header.classList.add("scroll-header");
        }
        else{
            header.classList.remove("scroll-header");
        }
});
    const [Toggle,showMenu]=useState(false);
    const [activeNav,setactiveNav]=useState("home");
  return (
     <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Adarsh</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" onClick={()=>setactiveNav("#home")} className={activeNav==="#home" ? "nav__link active-link" :"nav__link" }>
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                        <a href="#about" onClick={()=>setactiveNav("#about")} className={activeNav==="#about" ? "nav__link active-link" :"nav__link" }>
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                        <a href="#skills" onClick={()=>setactiveNav("#skills")} className={activeNav==="#skills" ? "nav__link active-link" :"nav__link" }>
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                        <a href="#services" onClick={()=>setactiveNav("#services")} className={activeNav==="#services" ? "nav__link active-link" :"nav__link" }>
                                <i className="uil uil-briefcase-alt nav__icon"></i>Achievements
                            </a>
                        </li>
                        <li className="nav__item">
                        <a href="#qualification" onClick={()=>setactiveNav("#qualification")} className={activeNav==="#qualification" ? "nav__link active-link" :"nav__link" }>
                                <i className="uil uil-scenery nav__icon"></i>
                                Education
                            </a>
                        </li>
                        <li className="nav__item">
                        <a href="#work" onClick={()=>setactiveNav("#work")} className={activeNav==="#work" ? "nav__link active-link" :"nav__link" }>
                                <i className="uil uil-message nav__icon"></i>Projects
                            </a>
                        </li>
                        <li className="nav__item">
                        <a href="#contact" onClick={()=>setactiveNav("#contact")} className={activeNav==="#contact" ? "nav__link active-link" :"nav__link" }>
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>

                    </ul>

                    <i className="uil uil-times nav__close" onClick={()=>showMenu(false)}></i>

                </div>
                <div className="nav__toggle" onClick={()=>showMenu(true)}>
                    <i className="uil uil-apps"></i>
                </div>
        </nav>
     </header>
  )
}

export default Header
