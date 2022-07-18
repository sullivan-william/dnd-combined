import { useContext, useState, useEffect } from "react"
import { Button, Col, Form, Row, Card, ListGroup } from "react-bootstrap"
import { useNavigate } from "react-router"
import { CurrentUser } from "../contexts/CurrentUser"

function NewCharacter() {

    const navigate = useNavigate()

    // retrieve currentUser
    const { currentUser } = useContext(CurrentUser)

    const [character, setCharacter] = useState({
        name: '',
        race: '',
        class: ''
    })

    // retrieve possible character races from API
    const [raceData, setRaceData] = useState([])

    useEffect(() => {
        // const API_URL = `https://customcharactersheetbuilder.herokuapp.com/races`
        const API_URL = `https://customcharactersheetbuilder.herokuapp.com/races`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setRaceData(resData.results)
        }
        fetchData()
    }, [])

    // iterate through races to return each item individually
    const races = raceData.map((race, i) => {
        return (
            <option value={race.name} key={i}>{race.name}</option>
        )
    })

    // retrieve possible character classes from API
    const [classData, setClassData] = useState([])

    useEffect(() => {
        // const API_URL = `https://customcharactersheetbuilder.herokuapp.com/classes`
        const API_URL = `https://customcharactersheetbuilder.herokuapp.com/classes`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setClassData(resData.results)
        }
        fetchData()
    }, [])

    // iterate through classes to return each item individually
    const classes = classData.map((singleClass, i) => {
        return (
            <option value={singleClass.name} key={i}>{singleClass.name}</option>
        )
    })

    // function to push new character to db on submit
    async function handleSubmit(e) {
        e.preventDefault()


        // await fetch(`https://customcharactersheetbuilder.herokuapp.com/characters/new`, {
        await fetch(`https://customcharactersheetbuilder.herokuapp.com/characters/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(character)
        })
        navigate(`/characters_page/${currentUser.user_id}`)
    }

    function goBack() {
        navigate(-1)
    }

    // set description for races
    // let raceDescription;
    // if (character.race === "Dragonborn") {
    //     raceDescription = "The dragonborn are a race of humanoids whose form resembles that of a dragon, having a scaled hide and a dragonlike head. They are proud and brave, with strong ties to clan, tradition, and family."
    // }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Label htmlFor="name">Name</Form.Label>
                        <Form.Control
                            required
                            value={character.name}
                            onChange={e => setCharacter({ ...character, name: e.target.value, user_id: currentUser.user_id })}
                            className="mb-2"
                            id="name"
                            name="name"
                        />  
                    </Col>
                    <Col xs="auto">
                        <Form.Label htmlFor="race">
                            Choose Your Race:
                            <br></br>
                            <Form.Select
                                required
                                onChange={e => setCharacter({ ...character, race: e.target.value })}
                                id="race"
                                name="race"
                            >
                                <option value="" selected disabled hidden>Select an Option</option>
                                {races}
                            </Form.Select>
                        </Form.Label>
                        <br></br>
                    </Col>
                    <Col xs="auto">
                        <Form.Label htmlFor="class">
                            Choose Your Class:
                            <br></br>
                            <Form.Select
                                required
                                onChange={e => setCharacter({ ...character, class: e.target.value })}
                                id="class"
                                name="class"
                            >
                                <option value="" selected disabled hidden>Select an Option</option>
                                {classes}
                            </Form.Select>
                        </Form.Label>
                    </Col>
                </Row>
                <br></br>
                <Card style={{margin: "3em", width: "20rem"}}>
                    <Card.Img variant="top" src="../place-image.png" alt="DnD characters" style={{height: "18rem"}} />
                    <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Race: {character.race}</ListGroup.Item>
                            {/* <ListGroup.Item>{raceDescription}</ListGroup.Item> */}
                            <ListGroup.Item>Class: {character.class}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
                <Button style={{background: "#85FFF9", color: "#0F0A0A", border: "2px solid #5CFFF7"}} type="submit">Create Character</Button>
            </Form>
            <br></br>
            <button className="btn btn-secondary" onClick={goBack}>Cancle</button>
        </div>
    )
}

export default NewCharacter 