import { Redirect } from "react-router-dom";
import React from 'react'

export default function RedireccionarLanding(){
    return(
        <>
        <Redirect to={{pathname: '/'}}></Redirect>
        </>
    )
}