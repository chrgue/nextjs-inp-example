'use client';

import ReactLogo from "@/components/ReactLogo";
import {PokemonList} from "@/components/PokemonList";
import {Search} from "@/components/Search";
import {useState} from "react";

export default function Home() {
    const initialState = "";
    const [filterText, setFilterText] = useState(initialState);

    function onChange(text: string) {
        setFilterText(text);
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <ReactLogo src="/logo.svg" alt="React logo"/>
            <Search text={filterText} onChange={(text) => onChange(text)}/>
            <PokemonList text={filterText}/>
        </div>
    );
}
