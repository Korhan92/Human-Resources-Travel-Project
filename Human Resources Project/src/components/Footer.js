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
                        <Link to='/'><FaInstagram/></Link>
                        <Link to='/'><FaFacebook/></Link>
                        <Link to='/'><FaYoutube/></Link>
                        <Link to='/'><FaTwitter/></Link>
                        <Link to='/'><FaTiktok/></Link>
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
                    <small class='website-rights'>TripAdvisor © 2022</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                        <Link
                            class='social-icon-link tiktok'
                            to='/'
                            target='_blank'
                            aria-label='tiktok'
                        >
                            <i class='fab fa-tiktok' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
