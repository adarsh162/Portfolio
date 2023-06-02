import React from 'react'
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Adarsh</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#work" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Achievements</a>
                </li>
                <li>
                    <a href="https://auth.geeksforgeeks.org/user/adarsh161202/practice" target='blank' className="footer__link">Gfg</a>
                </li>
                <li>
                    <a href="https://leetcode.com/adarsh161202/" target='blank' className="footer__link">Leetcode</a>
                </li>
                <li>
                    <a href="https://www.hackerrank.com/adarsh161202?hr_r=1" target='blank' className="footer__link">Hacker Rank</a>
                </li>
                <li>
                    <a href="https://www.codechef.com/users/adarsh1612" target='blank' className="footer__link">Codechef</a>
                </li>
            </ul>

            <div className="footer__social">
          
        <a href="https://www.instagram.com/adarsh_s_162/" className="footer__social-link" target='_blank'>
        <i class="bx bxl-instagram"></i>
        </a>
        <a href="https://twitter.com/AdarshSuthar3" className="footer__social-link" target='_blank'>
        <i class="bx bxl-twitter"></i>
        </a>

        <a href="https://github.com/adarsh162" className="footer__social-link" target='_blank'>
        <i class='bx bxl-github'></i>
        </a>


        

            </div>
            <span className='footer__copy'>&#169; Adarsh. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer
