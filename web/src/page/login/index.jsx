import React from "react";
import "../authContainer/style.css";

const Login = ({ onSwitch }) => {
    return (
        <div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Đăng nhập</h1>

                    <input type="email" placeholder="Email hoặc ID" />
                    <input type="password" placeholder="Nhập mật khẩu" />
                    <button>Đăng nhập</button>
                </form>
            </div>
        </div>
    )
}

export default Login