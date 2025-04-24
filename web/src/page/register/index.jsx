import React from 'react';
import '../../App.css'
const Register = () => {
  return (
    <div>
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Đăng kí</h1>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Tên giáo viên" />
          <input type="password" placeholder="Nhập mật khẩu" />
          <input type="password" placeholder="Nhập lại mật khẩu" />
          <button>Đăng kí</button>
        </form>
      </div>
    </div>
  )
}

export default Register