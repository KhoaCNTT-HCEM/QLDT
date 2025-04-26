import React from 'react';
import logo from "../../assets/HCEM-logo-Blue-VI.png";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import "./style.css";

const Footer = () => {
    return (
        <footer className="footer-main">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="HCEM Logo" />
                    <h1>Quản lý đào tạo khoa CNTT - HCEM</h1>
                    <h3>Đồng hành cùng tri thức số</h3>
                </div>
                <div className="footer-info">
                    <h3>Khoa CNTT</h3>
                    <p>Địa chỉ: Số 160, Phố Mai Dịch, Quận Cầu Giấy, Hà Nội</p>
                    <p><IoCallOutline /> Phòng tổ chức hành chính: 024.38370425</p>
                    <p><IoCallOutline /> Hotline: 1900866854</p>
                    <p><MdOutlineMail /> Email: cntt@hcem.edu.vn</p>
                </div>
                <div className="footer-links">
                    <a href="#">Trang chủ</a>
                    <a href="#">Tài liệu</a>
                    <a href="#">Liên hệ</a>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p>© 2025 Quản lý đào tạo khoa CNTT - HCEM. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
