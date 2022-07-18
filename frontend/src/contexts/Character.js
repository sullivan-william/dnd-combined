import { createContext, useState } from "react";

export const Character = createContext()

function CharacterProvider({ children }) {

    const [character, setCharacter] = useState({
        name: '',
        race: '',
        class: ''
    })

    return (
        <Character.Provider value={{ character, setCharacter }}>
            {children}
        </Character.Provider>
    )
}

export default CharacterProvider