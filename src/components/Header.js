import React from 'react';

function Header() {
    return (
        <header>
            <h1>Hola, soy [Tu Nombre]</h1>
            <nav>
                <ul>
                    <li><a href="#about">Acerca de</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
