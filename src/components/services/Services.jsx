import React, { useState } from 'react';
import './services.css';

const Services = () => {
    const [toggleState,setToggleState]=useState(0);
    const toggleTab = (index)=>{
        setToggleState(index);
        console.log(toggleState);
    }
  return (
    <section className="services section" id="services">
         <h2 className="section__title">
            Achievements
        </h2>
        <span className="section__subtitle">Work Samples </span>
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                    Java <br></br>(Basic)
                    </h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(1)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState ===1 ? "services__model active-model":"services__model"}>
                    <div className="services__model-content">
                        <i className="uil uil-times services__model-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__model-title">Java (Basic)</h3>
                        <p className="services__model-description">Cleared the assessment for Java on Hackerrank.
</p>
                        <ul className="services__model-services grid">
                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <a href='https://www.hackerrank.com/certificates/e01a94f30e28' target='blank'>
                                <p className="services__model-info">
                                  Certificate
                                </p>
                                </a>
                                
                            </li>                            
                        </ul>
                    </div>
                </div>
            </div>



            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">
                      Python <br/> (Basic)
                    </h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(2)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState ===2 ? "services__model active-model":"services__model"}>
                    <div className="services__model-content">
                        <i className="uil uil-times services__model-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__model-title">Python (Basic)</h3>
                        <p className="services__model-description">Cleared the assessment for Python on Hackerrank.
</p>
                        <ul className="services__model-services grid">
                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <a href='https://www.hackerrank.com/certificates/b1ffac7781f9' target='blank'>
                                <p className="services__model-info">
                                Certificate
                                </p>
                                </a>
                            </li>

                            
                        </ul>
                    </div>
                </div>
            </div>


            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Problem Solving <br/> (Basic)</h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(3)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState ===3 ? "services__model active-model":"services__model"}>
                    <div className="services__model-content">
                        <i className="uil uil-times services__model-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__model-title">Problem Solving</h3>
                        <p className="services__model-description">Cleared the assessment for Python on Hackerrank.
</p>
                        <ul className="services__model-services grid">
                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <a href='https://www.hackerrank.com/certificates/9d3dd4a25d38'>
                                <p className="services__model-info">
                                Certificate 
                                </p>
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
