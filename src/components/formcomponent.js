
import "./formcomponent.css"


export default function FormComponent(){

    return (
        <div className="container">
            <form className="form">
                <h2>แบบฟอร์มการลงทะเบียน</h2>
                <div className="form-control">
                    <label>ชื้อผู้ใช้</label>
                    <input type="text"></input>
                    <small>error massage</small>
                </div>
                <div className="form-control">
                    <label>อีเมล</label>
                    <input type="text"></input>
                    <small>error massage</small>
                </div>
                <div className="form-control">
                    <label>รหัสผ่าน</label>
                    <input type="text"></input>
                    <small>error massage</small>
                </div>
                <div className="form-control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="text"></input>
                    <small>error massage</small>
                </div>
                <button type="submit">ยืนยัน</button>
            </form>
        </div>
    )

}