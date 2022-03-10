import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react'
import { coordenadaDTO } from "./coordenadas.model";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16,37]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Mapa(props: MapaProps){

    const [coordenas, setCoordenadas] = useState<coordenadaDTO[]>([])

    return(
        <MapContainer
            center={[19.457918, -99.219883]} zoom={14}
            style={{height: props.height}}
        >
            <TileLayer attribution="React Películas"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            />
            <ClickMapa setPunto={coordenadas => {
                setCoordenadas([coordenadas])
            }}/>
            {coordenas.map(coordenada => <Marcador key={coordenada.lat + coordenada.lng}
                {... coordenada}
            />)}
        </MapContainer>
    )
}

function ClickMapa(props: clickMapaProps){
    useMapEvent('click', e => {
        props.setPunto({lat: e.latlng.lat, lng: e.latlng.lng})
    })
    return null;
}

function Marcador(props: coordenadaDTO){
    return(
        <Marker position={[props.lat, props.lng]}/>
    )
}

interface clickMapaProps{
    setPunto(coordenadas: coordenadaDTO): void;
}

interface MapaProps{
    height: string;
}

Mapa.defaultProps = {
    height: '500px'
}