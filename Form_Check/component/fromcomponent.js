import "../style/style.css"
import {useState} from "react"

const FormComponent = ()=> {

    const [UserName,setUserName] = useState('')
    const [Email,setEmail] = useState('')
    const [Password,setPassword] = useState('')
    const [ConPassword,setConPassword] = useState('')

    const [ErrorUserName,setErrorUserName] = useState('')
    const [ErrorEmail,setErrorEmail] = useState('')
    const [ErrorPassword,setErrorPassword] = useState('')
    const [ErrorConPassword,setErrorConPassword] = useState('')

    const [UserNameColor,setUserNameColor] = useState('')
    const [EmailColor,setEmailColor] = useState('')
    const [PasswordColor,setPasswordColor] = useState('')
    const [ConPasswordColor,setConPasswordColor] = useState('')

    const formcheck = (e)=>{
        e.preventDefault()
        if (UserName.length < 8){
            setErrorUserName("Username must be more than 8 characters.")
            setUserNameColor("red")
        }else{
            setErrorUserName("")
            setUserNameColor("green")
        }
        if (Email.includes("@")){
            setErrorEmail("")
            setEmailColor("green")
        }else{
            setErrorEmail("Invalid email format ")
            setEmailColor("red")
        }
        if (Password.length >=8 ){
            setErrorPassword("")
            setPasswordColor("green")
        }else{
            setErrorPassword("Password must be more than 8 characters.")
            setPasswordColor("red")
        }
        if (ConPassword === Password && ConPassword !== ('')){
            setErrorConPassword("")
            setConPasswordColor("green")
        }else{
            setErrorConPassword("Password is not match")
            setConPasswordColor("red")
        }
    }



    return( 
        <div className="container">
            <form className="mainfrom" onSubmit={formcheck}>
                <h1>Register From</h1>
                <div className="from">
                    <label>User Name</label>
                    <input type="text" value={UserName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:UserNameColor}}/>
                    <p>{ErrorUserName}</p>
                </div>
                <div className="from">
                    <label>E-mail</label>
                    <input type="text" value={Email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:EmailColor}}/>
                    <p>{ErrorEmail}</p>
                </div>
                <div className="from">
                    <label>Passsword</label>
                    <input type="password" value={Password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:PasswordColor}}/>
                    <p>{ErrorPassword}</p>
                </div>
                <div className="from">
                    <label>Confirm Passsword</label>
                    <input type="password" value={ConPassword} onChange={(e)=>setConPassword(e.target.value)} style={{borderColor:ConPasswordColor}}/>
                    <p>{ErrorConPassword}</p>
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default FormComponent