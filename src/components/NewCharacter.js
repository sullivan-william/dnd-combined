import { useContext, useState, useEffect } from "react"
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
            const response2 = await fetch(API_URL)
            const resData2 = await response2.json()
            setClassData(resData2.results)
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


        await fetch(`http://localhost:3001/characters/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(character)
        })
        navigate("/characters_page")
    }

    return (
        <div>
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
                <input className="btn btn-primary" type="submit" value="Create Character" />
            </form>
        </div>
    )
}

export default NewCharacter 