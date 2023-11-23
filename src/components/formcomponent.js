
import { useState } from "react"
import "./formcomponent.css"


export default function FormComponent(){
    const [username,setUserNmae]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [repassword,setRepassword]= useState("");


    const [errusername,setErrUserNmae]= useState("");
    const [erremail,setErrEmail]= useState("");
    const [errpassword,setErrpassword]= useState("");
    const [errrepassword,setErrRepassword]= useState("");

    const [colorname,setColorName]= useState("");
    const [coloremail,setColorEmail]= useState("");
    const [colorpassword,setColorPassword]= useState("");
    const [colorrepassword,setColorRePassword]= useState("");
    function checkError(e){
        e.preventDefault()
        if(username.length < 8){
            setErrUserNmae("ป้อนชื่อผู้ใช้จำนวนมากกว่า 8 ตัวอักษร")
            setColorName("red")
        }else{
            setErrUserNmae("")
            setColorName("green")
        }

        if(email.includes("@")){
            setErrEmail("")
            setColorEmail("green")
        }else{
            setErrEmail("รูปแบบไม่ถูกต้อง")
            setColorEmail("red")
        }
        if(password.length < 8){
            setErrpassword("ป้อนชื่อผู้ใช้จำนวนมากกว่า 8 ตัวอักษร")
            setColorPassword("red")

        }else{
            setErrpassword("")
            setColorPassword("green")
 
        }
        if(password !=="" && repassword === password){
            setErrRepassword("")
            setColorRePassword("green")
 

        }else{
            setErrRepassword("รหัสไม่ถูกต้อง")
            setColorRePassword("red")
 
        }
  


    }

    return (
        <div className="container">
            <form className="form" onSubmit={checkError}>
                <h2>แบบฟอร์มการลงทะเบียน</h2>
                <div className="form-control">
                    <label>ชื้อผู้ใช้</label>
                    <input type="text" value={username} style={{borderColor:colorname}} onChange={(e)=>{
                        setUserNmae(e.target.value)
                    }}></input>
                    <small>{errusername}</small>
                </div>
                <div className="form-control">
                    <label>อีเมล</label>
                    <input type="text" value={email}style={{borderColor:coloremail}} onChange={(e)=>{
                        setEmail(e.target.value)
                    }}></input>
                    <small>{erremail}</small>
                </div>
                <div className="form-control">
                    <label>รหัสผ่าน</label>
                    <input type="password" value={password} style={{borderColor:colorpassword}} onChange={(e)=>{
                        setPassword(e.target.value)
                    }}></input>
                    <small>{errpassword}</small>
                </div>
                <div className="form-control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="password" value={repassword} style={{borderColor:colorrepassword}} onChange={(e)=>{
                        setRepassword(e.target.value)
                    }}></input>
                    <small>{errrepassword}</small>
                </div>
                <button type="submit">ยืนยัน</button>
            </form>
        </div>
    )

}