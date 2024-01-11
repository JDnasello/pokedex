import { useContext, useState } from "react"
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
                        <label htmlFor="fire" className="fire type">Fire</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="water" id="water" onChange={filterTypes} />
                        <label htmlFor="water" className="water type">Water</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="grass" id="grass" onChange={filterTypes} />
                        <label htmlFor="grass" className="grass type">Grass</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="electric" id="electric" onChange={filterTypes} />
                        <label htmlFor="electric" className="electric type">Electric</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="ice" id="ice" onChange={filterTypes} />
                        <label htmlFor="ice" className="ice type">Ice</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="fighting" id="fighting" onChange={filterTypes} />
                        <label htmlFor="fighting" className="fighting type">Fighting</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="poison" id="poison" onChange={filterTypes} />
                        <label htmlFor="poison" className="poison type">Poison</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="ground" id="ground" onChange={filterTypes} />
                        <label htmlFor="ground" className="ground type">Ground</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="flying" id="flying" onChange={filterTypes} />
                        <label htmlFor="flying" className="flying type">Flying</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="psychic" id="psychic" onChange={filterTypes} />
                        <label htmlFor="psychic" className="psychic type">Psychic</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="bug" id="bug" onChange={filterTypes} />
                        <label htmlFor="bug" className="bug type">Bug</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="rock" id="rock" onChange={filterTypes} />
                        <label htmlFor="rock" className="rock type">Rock</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="ghost" id="ghost" onChange={filterTypes} />
                        <label htmlFor="ghost" className="ghost type">Ghost</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="dragon" id="dragon" onChange={filterTypes} />
                        <label htmlFor="dragon" className="dragon type">Dragon</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="dark" id="dark" onChange={filterTypes} />
                        <label htmlFor="dark" className="dark type">Dark</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="steel" id="steel" onChange={filterTypes} />
                        <label htmlFor="steel" className="steel type">Steel</label>
                    </div>
                    <div className="pokemon-type">
                        <input type="checkbox" name="fairy" id="fairy" onChange={filterTypes} />
                        <label htmlFor="fairy" className="fairy type">Fairy</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterPokemons
