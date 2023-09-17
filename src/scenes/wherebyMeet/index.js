import React, { useState } from 'react'
import "./wemeeting.css"
import TopBar from '../../components/topBar'

const roomUrl = "https://working-live.whereby.com/demo-b7922b77-e989-47f4-b6d0-33604fb3852c";
export default function WEMeeting() {
  const [open, setopen] = useState(true)

  return (
    <div className='we-meeting-main-container'>
      <TopBar />
      <div className='we-meetingIframe'>
         <whereby-embed minimal  room={roomUrl} />
      </div>
      
    </div>
  )
}
