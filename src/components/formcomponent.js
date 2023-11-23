

export default function FormComponent(){

    return (
        <div className="container">
            <from className="from">
                <div className="from-control">
                    <label>ชื้อผู้ใช้</label>
                    <input type="text"></input>
                    <small>error massage</small>
                </div>
                <div className="from-control">
                    <label>อีเมล</label>
                    <input type="text"></input>
                    <small>error massage</small>
                </div>
                <div className="from-control">
                    <label>รหัสผ่าน</label>
                    <input type="text"></input>
                    <small>error massage</small>
                </div>
                <div className="from-control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="text"></input>
                    <small>error massage</small>
                </div>
                <button type="submit">ยืนยัน</button>
            </from>
        </div>
    )

}