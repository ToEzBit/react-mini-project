import { useState } from "react"
import { AiFillPlusSquare,AiOutlineMinusSquare } from "react-icons/ai";

const Singlecontent=({title,description,pic,link})=>{
    const [detail,setDetail] = useState(false)
    return(
        <article className="content">
            <header>
                <h2>{title}</h2>
                <button onClick={()=>setDetail(!detail)}>{detail ? <AiOutlineMinusSquare/> : <AiFillPlusSquare/>}</button>
            </header>
            {detail && <p>{description}</p>}
            <div className="picpo">
                {detail && <img src={pic}></img>}
            </div>
            {detail && <a href={link}>More Detail</a>}
        </article>
    )
}

export default Singlecontent