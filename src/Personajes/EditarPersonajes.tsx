import React from 'react'
import { date } from 'yup';
import FormularioPersonajes from './FormularioPersonajes';

export default function EditarPersonajes(){
    return(
        <>
            <h3>Editar Personajes</h3>
            <FormularioPersonajes 
                modelo={{nombre: 'Emilia',
                biografia: `**Emilia** (エミリア) is the main heroine of the Re:Zero kara Hajimeru Isekai Seikatsu series. She is a Half-Elf and a candidate to become the 42nd King of the Dragon Kingdom of Lugnica in the Royal Selection. Debuting at the very start of the series, Emilia is arguably the most important character in the series as most events somehow revolve around her.`,
                fechaNacimiento: new Date('2021-09-23T00:00:00'),
                fotoURL:'https://i.pinimg.com/originals/02/35/e2/0235e2f14f233114e7848cf0f09192ec.jpg'}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    );
}