import { useContext } from "react"
import { useLocation } from "react-router-dom"
import { PokemonContext } from "../context/Context"
import PokemonCard from "../components/PokemonCard"

const SearchPokemonsPage = () => {

    const location = useLocation()
    console.log(location);
    const { allPokemons } = useContext(PokemonContext)

    const pokemonsFounded = allPokemons.filter(pokemon => pokemon.name.includes(location.state))

    return (
        <div className="container-pokedex">
            <div className="container-pokemons-list">
                {pokemonsFounded.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    )
}

export default SearchPokemonsPage
