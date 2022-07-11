import { useContext, useEffect, useState} from "react"
import { useNavigate, useParams } from "react-router"
import { Character } from "../contexts/Character"
import { CurrentUser } from "../contexts/CurrentUser"

function EditCharacter() {

    const navigate = useNavigate()

    const { characterId } = useParams()

    const { currentUser } = useContext(CurrentUser)

    const { character, setCharacter } = useContext(Character)

    useEffect(() => {
        const API_URL = `http://localhost:3001/characters/${characterId}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setCharacter(resData)
        }
        fetchData()
    }, [characterId])

    async function deleteCharacter() {
        await fetch(`http://localhost:3001/characters/${characterId}`, {
            method: 'DELETE'
        })
        navigate(`/characters_page/${currentUser.user_id}`)
    }

    // retrieve possible character races from API
    const [raceData, setRaceData] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:3001/races`
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
        const API_URL = `http://localhost:3001/classes`
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

        await fetch(`http://localhost:3001/characters/edit/${characterId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(character)
        })
        navigate(`/characters_page/${currentUser.user_id}`)
    }

    function cancel() {
        navigate(-1)
    }

    return (
        <div>
            <h1>Edit Character</h1>
            <form onSubmit={handleSubmit}>
                <div className="col-sm-6 form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        required
                        value={character.name}
                        onChange={e => setCharacter({ ...character, name: e.target.value, user_id: currentUser.user_id })}
                        className="form-control"
                        id="name"
                        name="name"
                    />
                </div>
                <br></br>
                <div>
                    <label htmlFor="race">
                        Choose Your Race:
                        <br></br>
                        <select
                            required
                            value={character.race}
                            onChange={e => setCharacter({ ...character, race: e.target.value })}
                            id="race"
                            name="race"
                        >
                            {races}
                        </select>
                    </label>
                </div>
                <br></br>
                <div>
                    <label htmlFor="class">
                        Choose Your Class:
                        <br></br>
                        <select
                            required
                            value={character.class}
                            onChange={e => setCharacter({ ...character, class: e.target.value })}
                            id="class"
                            name="class"
                        >
                            {classes}
                        </select>
                    </label>
                </div>
                <br></br>
                <div>
                <input className="btn btn-primary" type="submit" value="Confirm Changes" />
                <br></br>
                <button className="btn btn-danger" onClick={deleteCharacter}>Delete</button>
                </div>
            </form>
            <br></br>
            <button className="btn btn-secondary" onClick={cancel}>Cancel</button>
        </div>
    )
}

export default EditCharacter