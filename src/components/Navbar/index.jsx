import React from "react";
import { Container } from "../Container";
import "./styles.css";

import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar_container">
            <Container>
                <nav className="navbar">
                    <span>
                        <Link to="/">Logo</Link>
                    </span>
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/about">Sobre mi</Link>
                        </li>
                        <li>
                            <Link to="/works">Trabajos</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contactame</Link>
                        </li>
                    </ul>
                </nav>
            </Container>
        </div>
    );
};
