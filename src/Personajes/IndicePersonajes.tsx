import React from 'react'
import { Link } from 'react-router-dom';

export default function IndicePersonajes(){
    return(
        <>
            <h3>Indice Personajes</h3>
            <Link to="personajes/crear">Crear Personaje</Link>
        </>
    );
}