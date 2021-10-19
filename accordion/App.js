import './App.css';
import data from './data'
import Singlecontent from './component/singlecontent';
import {useState} from 'react'

function App() {
  const [content,setContene] = useState(data)
  return (
    <div>
      <div class="container">
        <h1>Perfume fragrantica</h1>
        <section>
          {content.map((e)=>{
            return <Singlecontent key={e.id}{...e}/>
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
