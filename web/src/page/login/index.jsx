import React from "react";
import "../authContainer/style.css";

const Login = ({ onSwitch }) => {
    return (
        <div>
            <div className="form-container sign-in-container">
                <form className="auth-form" action="#">
                    <h1 className="auth-title">Đăng nhập</h1>

                    <input className="auth-input" type="email" placeholder="Email hoặc ID" />
                    <input className="auth-input" type="password" placeholder="Nhập mật khẩu" />
                    <button className="auth-btn">Đăng nhập</button>
                </form>
            </div>
        </div>
    )
}

export default Login