import React from 'react'
import logoHeader from "../../assets/HCEM-logo-Blue-VI.png"
import "./LogoHeader.css"
const LogoHeader = () => {
    return (
        <div>
            <img className='logo' src={logoHeader} alt="" />
        </div>
    )
}

export default LogoHeader