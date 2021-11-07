import "./App.css"
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import List from "./component/list";
import Alertdisplay from "./component/alert";

function App() {
  const [textin,Settextin] = useState("")
  const [data,Setdata] = useState([])
  const [alert,Setalert] = useState({show:false,msg:"",type:""})
  const [checkedit,Setcheckedit] = useState(false)
  const [editid,Seteditid] = useState("")


  const submitdata=(e)=>{
      e.preventDefault()
      if(!textin){
        Setalert({show:true,msg:"Please fill out space",type:"error"})
      }else if(checkedit && textin){
        const newdata = data.map((item)=>{
          if(item.id === editid){
            return {...item,title:textin}
          }
          return item
        })
        Setdata(newdata)
        Setcheckedit(false)
        Settextin("")
      }else{
        const newitem = {
          id:uuidv4(),
          title:textin
        }
        Setdata([...data,newitem])
        Settextin("")
        Setalert({show:true,msg:"Succes",type:"succes"})
      }
  }

  const removedata=(id)=>{
    Setdata(data.filter((item)=>item.id !== id))
    Setalert({show:true,msg:"successfully deleted !",type:"succes"})
  }

  const editdata=(id)=>{
    console.log(id);
    Setcheckedit(true)
    const search = data.find((item)=>item.id === id)
    Seteditid(id)
    Settextin(search.title)
  }

  return (
    <div className="container">
      <h1>To Do List </h1>
      {alert.show && <Alertdisplay {...alert} Setalert={Setalert} data={data}/>}
      <form className="formgroup">
        <div className="formcontrol">
          <input type="text" className="text-input" onChange={(e)=>Settextin(e.target.value)} value={textin}/>
          <button type="submit" className="submit-btn"onClick={submitdata}>
            {checkedit ? "Edit" : "Subimt"}
          </button>
        </div>
      </form>
      <div className="list-container">
        {data.map((e,index)=>{
          return(
            <List key={index} {...e} removedata={removedata} editdata={editdata}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
