'use client';

import ReactLogo from "@/components/ReactLogo";
import {PokemonList} from "@/components/PokemonList";
import {Search} from "@/components/Search";
import {useState, useTransition} from "react";

export default function Home() {
    const initialState = "";
    const [filterText, setFilterText] = useState(initialState);
    const [inputText, setInputText] = useState(initialState);

    const [isPending, startTransition] = useTransition()
    function onChange(text: string) {
        startTransition(() => {
            setFilterText(text);
        });
        setInputText(text);
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <ReactLogo src="/logo.svg" alt="React logo"/>
            <Search text={inputText} onChange={(text) => onChange(text)}/>
            <PokemonList text={filterText}/>
        </div>
    );
}
