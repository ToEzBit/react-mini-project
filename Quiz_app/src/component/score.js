import { useContext} from "react"
import { Datacontext} from "../App"
import QuestionData from "../Data/Question"

const Score = ()=>{
    const {score,setScore,setAppPage} = useContext(Datacontext)
    const retry=()=>{
        setAppPage("Menu")
        setScore(0)
    }

    return(
        <div className="Score">
            <h1>Your Score !</h1>
            <p>{`${score} / ${QuestionData.length}`}</p>
            <button onClick={retry}>Retry</button>
        </div>
    )
}

export default Score