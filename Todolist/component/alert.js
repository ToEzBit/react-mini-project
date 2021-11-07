import { useEffect } from "react";

const Alertdisplay=({msg,type,Setalert,data})=>{

    useEffect(()=>{
        const delay = setTimeout(()=>{
            Setalert({show:false,msg:"",type:""})
        },2500)
        return()=>clearTimeout(delay)
        // eslint-disable-next-line
    },[data])

    return(
        <div className="alert">
            <p className={type}>{msg}</p>
        </div>

    )
}

export default Alertdisplay;