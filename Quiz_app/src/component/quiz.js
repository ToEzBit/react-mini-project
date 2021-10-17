import { useContext, useEffect, useState } from "react"
import { Datacontext } from "../App"
import QuestionData from "../Data/Question"

const Quiz = ()=>{
    const [current,setCurrent] = useState(0)
    const [reply,setReply] = useState("")
    const {score,setScore,setAppPage} = useContext(Datacontext)

    useEffect(()=>{
        checkanswer()
    },[reply])

    const checkanswer=()=>{
        if(reply !== ""){
            if(reply === QuestionData[current].Answer){
                setScore(score+1)
                setReply("")
                nextQuestion()
            }
            else{
                setReply("")
                nextQuestion()

            }
        }
    }

    const nextQuestion=()=>{
        setCurrent(current+1)
        if(current+1 == QuestionData.length){
            setAppPage("Score")
        }
    }
    return(
        <div className="Quiz">
            <h1>{QuestionData[current].question}</h1>
            <div className="Choice">
                <button onClick={()=>setReply("A")}>{QuestionData[current].A}</button>
                <button onClick={()=>setReply("B")}>{QuestionData[current].B}</button>
                <button onClick={()=>setReply("C")}>{QuestionData[current].C}</button>
                <button onClick={()=>setReply("D")}>{QuestionData[current].D}</button>
            </div>
        <p>{`${current+1} / ${QuestionData.length}`}</p>
        </div>
    )
}

export default Quiz