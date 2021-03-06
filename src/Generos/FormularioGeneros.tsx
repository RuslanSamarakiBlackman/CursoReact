import { Formik, Form, FormikHelpers } from "formik";
import React from "react";
import {Link} from "react-router-dom"
import * as Yup from "yup"
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { generoCreacionDTO } from "./Generos.model";

export default function FormularioGeneros(props: formularioGenerosProps){
    return(
        <>
            <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}

            validationSchema ={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').pimeraLetraMayuscula()
            })}

            >
            {(formikProps) =>(
                <Form>
                    <FormGroupText campo='nombre' label='Nombre' />

                    <Button disabled={formikProps.isSubmitting} 
                    type="submit">Salvar</Button>
                    <Link className='btn btn-secondary' to="/generos">Cancelar</Link>
                </Form>
            )}
            
            </Formik>
        </>
    )
}

interface formularioGenerosProps{
    modelo: generoCreacionDTO,
    onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void;
}