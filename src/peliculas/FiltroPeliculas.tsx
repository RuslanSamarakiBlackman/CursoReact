import { Form, Formik } from 'formik';
import React from 'react'
import { generoDTO } from '../Generos/Generos.model';

export default function FiltroPeliculas(){

    const valorInicial: filtroPeliculasForm = {
        titulo: '',
        generoId: 0,
        proximosEstrenos: false,
        encines: false
    }

    const generos: generoDTO[] = [{id:1, nombre:'Echii'}, {id:2, nombre:'Hentai'}]

    return(
        <>
            <h3>Filtrar Películas</h3>

            <Formik initialValues={valorInicial}
                onSubmit={valores => console.log(valores)}
            >
                {(formikProps) => (
                    <Form>
                        <div className="form-inline">
                            <div className='form-group mb-2'>
                                <label htmlFor='titulo' className='sr-only'>Título</label>
                                <input type="text" 
                                    className='form-control' id='titulo'
                                    placeholder='Título de la película'
                                    {...formikProps.getFieldProps('titulo')}
                                />
                            </div>

                            <div className='form-group mx-sm-3 mb-2'>
                                <select className='form-control'
                                    {...formikProps.getFieldProps('generoId')}
                                >
                                    <option value="0">--Seleccione un género</option>
                                    {generos.map(genero => <option key={genero.id}
                                                        value={genero.id}>{genero.nombre}</option>
                                    )}
                                </select>

                            </div>
                        </div>                        
                    </Form>
                )}


            </Formik>            
        </>
    );
}

interface filtroPeliculasForm{
    titulo: string;
    generoId: number;
    proximosEstrenos: boolean;
    encines: boolean;
}