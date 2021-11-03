import './navigation.css'
import {Link} from "react-router-dom"
import { AiOutlineBars as Bar,AiOutlineCloseSquare} from "react-icons/ai";
import { useState } from "react";
import Menudata from '../menudata';

const Navaigation=()=>{
    const [menu,setMenu] = useState(false)
    const togglemenu=()=>setMenu(!menu)
    return (
        <aside>
            <div className='navbar'>
                <div className='navtoggle'>
                    <Link to="#" className="menubar">
                        <Bar onClick={togglemenu}/>
                    </Link>
                </div>
            </div>
            <nav className={menu ? 'nav-active' : 'nav-non-active'}>
                <ul className='navitem' onClick={togglemenu}>
                    <Link to="#" className="menubar">
                        <AiOutlineCloseSquare onClick={togglemenu}/>
                    </Link>
                    {Menudata.map((menu,index)=>{
                        return(
                            <li className='text'>
                                <Link to={menu.path}>{menu.icon}<span>{menu.title}</span></Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )

}

export default Navaigation;