import React, { useState } from "react";

import "./style.css";

function FormBasic(props) {
  const [user, setUser] = useState({
    firstName : '',
    lastName : '',
    age : 18 ,
  });
  const [errors, setErrors] = useState({
    firstName : [],
    lastName : [],
    age : [],
  });


//   const onChangeUser = (fieldName,e) => {    //style 1
//     setUser((prevState) => ({
//         ...prevState,
//         [fieldName]: e.target.value,
//     }));
//   }

  const onChangeUser = (e) => {  
    const { name , value } = e.target;
    setErrors((prevState) => ({
      ...prevState,
      [name]: [],
  }));
  
    setUser((prevState) => ({
        ...prevState,
        [name]: value,
    }));
  }


  const onSubmitData = (e) => { 
    e.preventDefault();
    let err = {
        firstName : [],
        lastName : [],
        age : [],
    }
    const { age, firstName , lastName } = user;
    if (!age) {
        err = {
          ...err,
          age: [...err.age, 'Vui lòng nhập tuổi'],
        };
      }
  
      if (age && age < 18) {
        err = {
          ...err,
          age: [...err.age, 'Bạn phải 18+'],
        };
      }
  
      if (!firstName) {
        err = {
          ...err,
          firstName: [...err.firstName, 'Vui lòng nhập họ'],
        };
      }
  
      if (firstName && firstName.length > 10) {
        err = {
          ...err,
          firstName: [...err.firstName, 'Họ kh vượt quá 10 ký tự'],
        };
      }
  
      if (!lastName) {
        err = {
          ...err,
          lastName: [...err.lastName, 'Vui lòng nhập tên'],
        };
      }
  
      if (lastName && lastName.length > 10) {
        err = {
          ...err,
          lastName: [...err.lastName, 'Tên kh vượt quá 10 ký tự'],
        };
      }
  
      if (
        err.age.length > 0 ||
        err.firstName.length > 0 ||
        err.lastName.length > 0
      ) {
        setErrors(err);
        return;
      }
    
    console.log(`Gửi thành công thông tin`,user);

  };

  return (
    <form className="container" onSubmit={onSubmitData}>
      <div>
        <label htmlFor="first-name">Họ</label>
        <input
          id="first-name"
          type="text"
          value={user.firstName}
          name= "first-name"
          onChange={onChangeUser}
        />
         {errors.firstName.length > 0 && (
          <ol>
            {errors.firstName.map((item) => (
              <li>{item}</li>
            ))}
          </ol>
        )}
      </div>
      <div>
        <label htmlFor="last-name">Tên</label>
        <input
          id="last-name"
          type="text"
          value={user.lastName}
          name="last-name"
          onChange={onChangeUser}
        />
        {errors.lastName.length > 0 && (
          <ol>
            {errors.lastName.map((item) => (
              <li>{item}</li>
            ))}
          </ol>
        )}
      </div>
      <div>
        <label htmlFor="age">Tuổi</label>
        <input
          id="age"
          type="number"
          min={0}
          value={user.age}
          name="age"
          onChange={onChangeUser}
        />
        {errors.age.length > 0 && (
          <ol>
            {errors.age.map((item) => (
              <li>{item}</li>
            ))}
          </ol>
        )}
      </div>

      {/* <button onClick={onSubmit}>Khai báo</button> */}

      <input type="submit" value="Khai báo"></input>
    </form>
  );
}
export default FormBasic;
