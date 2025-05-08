import React, { useEffect, useState } from "react"

// A hook that returns a value and if its the initial render

const XDictionary = () => {

    const [search, setSearch] = useState("");
    const [definition, setDefinition] = useState("");

    const searchDictionary = [
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
        { word: "Component", meaning: "A reusable building block in React." },
        { word: "State", meaning: "An object that stores data for a component." }
    ]

    const searchInDict = (word) => {
        const idx = searchDictionary.findIndex(ele => ele.word.toLowerCase() === word.toLowerCase());
        if (idx === -1) {
            setDefinition("Word not found in the dictionary.");
        } else {
            setDefinition(searchDictionary[idx].meaning);
        }
    }


    return <div style={{display:"flex", flexDirection:"column", gap:".25rem", alignItems:"start"}}>
        <h1>Dictionary App</h1>
        <div>
            <input type="text" placeholder="Search for a word..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => searchInDict(search)}>Search</button>
            <h3 style={{textAlign:"start"}}>Definition:</h3>
            {/* { definition !== "" && */}
                <p>{definition}</p>
            {/* } */}
        </div>
        
    </div>
}

export default XDictionary;