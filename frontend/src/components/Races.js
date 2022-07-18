// import { useContext, useEffect, useState } from "react";
// import { Character } from "../contexts/Character";

// function Races() {

//     const { character, setCharacter } = useContext(Character)

//     const [raceData, setRaceData] = useState([])

//     // retrieve possible character races from API
//     useEffect(() => {
//         const API_URL = `https://customcharactersheetbuilder.herokuapp.com/races`
//         const fetchData = async () => {
//             const response = await fetch(API_URL)
//             const resData = await response.json()
//             setRaceData(resData.results)
//         }
//         fetchData()
//     }, [])

//     // iterate through races to return each item individually
//     const races = raceData.map((race, i) => {
//         return (
//             <option value={race.name} key={i}>{race.name}</option>
//         )
//     })

//     return (
//         <div>
//             <label htmlFor="race">
//                 Choose Your Race:
//                 <br></br>
//                 <select 
//                     required
//                     value={character.race}
//                     onChange={e => setCharacter({ ...character, race: e.target.value})}
//                     id="race"
//                     name="race"
//                 >
//                     {races}
//                 </select>
//             </label>
//         </div>
//     )
// }

// export default Races