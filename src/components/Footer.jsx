import { FaLinkedin, FaGithub } from 'react-icons/fa';


export default function Navbar() {
    return (
        <footer className="footer">
       <div className="footer-content">
        <p>© 2024 - Marc Martín | All Rights Reserved</p>
        <div className="social-links">
          <a 
            href="https://www.linkedin.com/in/marc-mart%C3%ADn-salido-60723a265/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={30} color="white" />
          </a>
          <a 
            href="https://github.com/marcmartinsaido" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={30} color="white" />
          </a>
        </div>
      </div>
    </footer>
    )
}