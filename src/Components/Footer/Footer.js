import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div class="row">
                <div class="col">
                    <h3>About Us</h3>
                    <br />
                    <p>The fundamental purpose of health care is to enhance quality of life by enhancing health.Health care must focus on creating social profit to fulfill its promise to society.</p>
                </div>
                <div class="col">
                    <h3>Office</h3>
                    <br />
                    <p>1204 Road</p>
                    <p>Kapasia, Gazipur</p>
                    <p>1732, Dhaka, Bangladesh</p>
                    <p class="email-id">hasibur0163@gmail.com</p>
                    <h4>+880 1631753881</h4>
                </div>
                <div class="col">
                    <h3>Links</h3>
                    <br />
                    <ul>
                        <li><NavLink to="home">Home</NavLink></li>
                        <li><NavLink to="services">Services</NavLink></li>
                        <li><NavLink to="about">About Us</NavLink></li>
                        <li><NavLink to="contact">Contacts</NavLink></li>
                    </ul>
                </div>
                <div class="col">
                    <h3>Newsletter</h3>
                    <br />
                    <form>
                        <i class="far fa-envelope"></i>
                        <input type="email" placeholder="Enter Your email id" required/>
                        <button type ="submit"><i class ="fas fa-arrow-right"></i></button>
                    </form>
                    <div class="social-icons">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-whatsapp"></i>
                    </div>
                </div>
            </div>
            <hr/>
            <p class ="copyright">Kapasia Healthcare <i class ="far fa-copyright"></i> 2021 - All Rights Reserved</p>
        </footer>
    );
};

export default Footer;