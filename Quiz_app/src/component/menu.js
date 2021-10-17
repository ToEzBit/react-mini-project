import {useContext} from "react"
import {Datacontext} from "../App"

const Menu = ()=> {
    const {setAppPage} = useContext(Datacontext)
    return(
        <div className ="Menu" >
            <h1>Menu component</h1>
            <button onClick={()=>setAppPage("Quiz")}>Start Quiz</button>
        </div>
    )
}

export default Menu