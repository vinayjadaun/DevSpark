import React from 'react';
import './footer.scss';
function Footer(){
    return(
        <>
        <div className="footer">
            <div className="main-container">
                <div className="content1"><img src="./public/logobg.png"/></div>
                <div className="content2">"    Empowering Ideas , Building Excellence"<br/> "Elevating Software , Enriching Businesses"</div>
                <div className="content3">"Innovate, Create , Transform"</div>
                <div className="content4">
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-github"></i>
                </div>
                <div className="content5">DEVSPARKS-©2023  |  ALL RIGHT RESERVED</div>
            </div>
        </div>
        </>
    );
}
export default Footer;