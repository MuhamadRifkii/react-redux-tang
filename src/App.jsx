import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonListResult } from "./store/actions/pokemon.action";

function App() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.pokemon.pokemonList);

    useEffect(() => {
        dispatch(getPokemonListResult());
    }, [dispatch]);

    return (
        <div className="App">
            <h1>Pokémon List</h1>
            <div className="pokemon-list">
                {data.map((pokemon) => (
                    <div key={pokemon.name} className="pokemon-card">
                        <h2>{pokemon.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
