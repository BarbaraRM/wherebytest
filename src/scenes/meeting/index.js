import React, { useState } from 'react'
import "./meeting.css"
import TopBar from '../../components/topBar'

export default function Meeting() {
  const [open, setopen] = useState(true)
  return (
    <div className='meeting-main-container'>
      <TopBar />
      <div className='meetingIframe'>
        <iframe 
          className='zoom-meeting-container'
          src="https://working-live.whereby.com/demo-b7922b77-e989-47f4-b6d0-33604fb3852c" allow="camera; microphone; fullscreen; speaker; display-capture" />
      </div>
      
    </div>
  )
}
