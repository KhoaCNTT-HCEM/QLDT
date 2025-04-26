import React from 'react';
import './style.css';
import banner from "../../assets/banner.jpeg"
import { useParams } from 'react-router-dom';
import UserSidebar from './userprofile/userSidebar/UserSidebar.jsx';
import Account from './userprofile/account/Account.jsx';
import AccountSetting from './userprofile/accountSetting/AccountSetting.jsx';

const ProfilePage = () => {
    const { activepage } = useParams()
    return (
        <div className='profile'>
            <div className="heading">
                <img className='bannerimg' src={banner} alt="" />
                <div className='bannerheading'>
                    <h1>My Profile</h1>
                </div>
            </div>
            <div className='profilein'>
                <div className='left'>
                    <UserSidebar activepage={activepage} />
                </div>
                <div className='right'>
                    {activepage === 'account' && <Account />}
                    {activepage === 'accountsetting' && <AccountSetting />}
                </div>
            </div>
        </div>
    )
}

export default ProfilePage