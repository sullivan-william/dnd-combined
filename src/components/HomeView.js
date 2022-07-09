import Classes from "./Classes"
import Races from "./Races"
import Spells from "./Spells"

function HomeView() {
    return (
        <div>
            <Races />
            <br></br>
            <Classes />
            <br></br>
            <Spells />
        </div>
    )
}

export default HomeView