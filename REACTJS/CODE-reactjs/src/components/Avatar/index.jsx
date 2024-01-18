import React, { useEffect } from 'react';
import './style.scss';

function Avt({
  src,
  name,
  maxInitial = 999,
  email,
  phone,
  isPhoneFirst = true,
}) {
  const nameTitle = () => {
    const nameArr = name.split(' ');
    const newArr = nameArr.map((text) => text.slice(0, 1));
    return newArr;
  };

  useEffect(() => {
    nameTitle();
  }, []);

  return (
    <div className="cAvatar">
      <div className="avt">
        {src ? (
          <img width={100} height={100} src={src} alt="" />
        ) : (
          <div>{nameTitle().join('').slice(0, maxInitial)}</div>
        )}
      </div>

      <div className="info">
        <h5>{name}</h5>
        {isPhoneFirst ? (
          <>
            <small>{phone}</small>
            <h6>{email}</h6>
          </>
        ) : (
          <>
            <h6>{email}</h6>
            <small>{phone}</small>
          </>
        )}
        {/* <h6>{email}</h6>
        <small>{phone}</small> */}
      </div>
    </div>
  );
}

export default Avt;