import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import {sampleUsers} from '../../constants/sampledata'
import UserItem from '../shared/UserItem'
import { useInputValidation } from '6pp'
import { useState } from 'react'


const NewGroup = () => {
    const GroupName = useInputValidation("")

    const [members , setMembers] = useState(sampleUsers)
    const [selectedMembers , setSelectedMembers] = useState([])

    const selectMemberHandler = (_id) => {
            setMembers((prev) => prev.map((user) => user._id === _id ? {...user , isAdded: !user.isAdded} : user))
            setSelectedMembers((prev) => (prev.includes(_id) ? prev.filter((id) => id !== _id) : [...prev , _id]))
    }

    const SubmitHandler = () => {}
    const closeHandler = () => {}
  return (
    <Dialog open onClose={closeHandler}> 
        <Stack  p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"1rem"}> 
        <DialogTitle textAlign={"center"} variant="h4">New Group</DialogTitle>

        <TextField
         label="Group Name"
         value = {GroupName.value}
         onChange={GroupName.changeHandler}/>

        <Typography variant="body1">
            Members
        </Typography>

        <Stack>
             {members.map((user) => (
                      <UserItem key={user._id} 
                      user={user}
                       handler={selectMemberHandler}
                       isAdded={selectedMembers.includes(user._id)} />
                    ))}
        </Stack>
        
        <Stack direction={"row"} justifyContent={"space-evenly"}>
            <Button
             variant="outlined"
            color="error"
            size="large" 
            onClick={closeHandler}>Cancel</Button>
        <Button 
         variant="contained"
         size="large"
         onClick={SubmitHandler} >Create</Button>
        </Stack>    
        </Stack>
    </Dialog>
  )
}

export default NewGroup