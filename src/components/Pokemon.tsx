import {Pokemon} from "./data";
import {useEffect, useState} from "react";

type PokemonProps = {
    pokemon: Pokemon
}

export const PokemonView = (props: PokemonProps) => {
    const name = props.pokemon.name.english;
    const image = props.pokemon.image.sprite;
    const type = props.pokemon.type[0];

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const startTime = performance.now();

        // Simulating a computationally expensive operation
        const expensiveOperation = () => {
            let result = 0;
            for (let i = 0; i < 100000/5; i++) {
                result += Math.sqrt(i);
            }
            return result;
        };

        expensiveOperation(); // Call the expensive operation

        const endTime = performance.now();
        const elapsedTime = endTime - startTime;

        // Set loading to false after a delay or a specific elapsed time
        setTimeout(() => {
            setLoading(false);
        }, Math.max(0, 3000 - elapsedTime)); // Ensure loading is false after at least 3 seconds

    }, []);

    return (
        <div style={{display: "flex", alignItems: "center"}} onClick={()=>window.alert("Hallo")}>
            <img src={image} alt={name} width={40} height={40}/>
            <span>{`${name} (${type})`}</span>
        </div>
    );
}
