import Classes from "./Classes"
import Races from "./Races"
import Spells from "./Spells"

function HomeView() {
    return (
        <div>
            <Races />
            <Classes />
            <Spells />
        </div>
    )
}

export default HomeView