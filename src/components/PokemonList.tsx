import {PokemonView} from "./Pokemon";
import {pokemons} from "./data";

export type PokemonListProps = {
    text: string;
}
export const PokemonList = ({text}: PokemonListProps) => {
    return (
        <>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {
                    Array.from({length: 5}).map((value) =>
                        pokemons
                            .filter((p) => p.name.english.toLowerCase().includes(text.toLowerCase()))
                            .map((p) => <PokemonView key={`${value}-${p.id}`} pokemon={p}/>)
                    )
                }
            </div>
        </>
    );
}
