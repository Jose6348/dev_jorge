import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer__container container grid">
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/jos%C3%A9-jorge-falasco-520505207/" className="footer__social-link" target="_blank">
                    <FaLinkedin />
                </a>

                <a href="https://github.com/Jose6348" className="footer__social-link" target="_blank">
                    <FaGithub />
                </a>

                <a href="https://www.instagram.com/jose.jorge019/" className="footer__social-link" target="_blank">
                    <FaInstagram />
                </a>
            </div>

            <p className="footer__copyright text-cs">
                &copy; 2025 <span>Jorge</span>. Todos os direitos Reservados
            </p>

            <p className="footer__copyright text-cs">
                Desenvolvido por <span>José Jorge</span>
            </p>
        </div>
    </footer>
    );
};

export default Footer;