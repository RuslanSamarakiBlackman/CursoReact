import CrearCines from "./Cines/CrearCines";
import EditarCines from "./Cines/EditarCines";
import IndiceCines from "./Cines/IndiceCines";
import CrearGenero from "./Generos/CrearGenero";
import EditarGenero from "./Generos/EditarGenero";
import IndiceGeneros from "./Generos/indiceGeneros";
import LandingPage from "./LandingPage";
import CrearPeliculas from "./peliculas/CrearPelicula";
import EditarPeliculas from "./peliculas/EditarPeliculas";
import FiltroPeliculas from "./peliculas/FiltroPeliculas";
import CrearPersonajes from "./Personajes/CrearPersonajes";
import EditarPersonajes from "./Personajes/EditarPersonajes";
import IndicePersonajes from "./Personajes/IndicePersonajes";
import RedireccionarLanding from "./utils/RedireccionarLanding";

const rutas = [
    {path: '/generos/crear', componente: CrearGenero},
    {path: '/generos/editar/:id(\\d+)', componente: EditarGenero},
    {path: '/generos', componente: IndiceGeneros, exact: true},

    {path: '/personajes/crear', componente: CrearPersonajes},
    {path: '/personajes/editar/:id(\\d+)', componente: EditarPersonajes},
    {path: '/personajes', componente: IndicePersonajes, exact: true},

    {path: '/cines/crear', componente: CrearCines},
    {path: '/cines/editar/:id(\\d+)', componente: EditarCines},
    {path: '/cines', componente: IndiceCines, exact: true},

    {path: '/peliculas/crear', componente: CrearPeliculas},
    {path: '/peliculas/editar/:id(\\d+)', componente: EditarPeliculas},
    {path: '/peliculas/filtrar', componente: FiltroPeliculas},

    {path: '/', componente: LandingPage, exact: true},
    {path: '*', componente: RedireccionarLanding}
]

export default rutas;