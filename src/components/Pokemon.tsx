import {Pokemon} from "./data";

type PokemonProps = {
    pokemon: Pokemon
}

export const PokemonView = (props: PokemonProps) => {
    const name = props.pokemon.name.english;
    const image = props.pokemon.image.sprite;
    const type = props.pokemon.type[0];

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <img src={image} alt={name} width={40} height={40}/>
            <span>{`${name} (${type})`}</span>
        </div>
    );
}
