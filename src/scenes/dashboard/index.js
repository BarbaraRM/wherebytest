import React from 'react'
import TopBar from '../../components/topBar'
import { Button } from '@mui/material'
import "./dashboard.css"
import NewMeeting from '../../components/newMeeting';

const meeting_id = "demo-dd48381a-1999-4608-aeb1-c63b8508ab2f";
export default function Dashboard() {
  const [open, setOpen] = React.useState(false);

  const openIframeMeeting = () => {
    window.open(`${window.location.origin}/iframe/${meeting_id}`, "_blank");
  };

  const openWEMeeting = () => {
    window.open(`${window.location.origin}/we/${meeting_id}`, "_blank");
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function getMeetings(){
    let payload ={
        endDate: "2023-010-20T14:23:00.000Z",
        isLocked: true,
        fields: ["hostRoomUrl"],
    }
    const optioans = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      };
    fetch(
        `https://api.whereby.dev/v1/meetings`,optioans
      )
        .then((res) => res.json())
        .then((res) => {
          console.log("get meetings response:",res)
        })
        .catch((err) => {
          console.log(err);
        });
}


  return (
    <div className='dashboardContainer'>
        <TopBar />
        <div className='inline-container'>
          <Button variant="outlined" onClick={handleOpen}>Create Room</Button>
          <Button variant="outlined" onClick={getMeetings}>Get all meetings</Button>
          <Button variant="outlined" onClick={openIframeMeeting}>Join Iframe</Button>
          <Button variant="outlined" onClick={openWEMeeting}>Join Whereby</Button>
        </div>
        <NewMeeting 
        open={open}
        onClose={handleClose}
        />
    </div>
  )
}
