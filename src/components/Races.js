import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";

function Races() {
    const [raceData, setRaceData] = useState([])

    // retrieve possible character races from API
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
            <Dropdown.Item key={i}>{race.name}</Dropdown.Item>
        )
    })

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Choose Your Race
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {races}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Races