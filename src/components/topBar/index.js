import React from 'react'
import "./topBar.css"

export default function TopBar() {
  return (
    <div className='topbarContainer'>
        <img class="fixed-logo" src="https://workinglive.us/wp-content/uploads/2020/07/wl-logo.png" height="40" alt="Working Live"/>
        <span className='topbar-title'>Working Live's Room</span>
    </div>
  )
}
