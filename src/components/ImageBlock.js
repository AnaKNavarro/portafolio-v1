import React from 'react';
import './ImageBlock.css'; // Asegúrate de crear un archivo CSS para los estilos
import myImage_1 from '../images/imagen_1.jpg';

function ImageBlock() {
    return (
        <div className="image-block">
            <img 
                src={myImage_1} 
                alt="img_1"
                className="responsive-image"
            />
        </div>
    );
}

export default ImageBlock;
