import React from 'react'
import FormularioCines from './FormularioCines';

export default function EditarCines(){
    return(
        <>
            <h3>Editar Cine</h3>
            <FormularioCines 
                modelo={{nombre: 'Cinemas Toreo'}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    );
}