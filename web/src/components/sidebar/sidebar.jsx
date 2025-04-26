import React from 'react';
import { FaUserCircle, FaFileAlt, FaUpload, FaCog } from 'react-icons/fa';
import './style.css';

const Sidebar = () => {
    const user = {
        name: "Nguyễn Văn A",
        email: "hahich4@gmail.com",
        avatar: "https://res.cloudinary.com/dztpdak5k/image/upload/v1740402742/kurorumi/domg4pcysqfgvcox3khv.jpg"
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src={user.avatar} alt="User Avatar" className="sidebar-avatar" />
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
            <ul className="sidebar-menu">
                <li>
                    <FaUserCircle className="sidebar-icon" />
                    <span>Thông tin người dùng</span>
                </li>
                <li>
                    <FaFileAlt className="sidebar-icon" />
                    <span>Quản lý tài liệu</span>
                </li>
                <li>
                    <FaUpload className="sidebar-icon" />
                    <span>Upload tài liệu</span>
                </li>
                <li>
                    <FaCog className="sidebar-icon" />
                    <span>Cài đặt</span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;