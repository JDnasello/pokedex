import { useContext } from "react"
import { PokemonContext } from "../context/Context.jsx"
import PokemonCard from "./PokemonCard.jsx"

const Pokemons = () => {
    const { allLimitedPokemons, filteredTypePokemons } = useContext(PokemonContext);

    const pokemonsToRender = filteredTypePokemons.length > 0 ? filteredTypePokemons : allLimitedPokemons;

    return (
        <div className="container-pokemons-list">
            {pokemonsToRender.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default Pokemons
