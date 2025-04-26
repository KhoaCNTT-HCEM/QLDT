import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import logo from "../../assets/HCEM-logo-Blue-VI.png"
import "./style.css";

const main = () => {
  const user = {
    name: "Nguyễn Văn A",
    email: "hahich4@gmail.com",
    phone: "0123456789",
    avatar: "https://res.cloudinary.com/dztpdak5k/image/upload/v1740402742/kurorumi/domg4pcysqfgvcox3khv.jpg"
  }

  const splitName = user.name.split(" ")[0][0].toUpperCase();

  return (
    <div>
      <div className="header-container">
        <div className="header-img">
          <img src={logo} alt="" />
        </div>
        <div className="header-title">
          <h1>Quản lý đào tạo khoa CNTT - HCEM</h1>
        </div>
        <div className="">
          <div className="popup">
            <label>
              <input type="checkbox" />
              <div className="burger">
              {user.avatar ? <img src={user.avatar} alt="" /> : <div className='noAvatar'>{splitName}</div>}
              </div>
              <nav className="popup-window">
                <ul>
                  <li>
                    <button>
                      <span><FaRegUser /> Thông tin cá nhân</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span><IoDocumentOutline /> Tài liệu</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span><IoLogOutOutline /> Đăng xuất</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default main
