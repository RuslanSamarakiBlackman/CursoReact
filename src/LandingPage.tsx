import React from 'react';
import { useEffect, useState } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landingPageDTO } from "./peliculas/peliculas.model";

export default function LandingPage(){
    
    const [peliculas, setPeliculas] = useState<landingPageDTO>({})


        useEffect(() => {
          const timerId = setTimeout(() => {
            setPeliculas({enCartelera: [
              {
                id: 1,
                titulo: 'Re:Zero -Starting Life in Another World',
                poster: 'https://www.themoviedb.org/t/p/original/y7XwmyE5ue9hjk65fEWpO2hGU2B.jpg'
              },
              {
                id: 1,
                titulo: 'Weathering With You (2019)',
                poster: 'https://thesmartlocal.com/japan/wp-content/uploads/2020/03/Top-Anime-Movies-21.jpg'      
              },
              {
                id: 1,
                titulo: 'Princess Mononoke (1997)',
                poster: 'https://thesmartlocal.com/japan/wp-content/uploads/2020/03/Top-Anime-Movies-9.jpg'      
              }
            ],
            proximosEstrenos : [
              {
                id: 1,
                titulo: 'Ghost in the Shell (1995)',
                poster: 'https://thesmartlocal.com/japan/wp-content/uploads/2020/03/Top-Anime-Movies-7.jpg'
              },
              {
                id: 1,
                titulo: 'Spirited Away (2001)',
                poster: 'https://thesmartlocal.com/japan/wp-content/uploads/2020/03/Top-Anime-Movies-17.jpg'      
              },
              {
                id: 1,
                titulo: 'My Neighbour Totoro (1988)',
                poster: 'https://thesmartlocal.com/japan/wp-content/uploads/2020/03/Top-Anime-Movies-1.jpg'      
              }
            ]
          })
      
        }, 1000);
      
        return () => clearTimeout(timerId);
      })

    return(
        <>
            <h3>En cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera}/>

            <h3>Próximos estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>
        </>
        
    )
}