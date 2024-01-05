import { Link } from 'react-router-dom'
import { upperCase } from '../functions/functions.js'

const PokemonCard = ({ pokemon }) => {
    

    return (
        <>
            <div className='pokemon-card'>
                <div className="decoration">
                        <h4># {pokemon.id}</h4>
                        <h2>{upperCase(pokemon.name)}</h2>
                    </div>
                    <img src={pokemon?.sprites?.other["official-artwork"]?.front_default} alt={pokemon.name} width={200} height={200} />
                <div className='pokemon-types'>
                    <p>Type:</p>
                    {pokemon.types.map(type => (
                        <span key={type.type.name} className={type.type.name}>{ type.type.name }</span>
                    ))}
                </div>
                <div className='decoration-bottom'>
                    <Link to={`/pokedex/pokemon/${pokemon.id}`}><button>+ Info</button></Link>
                </div>
            </div>
        </>
    )
}

export default PokemonCard
