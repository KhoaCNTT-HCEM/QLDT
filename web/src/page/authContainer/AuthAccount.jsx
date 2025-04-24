import React, { useState } from "react";
import Login from '../login/index.jsx';
import Register from '../register/index.jsx';
import '../../App.css'
import LogoHeader from "../../icon/LogoHeader/LogoHeader.jsx";



const AuthContainer = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSwitch = () => {
        setIsSignUp(!isSignUp);
    };
    return (
        <>
            <div>
                <header>
                    <div className="logo">
                        <LogoHeader />
                    </div>
                </header>
                <main>
                    <div className="title">
                        <h2>PHẦN MỀM QUẢN LÝ ĐÀO TẠO KHOA CNTT - HCEM</h2>
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
                                            <h1>Xin Chào!</h1>
                                            <p>Nhập thông tin cá nhân của bạn ở đây để tạo tài khoản của riêng bạn</p>
                                            <button className="ghost" onClick={handleSwitch}>Đăng nhập</button>
                                        </>
                                    ) : (
                                        <>
                                            <h1>Xin Chào!</h1>
                                            <p>Chúc giáo viên một ngày tốt lành</p>
                                            <button className="ghost" onClick={handleSwitch}>Đăng kí</button>
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