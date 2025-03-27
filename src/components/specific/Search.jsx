import { Dialog, DialogTitle, Stack, TextField , InputAdornment, List} from '@mui/material'
import {useInputValidation} from '6pp'
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from '../shared/UserItem'
import { useState } from 'react'
import { sampleUsers } from '../../constants/sampledata';

export default function Search() {
 const search = useInputValidation("")

  const addFriendHandler = (_id) => {}

  let isLoadingSendFriendRequest = false
  const [users, setUsers] = useState(sampleUsers)

  return (
    <Dialog open >
     <Stack p={2} direction={"column"} width={"25rem"}> 
      <DialogTitle textAlign={"center"}>Find people</DialogTitle>
      <TextField label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}/>
      </Stack>

      <List>
        {users.map((user) => (
          <UserItem key={user._id} user={user} handler={addFriendHandler} handlerIsLoading={isLoadingSendFriendRequest} />
        ))}
      </List>
    </Dialog>
  )
}
