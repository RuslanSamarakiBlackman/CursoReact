import React from "react";

export default function MostrarErrorCampos(props: mostrarErrorCampoProps){
    return(
        <>
            <div className='text-danger'>{props.mensaje}</div>
        </>
    )
}

interface mostrarErrorCampoProps{
    mensaje: string;
}