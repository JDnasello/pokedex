import { useContext } from "react"
import { PokemonContext } from "../context/Context"

const FilterPokemons = () => {

    const { filterBarActive, filterTypes } = useContext(PokemonContext)

    return (
        <>
            
            <div className={`container-filter ${filterBarActive ? 'active' : ''}`}>
                <h1>Type</h1>
                <div className="filter-pokemon-type">
                    <div className="pokemon-type">
                        <input type="checkbox" name="normal" id="normal"
                            onChange={filterTypes} />
                        <label htmlFor="normal" className="normal">Normal</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="fire" id="fire" onChange={filterTypes} />
                        <label htmlFor="fire" className="fire">Fire</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="water" id="water" onChange={filterTypes} />
                        <label htmlFor="water" className="water">Water</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="grass" id="grass" onChange={filterTypes} />
                        <label htmlFor="grass" className="grass">Grass</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="electric" id="electric" onChange={filterTypes} />
                        <label htmlFor="electric" className="electric">Electric</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="ice" id="ice" onChange={filterTypes} />
                        <label htmlFor="ice" className="ice">Ice</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="fighting" id="fighting" onChange={filterTypes} />
                        <label htmlFor="fighting" className="fighting">Fighting</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="poison" id="poison" onChange={filterTypes} />
                        <label htmlFor="poison" className="poison">Poison</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="ground" id="ground" onChange={filterTypes} />
                        <label htmlFor="ground" className="ground">Ground</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="flying" id="flying" onChange={filterTypes} />
                        <label htmlFor="flying" className="flying">Flying</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="psychic" id="psychic" onChange={filterTypes} />
                        <label htmlFor="psychic" className="psychic">Psychic</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="bug" id="bug" onChange={filterTypes} />
                        <label htmlFor="bug" className="bug">Bug</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="rock" id="rock" onChange={filterTypes} />
                        <label htmlFor="rock" className="rock">Rock</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="ghost" id="ghost" onChange={filterTypes} />
                        <label htmlFor="ghost" className="ghost">Ghost</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="dragon" id="dragon" onChange={filterTypes} />
                        <label htmlFor="dragon" className="dragon">Dragon</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="dark" id="dark" onChange={filterTypes} />
                        <label htmlFor="dark" className="dark">Dark</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="steel" id="steel" onChange={filterTypes} />
                        <label htmlFor="steel" className="steel">Steel</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="fairy" id="fairy" onChange={filterTypes} />
                        <label htmlFor="fairy" className="fairy">Fairy</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterPokemons
