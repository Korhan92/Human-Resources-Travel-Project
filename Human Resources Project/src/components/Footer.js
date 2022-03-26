import React from 'react'
import { FaInstagram,
    FaFacebook,
    FaYoutube, 
    FaTwitter,
    FaTiktok,
    FaTripadvisor
} from "react-icons/fa"
import './Footer.css';
import { Link } from 'react-router-dom';



function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                       
                    </div>
                    <div class='footer-link-items'>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <FaTripadvisor/>
                            <i class='fab fa-typo3' />
                        </Link>
                    </div>
                   
                    <div class='social-icons'>
                    <Link to='/'><FaInstagram/></Link>
                        <Link to='/'><FaFacebook/></Link>
                        <Link to='/'><FaYoutube/></Link>
                        <Link to='/'><FaTwitter/></Link>
                        <Link to='/'><FaTiktok/></Link>
                    </div>  
                     <small class='website-rights'>TripAdvisor © 2022</small>
                </div>
            </section>
        </div>
    );
}

export default Footer;
