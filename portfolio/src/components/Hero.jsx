import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="inicio" className="hero">
            <div className="page-container">
                <div className="hero-avatar" aria-hidden="true">
                    Foto
                </div>

                <div className="hero-content">
                    <div>
                        <h1 className="hero-title">João Mário Abreu</h1>
                        <p className="hero-role">Software Engineering Student</p>
                    </div>

                    <p className="hero-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci at est id inventore maxime modi natus rem soluta velit.
                    </p>

                    <div className="hero-links">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="GitHub"
                        >
                            <FaGithub size={18} />
                            <span>GitHub</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={18} />
                            <span>LinkedIn</span>
                        </a>

                        <a
                            href="mailto:email@email.com"
                            className="social-link"
                            aria-label="Enviar e-mail"
                        >
                            <Mail size={18} />
                            <span>Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}