import { Button, Dialog, DialogTitle, List, ListItem, ListItemButton } from '@mui/material'
import React from 'react'

export default function NewMeeting(props) {
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };

    async function createNew(){
        let payload ={
            endDate: "2023-010-20T14:23:00.000Z",
            isLocked: true,
            fields: ["hostRoomUrl"],
        }
        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
            body: JSON.stringify(payload),
          };
          await fetch(
            `https://api.whereby.dev/v1/meetings`,
            options
          )
            .then((res) => res.json())
            .then((res) => {
              console.log(res)
            })
            .catch((err) => {
              console.log(err);
            });
    }

    
    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Set backup account</DialogTitle>

            <Button onClick={createNew}>Create </Button>
        </Dialog>
    )
}
