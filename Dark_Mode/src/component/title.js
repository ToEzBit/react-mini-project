import { useContext, useState } from "react"
import Switch from"react-switch"
import { ThemeContext } from "../App"
const Title=()=>{
    const {theme,setTheme} = useContext(ThemeContext)

    const toggleswitch=(checked)=>{
        setTheme(
            theme === "light" ? "dark" : "light"
        )
        theme==="light" ? document.body.style = 'background: black;' : document.body.style = 'background: white;'
    }

    return (
        <header className={theme ==="dark" ? "dark" : "light"}>
            <span>Mode [{theme}]</span>
            <Switch 
            onChange={toggleswitch}
            checked={theme==="dark"}
            uncheckedIcon={false}
            checkedleIcon={false}
            onColor={"#ffa500"}
            />
        </header>
    )
}

export default Title