import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <p>Questions? Call 900123456</p>
            <div className='footer-cols'>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Ways to Watch</a></li>
                    <li><a href="#">Corporate Information</a></li>
                    <li><a href="#">Netflix Originals</a></li>
                </ul>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#"> Jobs </a></li>
                    <li><a href="#"> terms of Use</a></li>
                    <li><a href="#">Contact Us</a></li>

                </ul>
                <ul>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Redeem Gift Cards</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Speed Test</a></li>

                </ul>
                <ul>
                    <li><a href="#">Media Center</a></li>
                    <li><a href="#">Buy Gift Card</a></li>
                    <li><a href="#">Cookie Preferences</a></li>
                    <li><a href="#">Legal Notices</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;