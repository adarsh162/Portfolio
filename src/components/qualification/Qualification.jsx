import React from 'react';
import { useState } from 'react';
import './qualification.css';

const Qualification = () => {
    const [toggleState,setToggleState]=useState(1);
    const toggleTab = (index)=>{
        setToggleState(index);
        console.log(toggleState);
    }
  return (
    <section className="qualification section"  id='qualification'>
         <h2 className="section__title">
            Education
        </h2>
        <span className="section__subtitle">My Qualification </span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState===1 ? "qualification__button qualification__active button--felx" : "qualification__button button--felx"} onClick={()=>toggleTab(1)}>
                    <i className="uil uil-graduation-cap  qualification__icon"></i>
                    Education
                </div>

                <div className={toggleState===2 ? "qualification__button qualification__active button--felx" : "qualification__button button--felx"} onClick={()=>toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>

                
            </div>
            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.Tech</h3>
                            <span className="qualification__subtitle">Dharmsinh Desai University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2020-2024
                            </div>

                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>

                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Senior Secondary (XII), Science</h3>
                            <span className="qualification__subtitle">Utkarsh Vidhyalaya • Vadodara, Gujarat</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2020
                            </div>

                        </div>
                        
                    </div>


                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Secondary (X)</h3>
                            <span className="qualification__subtitle">Utkarsh Vidhyalaya • Vadodara, Gujarat</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2018
                                2024-Completion Year
                            </div>

                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    
                </div>


                <div className={toggleState===2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Twowaits Technologies </h3>
                            <span className="qualification__subtitle">DSA Scholar Intern</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>June-2022 to July-2022
                            </div>
                            <a href='https://drive.google.com/file/d/1G3sd_uVscQY5AAVzNb01d_Yxc6XcVlxz/view' target='blank'>Certificate</a>

                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    

                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
