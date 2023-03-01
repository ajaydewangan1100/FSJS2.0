import footerlogo from "../assets_PW/PWSkills-white.png";
import isocertified from "../assets_PW/iso-9001-2015.svg"

import "./footer.css";

function Footer () {
    return (
        <div className="footer">
            <div className="f-div1">
                <img src={footerlogo} className="footer-logo" alt="Footer-logo"></img>
                <div className="ftr-email-sec">
                    <i className="fa-regular fa-envelope"></i>
                    <div><h4 className="foot-email">Email us:</h4><span>support@pwskills.com</span></div>
                </div>
                <div className="social-icon-footer">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-square-instagram"></i>
                    <i className="fa-brands fa-telegram"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-square-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-discord"></i>
                </div>
                <div className="certified-div-ft">
                    <img src={isocertified} className="certified-footer"></img>
                    <p>ISO 9001</p>
                </div>
            </div>

            <div className="f-div2">
                <h2>PW Skills</h2>
                <p className="line-yellow"></p>
                <table>
                    <tbody>
                        <tr>
                            <td>About us</td>
                            <td>Contact us</td>
                        </tr>
                        <tr>
                            <td>FAQs</td>
                            <td>Job asistance</td>
                        </tr>
                        <tr>
                            <td>Privacy policy</td>
                            <td>Terms and conditions</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="f-div3">
                <h2>Products</h2>
                <p className="line-yellow"></p>
                <ul className="products-ul">
                    <li>PW Skills Lab</li>
                    <li>Job Portal</li>
                    <li>Experience portal</li>
                    <li>Become an affiliate</li>
                    <li>Hall of fame</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;