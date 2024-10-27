import React, { useEffect, useState } from 'react';
import './Home.css';
import logo from '../images/Logo_AN_pg.png'; // Asegúrate de que la ruta sea correcta

import ImageBlock from './ImageBlock';
import 'font-awesome/css/font-awesome.min.css';

function Home() {
    const [navOpacity, setNavOpacity] = useState(1);
    const [navTransform, setNavTransform] = useState('translateY(0px)');
    const [menuOpen, setMenuOpen] = useState(false); // Estado para manejar la visibilidad del menú

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const newOpacity = Math.max(1 - scrollY / 150, 0);
        setNavOpacity(newOpacity);
        setNavTransform(scrollY > 50 ? 'translateY(-20px)' : 'translateY(0px)');
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Alternar estado del menú
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <>
            <header className="hero">
                <nav className="hero-nav" style={{ opacity: navOpacity, transform: navTransform }}>
                    <a href="/" className="brand">
                        <img src={logo} alt="Logo" />
                    </a>
                    <div className="menu-toggle" onClick={toggleMenu}>
                        <i class="fa fa-chevron-down"></i> {/* Ícono de menú hamburguesa */}
                    </div>
                    {/* Clases condicionales para controlar la visibilidad del menú */}
                    <ul className={menuOpen ? 'show' : ''}>
                        <li><a href="#about">Acerca de</a></li>
                        <li><a href="#projects">Proyectos</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </nav>
                <div className="hero-content">
                    <h1 className="hero-title">Hola! soy Ana</h1>
                    <p className="hero-description">
                        Apasionada por los datos y la tecnología, 
                    </p>
                    <p className="hero-description">
                        me especializo en traducir desafíos comerciales
                    </p>
                    <p className="hero-description">
                        en soluciones prácticas y efectivas.
                    </p>
                </div>
            </header>
            <ImageBlock />
        </>
    );
}

export default Home;
