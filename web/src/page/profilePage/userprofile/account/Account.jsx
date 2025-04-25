import React from 'react';
import './Account.css';
import { useNavigate } from 'react-router-dom';
import avatar from "../../../../assets/Logo2.webp"


const Account = () => {
  const navigate = useNavigate();
  return (
    <div className='account'>
      <div className='form'>
        <div className='avatar'>
          <img src={avatar} alt="" />
        </div>
        <div className='otherInfo'>
          <div className='grUsername'>
            <h4 htmlFor="username">Tên Giáo Viên:</h4>
            <input 
              type="text"
              id="username"
              disabled
            />
          </div>
          <div className='grPosition'>
            <h4 htmlFor="position">chức vụ:</h4>
            <input
              type="text"
              id="position"
              disabled
            />
          </div>
          <div className="grEmail">
            <h4 htmlFor="email">Email:</h4>
            <input type="text" id="email" disabled />
          </div>
          <div className="grPhoneNumber">
            <h4 htmlFor="phoneNumber">Số điện thoại:</h4>
              <input
                type="text"
                id="phoneNumber"
                disabled
              />
          </div>
          <div className="grDateOfBirth">
            <h4 htmlFor="dateOfBirth">Ngày sinh:</h4>
              <input
                type="date"
                id="dateOfBirth"
                disabled
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account