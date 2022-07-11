import { Character } from "../contexts/Character";
import { useContext, useState, useEffect } from "react";
import { CurrentUser } from "../contexts/CurrentUser";

function CharactersShowPage() {

    const { currentUser } = useContext(CurrentUser)

    // const { character } = useContext(Character)

    const [userCharacters, setUsersCharacters] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:3001/characters/${currentUser.user_id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setUsersCharacters(resData)
        }
        fetchData()
    }, [])

    const characters = userCharacters.map((character, i) => {
        return (
            <div key={i}>
                <h1>{character.name}</h1>
                <h3>Race: {character.race}</h3>
                <h3>Class: {character.class}</h3>
            </div>
        )
    })

    return (
        <div>
            <h1>Your Characters</h1>
            {characters}
        </div>
    )
}

export default CharactersShowPage