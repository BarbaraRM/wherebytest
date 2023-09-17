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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmFwcGVhci5pbiIsImF1ZCI6Imh0dHBzOi8vYXBpLmFwcGVhci5pbi92MSIsImV4cCI6OTAwNzE5OTI1NDc0MDk5MSwiaWF0IjoxNjk0OTY0NTk2LCJvcmdhbml6YXRpb25JZCI6MTkzNjU5LCJqdGkiOiJmMTQzMzdkNi0xMzk2LTQwZTEtOTUzNS04M2ZhZDZjZTc3ZWUifQ.qn_0QEjQTX0I2-S_6-Z9HUwdGFKtWMbBnqA-hPeb9yo`,
          Connection:"keep-alive",
          Accept:"*/*",
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
