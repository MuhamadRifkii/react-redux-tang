import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonListResult } from './store/actions/pokemon.action'

function App() {
  const [filter, setFilter] = useState('')
  const dispatch = useDispatch()
  const data = useSelector((state) => state.pokemon.pokemonList)

  useEffect(() => {
    dispatch(
      getPokemonListResult({
        offset: 0,
        limit: 10000,
      }),
    )
  }, [dispatch])

  const searchPokemon = (e) => {
    setFilter(e.target.value)
  }

  const filteredPokemon = data.filter((pokemon) =>
    pokemon.name.includes(filter),
  )

  return (
    <div className="container">
      <h1 className="title">Pokémon List</h1>

      <input
        type="text"
        placeholder="Search Pokémon..."
        value={filter}
        onChange={searchPokemon}
        className="search-bar"
      />

      <div className="pokemon-list">
        {filteredPokemon.map((pokemon) => (
          <div key={pokemon.name} className="pokemon-card">
            <h2>{pokemon.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
