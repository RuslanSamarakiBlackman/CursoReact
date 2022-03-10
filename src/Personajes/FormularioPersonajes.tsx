import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { personajesCreacinDTO } from "./personajes.model";
import React from 'react'
import * as Yup from 'yup'
import FormGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";
import FormGroupMarkDown from "../utils/FormGroupMarkDown";

export default function FormularioPersonajes(props: formularioPersonajeProps){
    return(
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').pimeraLetraMayuscula(),
                fechaNacimiento: Yup.date().nullable().required('Este campo es requerido')
            })}
        >
        {(formikProps) => (
            <Form>
                <FormGroupText campo="nombre" label="Nombre" />
                <FormGroupFecha label="Fecha Nacimiento" campo="fechaNacimiento"/>
                <FormGroupImagen campo="foto" label="foto" imagenURL={props.modelo.fotoURL}/>
                <FormGroupMarkDown campo="biografia" label="Biografía"/>

                <Button disabled={formikProps.isSubmitting}
                    type="submit"
                >Salvar</Button>
                <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
            </Form>
        )}
        </Formik>
    )
}

interface formularioPersonajeProps{
    modelo: personajesCreacinDTO;
    onSubmit(valores: personajesCreacinDTO, acciones: FormikHelpers<personajesCreacinDTO>): void;
}