import React from 'react';
import './Footer.css';
import linkedinLogo from './linkedin.png';
import githubLogo from './github.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contenido-footer">
        <p>Contactactos:</p>
        <a href="https://www.linkedin.com/in/abel-cipriano-13a0b9214/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" className="logo" />
        </a>
        <a href="https://github.com/Abelcip" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;