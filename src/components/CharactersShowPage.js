import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";

function CharactersShowPage() {

    const { userId } = useParams()

    const navigate = useNavigate()

    const { currentUser } = useContext(CurrentUser)

    // const { character } = useContext(Character)

    const [userCharacters, setUsersCharacters] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:3001/characters/${userId}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setUsersCharacters(resData)
        }
        fetchData()
    }, [userId])

    const characters = userCharacters.map((character, i) => {
        return (
            <div key={i}>
                <h1>{character.name}</h1>
                <h3>Race: {character.race}</h3>
                <h3>Class: {character.class}</h3>
                <button onClick={() => navigate(`/characters/edit/${character.character_id}`)}>Edit</button>
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