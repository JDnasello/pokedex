import { useState } from "react"

//customHook para manipular el formulario de busqueda de pokemones
///indicamos como parametro un formulario inicial como objeto vacio
export const useForm = (initForm = {}) => {
    const [searchForm, setSearchForm] = useState(initForm)

    //funcion que captura el nombre del input, y el valor que contiene
    ///setSearchForm obtiene todo el contenido del formulario, y crea una propiedad computada, suponiendo que [name] es la propiedad "name" del pokemon, y eso equivale al valor del contenido del input
    const inputChange = ({ target }) => {
        const { name, value } = target
        setSearchForm({
            ...searchForm,
            [name]: value
        })
    }

    //actualiza el estado del formulario al valor inicial, que es un objeto vacio
    const resetForm = () => {
        setSearchForm(initForm)
    }

    return {...searchForm, searchForm, inputChange, resetForm}
}





