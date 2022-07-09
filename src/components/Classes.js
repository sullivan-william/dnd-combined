import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";

function Classes() {
    const [classData, setClassData] = useState([])

    // retrieve possible character classes from API
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
            <Dropdown.Item key={i}>{singleClass.name}</Dropdown.Item>
        )
    })

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Choose Your Class
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {classes}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Classes