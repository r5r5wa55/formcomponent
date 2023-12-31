
import { useState } from "react"
import "./formcomponent.css"


export default function FormComponent(){
    const [username,setUserNmae]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [repassword,setRepassword]= useState("");


    const [errusername,setErrUserNmae]= useState("");
    const [erremail,setErrEmail]= useState("");

    const [colorname,setColorName]= useState("");
    const [coloremail,setColorEmail]= useState("");

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
                    <input type="password" value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }}></input>
                    <small>error massage</small>
                </div>
                <div className="form-control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="password" value={repassword} onChange={(e)=>{
                        setRepassword(e.target.value)
                    }}></input>
                    <small>error massage</small>
                </div>
                <button type="submit">ยืนยัน</button>
            </form>
        </div>
    )

}