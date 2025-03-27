import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import {  IconButton, Stack } from '@mui/material'
import { grayColor , orange } from '../constants/colors'
import { AttachFile as AttachFileIcon, Send as SendIcon} from '@mui/icons-material'
import {InputBox} from '../components/styles/StyledComponent'
import FileMenu from '../components/dialogs/FileMenu'
import { sampleMessage } from '../constants/sampledata'
import MessageComponent from '../components/shared/MessageComponent'

function Chat() {

  const containerRef = React.useRef(null)

const user = {
  _id : "sjnj",
  name : "puneet"
}
  return (
  <>
   <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
          // width:"90vh"
          // px: "20rem"
        }}
      >
          {
            sampleMessage.map((i) => (
             < MessageComponent message={i} user={user} key={i._id}/>
            ))
          }
      </Stack>

      <form style={{height:"10%"}}>
          <Stack
            direction={"row"}
            height={"100%"}
            padding={"1rem"}
            alignItems={"center"}
            position={"relative"}>

            <IconButton
             sx={{
              position: "absolute",
              left: "1.5rem",
              rotate: "30deg",
            }}>

              <AttachFileIcon/>

            </IconButton>

            <InputBox placeholder='send a message'/>

            <IconButton
             type="submit"
             sx={{
               rotate: "-30deg",
               bgcolor: orange,
               color: "white",
               marginLeft: "1rem",
               padding: "0.5rem",
               "&:hover": {
                 bgcolor: "error.dark",
               },
             }}>  

              <SendIcon/>

            </IconButton>
          </Stack>
      </form>

      <FileMenu/>
  </>
  )
}

export default AppLayout()(Chat)