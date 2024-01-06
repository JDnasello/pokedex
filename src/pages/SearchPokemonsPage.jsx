import { useContext } from "react"
import { useLocation } from "react-router-dom"
import { PokemonContext } from "../context/Context"
import PokemonCard from "../components/PokemonCard"

const SearchPokemonsPage = () => {

    const location = useLocation()
    console.log(location)
    const { allPokemons } = useContext(PokemonContext)

    const pokemonsFounded = allPokemons.filter(pokemon => pokemon.name.includes(location.state))
    

    return (
        <div className="container-pokedex">
            <div className="container-pokemons-list">
                {pokemonsFounded.length > 0 ? 
                    pokemonsFounded.map(pokemon => 
                            <PokemonCard key={pokemon.id} pokemon={pokemon} />
                        )
                
                    : 
                        <span>Pokemons not found</span>
                    
                }
            </div>
        </div>
    )
}

export default SearchPokemonsPage
