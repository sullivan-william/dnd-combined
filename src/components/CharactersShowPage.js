import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

function CharactersShowPage() {

    const { userId } = useParams()

    const navigate = useNavigate()

    const [userCharacters, setUsersCharacters] = useState([])

    useEffect(() => {
        // const API_URL = `https://cryptic-bayou-09878.herokuapp.com/characters/${userId}`
        const API_URL = `http://localhost:3001/characters/${userId}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setUsersCharacters(resData)
        }
        fetchData()
    }, [userId])
    
    let characters = userCharacters.map((character, i) => {
        return (
            <div key={i}>
                <h1>{character.name}</h1>
                <h3>Race: {character.race}</h3>
                <h3>Class: {character.class}</h3>
                <div>
                <button className="btn btn-warning" onClick={() => navigate(`/characters/edit/${character.character_id}`)}>Edit</button>
                </div>
            </div>
        )
    })

    function createNew() {
        navigate('/new_character')
    }

    function goHome() {
        navigate('/home')
    }

    return (
        <div>
            <h1>Your Characters</h1>
            {characters}
            <br></br>
            <div>
                <button className="btn btn-primary" onClick={createNew}>Create New Character</button>
                <button className="btn btn-secondary" onClick={goHome}>Exit</button>
            </div>
        </div>
    )
}

export default CharactersShowPage