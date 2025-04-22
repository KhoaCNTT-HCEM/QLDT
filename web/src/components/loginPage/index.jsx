import { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./style.css";
import logo from "../../assets/HCEM-logo-Blue-VI.png";
import ArrowRightIcon from '../../icon/loginAndRegister/ArrowRightIcon';
import { Store } from "../../Store.jsx";

const LoginPage = () => {
    const navigate = useNavigate();
    const store = useContext(Store);
    useEffect(() => {
        if (store.currentUser) {
            navigate("/");
        }
    }, []);

    // const location = useLocation();
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [location]);
    // submit
    // const [formData, setFormData] = useState({
    //     id: "",
    //     password: "",
    // });
    // const handleChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //     });
    // };

    // const handleSubmit = (e) => {
    //     // setLoading(true);
    //     e.preventDefault();
    //     const data = response.data;
    //     if (data) {
    //         // localStorage.setItem("currentUser", JSON.stringify(data.data));
    //         store.setCurrentUser(data.data);
    //     }
    //     // message.success((response.data.message), 2);
    //     navigate("/");
    // };

    return (
        <div className='loginPage'>
            <img className='backgroud' src={logo} alt="" />
            <div className='overlay'>
                <div className="content">
                    <h1>Đăng Nhập</h1>
                    <form className='loginForm' >
                        <div className="row">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="text"
                                id="email"
                                placeholder='Nhập id giáo viên'
                                name='email'

                            />
                        </div>
                        <div className="row">
                            <label htmlFor="password">Mật khẩu:</label>
                            <input
                                type="password"
                                id='password'
                                placeholder='Nhập mậy khẩu'
                                name='password'

                            />
                        </div>
                        <button type='submit'>Đăng nhập</button>
                    </form>
                    <div
                        className="groupRedirectToRegister"

                    >
                        <p>Bạn chưa có tài khoản?</p>
                        <div 
                            className='redirectToRegister'
                            onClick={() => {
                                navigate("/register");
                            }}
                        >
                            <p>Đăng ký</p>
                            <ArrowRightIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage