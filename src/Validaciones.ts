import * as Yup from 'yup'

export default function ConfigurarValidaciones(){
    Yup.addMethod(Yup.string, 'pimeraLetraMayuscula', function(){
        return this.test('primera-letra-mayuscula', 'La primera letra debe ser mayúscula',
        function(valor){
            if (valor && valor.length > 0){
                const primeraLetra = valor[0];
                return primeraLetra === primeraLetra.toLocaleUpperCase();
            }
            return true;
        }) 
    })
}