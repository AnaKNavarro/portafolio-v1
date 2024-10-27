import React, { useEffect, useState } from 'react';
import './Home.css';
import logo from '../images/Logo_AN_pg.png'; // Asegúrate de que la ruta sea correcta

import ImageBlock from './ImageBlock';

function Home() {
    const [navOpacity, setNavOpacity] = useState(1);
    const [navTransform, setNavTransform] = useState('translateY(0px)');

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const newOpacity = Math.max(1 - scrollY / 150, 0);
        setNavOpacity(newOpacity);
        setNavTransform(scrollY > 50 ? 'translateY(-20px)' : 'translateY(0px)');
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
                    <ul>
                        <li><a href="#about">Acerca de</a></li>
                        <li><a href="#projects">Proyectos</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </nav>
                <div className="hero-content">
                    <h1 className="hero-title">Hola, soy Ana</h1>
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
            <ImageBlock /> {/* Mover el componente fuera del header */}
        </>
    );
}

export default Home;
