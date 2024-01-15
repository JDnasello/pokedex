import { useContext, useEffect, useState } from "react"
import { PokemonContext } from "../context/Context"
import { Link, useParams } from "react-router-dom"
import { upperCase } from "../functions/functions"

const PokemonPage = () => {

    const { searchById, getEvolutions } = useContext(PokemonContext)
    const { id } = useParams()
    const [pokemon, setPokemon] = useState({})
    const [evolution, setEvolution] = useState([])

    const getPokemon = async id => {
        try {
            const data = await searchById(id)
            setPokemon(data)
        }
        catch (err) {
            console.error(err);
        }
    }

    const getEvo = async id => {
        const data = await getEvolutions(id)
        setEvolution(data)
    }

    useEffect(() => {
        getPokemon(id)
        getEvo(id)
    }, [id])

    const getProgressWidth = (baseStat) => {
        return {'--progress-bar-length': `${baseStat}%`}
    }

    return (
        <div className="container-pokemon" >
            
            <div className="pokemon-info">
                <Link to='/pokedex'><button className="back-to-pokedex">Back to Pokedex</button></Link>
                <div className="name-and-id">
                    <h1 className="custom-font">{pokemon?.name}</h1>
                    <span className="custom-font">#{pokemon?.id}</span>
                </div>
                <div className="pokemon-img-and-characteristics">
                    <img src={pokemon?.sprites?.other["official-artwork"]?.front_default} alt={pokemon.name} />
                    <div className="container-characteristics">
                        <div className="characteristics">
                            <ul className="column-1">
                                <li>
                                    <span className="characteristic-title">Height</span>
                                    <span className="pokemon-characteristic-value">{pokemon.height}m</span>
                                </li>
                                <li>
                                    <span className="characteristic-title">Weight</span>
                                    <span className="pokemon-characteristic-value">{pokemon.weight}kg</span>
                                </li>
                            </ul>
                            <ul className="column-2">
                                <li>
                                    <span className="characteristic-title">Type</span>
                                    <div>
                                        {pokemon?.types?.map(pokemonType => (
                                            <span key={pokemonType.type.name}
                                                className={`${pokemonType.type.name} pokemon-characteristic-type`}>
                                                {pokemonType.type.name}
                                            </span>
                                        ))}
                                    </div>
                                </li>
                                <li>
                                    <span className="characteristic-title">Ability</span>
                                    {pokemon?.abilities?.map(pokemonAbility => (
                                        <span key={pokemonAbility.ability.name} className="pokemon-characteristic-ability">
                                            {pokemonAbility.ability.name}
                                        </span>
                                    ))}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>    
                    <div className="stats">
                        <h4>Stats:</h4>
                    {pokemon?.stats?.map((pokemonStat, index) => {
                        return (
                            <div key={index}>
                                <span className="stat-name">{pokemonStat.stat.name}</span>
                                <div className="progress-bar" style={getProgressWidth(pokemonStat.base_stat)}></div>
                                <span className="stat-value">{pokemonStat.base_stat}</span>
                            </div>
                        )
                    })}
                </div>
                {
                evolution.length > 1 && (
                <>
                <h3>Evolutions:</h3>
                <div className="evolutions">
                    {evolution?.map((evo, index) => {
                        console.log('EvolutionData:', evo);
                        return (
                            <div key={index}>
                                <Link to={`/pokedex/pokemon/${parseInt(evo.id)}`}><img src={evo.image} alt={evo.name} /></Link>
                                <span>{upperCase(evo.name)}</span>
                            </div>
                        )
                    })}
                </div>
                </>
                )}
            </div>
        </div>
    )
}

export default PokemonPage
