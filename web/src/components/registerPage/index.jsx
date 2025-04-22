import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/HCEM-logo-Blue-VI.png";
import "./style.css"
import { Store } from "../../Store.jsx";
import ArrowRightIcon from '../../icon/loginAndRegister/ArrowRightIcon';

const RegisterPage = () => {
  const navigate = useNavigate();
  const store = useContext(Store);
  useEffect(() => {
    if (store.currentUser) {
      navigate("/");
    }
  }, []);
  return (
    <div className='registerPage'>
      <img className='background' src={logo} alt="" />
      <div className="overlay">
        <div className="content">
          <h1>Đăng ký</h1>
          <form className='registerForm'>
            <div className='row'>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id='email'
                placeholder='Nhập email'
                name='email'
              />
            </div>
            <div className='row'>
              <label htmlFor="username">Tên giáo viên</label>
              <input
                type="text"
                id='username'
                placeholder='Nhâp tên giáo viên'
                name='username'
              />
            </div>
            <div className="row">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                id='password'
                placeholder='Nhập mật khẩu'
                name='password'
              />
            </div>
            <div className='row'>
              <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
              <input
                type="password"
                id='confirmPassword'
                placeholder='Nhập lại mật khẩu'
                name='confirmPassword'
              />
            </div>
            <button type='submit'>Đăng ký</button>
          </form>
          <div className='groupRedirectToLogin'>
            <p>Bạn đã có tài khoản?</p>
            <div
              className="redirectToLogin"
              onClick={() => {
                navigate("/");
              }}
            >
              <p>Đăng nhập</p>
              <ArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage