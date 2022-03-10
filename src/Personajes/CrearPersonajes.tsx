import React from 'react'
import FormularioPersonajes from './FormularioPersonajes';

export default function CrearPersonajes(){
    return(
        <>
            <h3>Crear Personaje</h3>
            <FormularioPersonajes 
                modelo={{nombre: '', fechaNacimiento: undefined}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    );
}