import { useEffect, useState } from "react"
import { PokemonContext } from "./Context.jsx"
import { useForm } from "../hooks/useForm.js"

const ContextProvider = ({ children }) => {

    const [allLimitedPokemons, setAllLimitedPokemons] = useState([])
    const [allPokemons, setAllPokemons] = useState([])
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(true)
    const [filterBarActive, setFilterBarActive] = useState(false)
    const [filteredTypePokemons, setFilteredTypePokemons] = useState([])

    const initURL = 'https://pokeapi.co/api/v2/'

    //llamar a la pokeAPI y traer toda la data dentro del limite establecido
    const getLimitedPokemons = async (limit = 12) => {
        setLoading(true)
        try {
            const response = await fetch(`${initURL}pokemon?limit=${limit}&offset=${offset}`)
            const data = await response.json()
            console.log(data)

            // recorrer pokemon por pokemon haciendo un fetch a la url de cada uno, para traer todos sus datos, almacenarlos en un json(), y retornar toda la data
            const promises = data?.results?.map(async (pokemon) => {
                const response = await fetch(pokemon.url)
                const data = await response.json()
                return data
            })
            // almacenamos el resultado de la promesa en una constante, que termina cuando el resto de las promesas iteradas terminaron con exito
            const results = await Promise.all(promises)
            //unificamos los arreglos allLimitedPokemons con el de results, y mediante el spread operator, traemos todo el contenido de ambos arreglos
            setAllLimitedPokemons([...allLimitedPokemons ,...results])
            setLoading(false)
        }
        catch (err) {
            console.error(err)
        }
    }

    //llamar a todos los pokemones sin limites, para luego poder realizar busquedas
    const getAllPokemons = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${initURL}pokemon?limit=100000&offset=0`)
            const data = await response.json()
            console.log(data)

            const promises = data?.results?.map(async (pokemon) => {
                const response = await fetch(pokemon.url)
                const data = await response.json()
                return data
                
            })
            
            const results = await Promise.all(promises)
            setAllPokemons(results)
            setLoading(false)
        }
        catch (err) {
            console.error(err)
        }
    }

    //buscar un pokemon por ID
    const searchById = async id => {
        try {
            const response = await fetch(`${initURL}pokemon/${id}`)
            const data = response.json()
            return data
        }
        catch (err) {
            console.error(err)
        }
    }

    const { searchValue, inputChange, resetForm} = useForm({
        searchValue: ''
    })

    const loadMorePokemons = () => {
        setOffset(offset + 12)
    }

    useEffect(() => {
        getLimitedPokemons()
    }, [offset])

    useEffect(() => {
        getAllPokemons()
    }, [])

    const [typeSelected, setTypeSelected] = useState({
        normal: false,
        fire: false, 
        water: false, 
        grass: false, 
        electric: false, 
        ice: false, 
        fighting: false, 
        poison: false, 
        ground: false, 
        flying: false, 
        psychic: false, 
        bug: false, 
        rock: false, 
        ghost: false, 
        dragon: false, 
        dark: false, 
        steel: false, 
        fairy: false
    })

    const filterTypes = (e) => {
        const checked = e.target.checked
        const typeName = e.target.name

        setTypeSelected({
            ...typeSelected,
            [typeName]: checked
        })

        if (checked) {
            const results = allPokemons.filter(pokemon =>
                pokemon.types.map(type => type.type.name).includes(typeName))
            
            setFilteredTypePokemons(prevPokemons => {
            const filteredIds = prevPokemons.map(prevPokemon => prevPokemon.id)
            const newResults = results.filter(pokemon => !filteredIds.includes(pokemon.id))
            return [...prevPokemons, ...newResults]
        })
        } else {
            const results = filteredTypePokemons.filter(pokemon =>
                !pokemon.types.map(type => type.type.name).includes(typeName))
        setFilteredTypePokemons(results)
        }
    }
    return (
        <PokemonContext.Provider value={{
            loading,
            searchValue,
            inputChange,
            resetForm,
            allPokemons,
            allLimitedPokemons,
            searchById,
            filterBarActive,
            setFilterBarActive,
            filterTypes,
            typeSelected,
            filteredTypePokemons,
            loadMorePokemons
        }} >
            {children}
        </PokemonContext.Provider>
    )
}

export default ContextProvider
