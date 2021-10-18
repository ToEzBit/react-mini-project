import light from "../pic/light.svg"
import dark from "../pic/dark.svg"
import { useContext, useState } from "react"
import { ThemeContext } from "../App"

const Content=()=>{
    const {theme} = useContext(ThemeContext)

    return(
        <main  className={theme ==="dark" ? "dark" : "light"}>
            <div>
                <h1>ToEzBit React mini project</h1>
                <p>Light and Darkmode</p>
            </div>
            <img src={theme ==="dark"?dark:light}/>
        </main>
    )
}

export default Content