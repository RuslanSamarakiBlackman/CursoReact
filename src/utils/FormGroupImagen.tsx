import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";
import React from 'react'

export default function FormGroupImagen(props: formGroupImagenProps){

    const divStyle = {marginTop: '10px'}
    const imgStyle = {width: '450px'}

    const [imagenBase64, setImagenBase64] = useState('');
    const [imagenURL, setimagenURL] = useState(props.imagenURL);
    const {values} = useFormikContext<any>();

    const ManejarOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files){
            const archivo = e.currentTarget.files[0];
            aBase64(archivo)
                .then((valor: string) => setImagenBase64(valor))
                .catch(error => console.error(error))

            values[props.campo] = archivo;
            setimagenURL('');
        }
    }

    const aBase64 = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        })
    }

    return(
        <div className="form-group">
            <label>{props.label}</label>
            <div>
                <input type="file" accept=".jpg,.jepg,.png" onChange={ManejarOnChange} />
            </div>
            {imagenBase64 ?
                <div>
                    <div style={divStyle}>
                        <img style={imgStyle} src={imagenBase64} alt="imagen seleccionada" />
                    </div>
                </div> : null
            }
            {imagenURL ?
                <div>
                    <div style={divStyle}>
                        <img style={imgStyle} src={imagenURL} alt="imagen seleccionada" />
                    </div>
                </div> : null
            }
        </div>
    )
}

interface formGroupImagenProps{
    campo: string;
    label: string;
    imagenURL: string;
}

FormGroupImagen.defaultProps = {
    imagenURL: ''
}