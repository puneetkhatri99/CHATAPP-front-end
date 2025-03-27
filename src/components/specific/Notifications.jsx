import { Dialog, Stack ,DialogTitle, Typography} from '@mui/material'
import React from 'react'
import { sampleNotifications } from '../../constants/sampledata'
import NotificationItem from '../shared/NotificationItem'

const Notifications = () => {

    const FriendRequestHandler = (_id , accept) => {}
  return (
    <Dialog open >
        <Stack  p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}> 
        <DialogTitle>Notifications</DialogTitle>

        {
            sampleNotifications.length > 0 ? (
                sampleNotifications.map(({sender , _id}) => (
                <NotificationItem _id={_id} sender = {sender} handler={FriendRequestHandler} key={_id}/>))
            ) : <Typography variant="body1" textAlign={"center"} >No Notifications</Typography> 
        }
        </Stack>
    </Dialog>
  )
}

export default Notifications