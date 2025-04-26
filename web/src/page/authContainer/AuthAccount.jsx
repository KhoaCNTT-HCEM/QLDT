import React, { useState } from "react";
import Login from '../login/index.jsx';
import Register from '../register/index.jsx';
import './style.css'
import LogoHeader from "../../icon/LogoHeader/LogoHeader.jsx";



const AuthContainer = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSwitch = () => {
        setIsSignUp(!isSignUp);
    };
    return (
        <>
            <div className="auth-container">
                <header>
                    <div className="logo">
                        <LogoHeader />
                    </div>
                </header>
                <main>
                    <div className="title">
                        <h2 className="auth-header-title">PHẦN MỀM QUẢN LÝ ĐÀO TẠO KHOA CNTT - HCEM</h2>
                    </div>
                    <div className={`container ${isSignUp ? "right-panel-active" : ""}`}>
                        {isSignUp ? (
                            <Register onSwitch={handleSwitch} />
                        ) : (
                            <Login onSwitch={handleSwitch} />
                        )}
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className={`overlay-panel ${isSignUp ? "overlay-left" : "overlay-right"}`}>
                                    {isSignUp ? (
                                        <>
                                            <h1 className="auth-title">Xin Chào!</h1>
                                            <p className="auth-text">Nhập thông tin cá nhân của bạn ở đây để tạo tài khoản của riêng bạn</p>
                                            <button className="auth-btn" onClick={handleSwitch}>Đăng nhập</button>
                                        </>
                                    ) : (
                                        <>
                                            <h1 className="auth-title">Xin Chào!</h1>
                                            <p className="auth-text">Chúc giáo viên một ngày tốt lành</p>
                                            <button className="auth-btn" onClick={handleSwitch}>Đăng ký</button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default AuthContainer