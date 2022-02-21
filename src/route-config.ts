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

const rutas = [
    {path: '/generos/crear', componente: CrearGenero},
    {path: '/generos/editar', componente: EditarGenero},
    {path: '/generos', componente: IndiceGeneros},

    {path: '/personajes/crear', componente: CrearPersonajes},
    {path: '/personajes/editar', componente: EditarPersonajes},
    {path: '/personajes', componente: IndicePersonajes},

    {path: '/cines/crear', componente: CrearCines},
    {path: '/cines/editar', componente: EditarCines},
    {path: '/cines', componente: IndiceCines},

    {path: '/peliculas/crear', componente: CrearPeliculas},
    {path: '/peliculas/editar', componente: EditarPeliculas},
    {path: '/peliculas/filtrar', componente: FiltroPeliculas},

    {path: '/', componente: LandingPage, exact: true}
]

export default rutas;