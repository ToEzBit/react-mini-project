import { AiFillEdit,AiFillDelete } from "react-icons/ai";

const List=({id,title,removedata,editdata})=>{
    return (
        <div className="list-item">
            <p className="title">{title}</p>
            <div className="button-container">
                <AiFillEdit onClick={()=>editdata(id)} className="btn"/>
                <AiFillDelete onClick={()=>removedata(id)} className="btn"/>
            </div>
        </div>
    )
}

export default List;