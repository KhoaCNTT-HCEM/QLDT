import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/sidebar'
import Footer from '../../components/footer/Footer'
import ProfilePage from '../profilePage/index'

const home = () => {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div className="" style={{ display: 'flex' }}>
        <div className="">
            <Sidebar />
        </div>
        <div className="">
            Content
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default home
