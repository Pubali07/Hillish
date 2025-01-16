import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/img'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br/>RunoFresh App</p>
      <div className="app-download-plateforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
