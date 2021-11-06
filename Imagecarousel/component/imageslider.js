import Imagedata from "./imagedata";
import { AiFillBackward,AiFillForward } from "react-icons/ai";
import { useState } from "react";

const Imageslider=()=>{
    const [current,Setcurrent] = useState(0)

    const prevslide=()=>{
        current > 0 ? Setcurrent(current-1) : Setcurrent(Imagedata.length-1)
    }

    const nextslide=()=>{
        current == Imagedata.length-1 ? Setcurrent(0) : Setcurrent(current+1)
    }
    return(
        <section className="slider">
            <AiFillBackward className="left" onClick={prevslide}/>
            <AiFillForward className="right" onClick={nextslide}/>
             {Imagedata.map((data,index)=>{
                return (
                    <div className={current === index ? "slide-active" : "slide"} key={index}>
                        {index == current &&
                        (
                            <div>
                                <img src={data.image} alt={data.title}/>
                                <p>{data.title}</p>
                            </div>
                        )}
                    </div>
                )
            })} 
        </section>
    )
}

export default Imageslider;