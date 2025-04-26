import React from 'react';
import '../authContainer/style.css'
const Register = () => {
  return (
    <div >
      <div className="form-container sign-up-container">
        <form className='auth-form' action="#">
          <h1 className='auth-title'>Đăng ký</h1>
          <input className='auth-input' type="email" placeholder="Email" />
          <input className='auth-input' type="text" placeholder="Tên giáo viên" />
          <input className='auth-input' type="password" placeholder="Nhập mật khẩu" />
          <input className='auth-input' type="password" placeholder="Nhập lại mật khẩu" />
          <button className='auth-btn'>Đăng ký</button>
        </form>
      </div>
    </div>
  )
}

export default Register