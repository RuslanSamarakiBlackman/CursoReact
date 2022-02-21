import PeliculaIndividual from "./PeliculaIndividual"
import { pelicula } from "./peliculas.model"
import css from './ListadoPeliculas.module.css'
import ListadoGenerico from "../utils/ListadoGenerico"
import React from 'react'

export default function ListadoPeliculas(props: listadoPeliculasProps){

        return(
            <ListadoGenerico listado={props.peliculas}>
                <div className={css.div}>
                {props.peliculas?.map(pelicula => <PeliculaIndividual pelicula={pelicula}
                                                                     key={pelicula.id}
                 />)}
                </div> 
            </ListadoGenerico>           
         )
}

interface listadoPeliculasProps{
    peliculas?: pelicula[]
}