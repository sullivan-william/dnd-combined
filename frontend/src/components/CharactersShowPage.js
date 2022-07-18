import { useState, useEffect } from "react";
import { Button, Card, CardGroup, ListGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";

function CharactersShowPage() {

    const { userId } = useParams()

    const navigate = useNavigate()

    const [userCharacters, setUsersCharacters] = useState([])

    useEffect(() => {
        // const API_URL = `http://localhost:3001/characters/${userId}`
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
                <Card key={i} style={{margin: "3em"}}>
                    <Card.Img variant="top" src="../place-image.png" alt="DnD characters" style={{height: "18rem"}} />
                    <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Race: {character.race}</ListGroup.Item>
                            <ListGroup.Item>Class: {character.class}</ListGroup.Item>
                        </ListGroup>
                        <Button style={{background: "#662C91", color: "#F5F5F5", border: "2px solid #57267D"}} onClick={() => navigate(`/characters/edit/${character.character_id}`)}>Edit</Button>
                    </Card.Body>
                </Card>
        )
    })

    function createNew() {
        navigate('/new_character')
    }

    function goHome() {
        navigate('/home')
    }

    if (characters.length < 1) {
        return (
            <div>
                <h1>No characters yet? Time for a fresh start!</h1>
                <br></br>
                <div className="d-flex justify-content-start">
                    <Button style={{background: "#85FFF9", color: "#0F0A0A", border: "2px solid #5CFFF7"}} onClick={createNew}>Create New Character</Button>
                    <button className="btn btn-secondary" onClick={goHome}>Exit</button>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Your Characters</h1>
                <div className="d-flex justify-content-start">
                    <CardGroup>
                        {characters}
                    </CardGroup>
                </div>
                <br></br>
                <div className="d-flex justify-content-end">
                    <Button style={{background: "#85FFF9", color: "#0F0A0A", border: "2px solid #5CFFF7"}} onClick={createNew}>Create New Character</Button>
                    <button className="btn btn-secondary" onClick={goHome}>Exit</button>
                </div>
            </div>
        )
    }

}

export default CharactersShowPage