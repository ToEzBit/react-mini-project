import Menu from "./component/menu";
import Quiz from "./component/quiz";
import Score from "./component/score";
import {createContext, useState} from "react"
import "./App.css"

export const Datacontext = createContext('')

function App() {
  const [AppPage,setAppPage] = useState('Menu')
  const [score,setScore] = useState(0)
  
  return (
    <Datacontext.Provider value ={{AppPage,setAppPage,score,setScore}}>
      <div className="App">
        <h1>Quiz</h1>
        {AppPage ==="Menu" && <Menu/>}
        {AppPage ==="Quiz" &&<Quiz/>}
        {AppPage ==="Score" &&<Score/>}
      </div>
    </Datacontext.Provider>
  );
}

export default App;
