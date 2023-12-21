import React from "react";

import "./style.css";


function FormBasic(props) {
    // const [firsName, setFirsName] = useState('');
    return(
        <div className="container">
            <div>
            <label htmlFor="Ho">Họ</label>
            <input id="Ho" type="text" />
            <label htmlFor="Ho">Tên</label>
            <input id="Ho" type="text" />
            <label htmlFor="Ho">Tuổi</label>
            <input id="Ho" type="text" />
            <label htmlFor="Ho">Giới tính</label>
            <input id="Ho" type="text" />
            </div>    
        </div>
    );
}
export default FormBasic;