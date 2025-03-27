import React from 'react'
import Header from './Header'
import Title from '../shared/Title'
import Grid2 from '@mui/material/Grid2'
import { ChatList } from '../specific/ChatList'
import { samepleChats } from '../../constants/sampledata'
import { useParams } from 'react-router-dom'
import Profile from '../specific/Profile'

const AppLayout = () => (WrappedComponent) =>{
  return (props) => { 
        const params = useParams();
        const chatId = params.chatId;
        const handleDeleteChat = (e , _id , groupChat) => {
            e.preventDefault();
            console.log(_id , groupChat)
        } 
        return ( <>
        
           <Title/>
            <Header/>
        <Grid2
             container direction="row" 
            height={"calc(100vh - 4rem )"}
            sx={{ justifyContent: "space-between",
             alignItems: "flex-start",}}  >

                <Grid2 
                   size = {{xs:0 , sm:4 , md:3 ,lg:3}}
                    sx={{
                    display: { xs: "none", sm: "block" } }}
                    height="100%"
                >
                    <ChatList chats ={samepleChats} chatId={chatId} handleDeleteChat={handleDeleteChat}  />
                </Grid2>

                <Grid2 size ={{ xs:12 ,sm:8 , md:5 , lg:6}} height="100%" >
                    <WrappedComponent {...props} />
                </Grid2>


                <Grid2
               size = {{ xs:0 , sm:4 ,md:4 , lg:3  }}
                height="100%"
                sx={{
                    display: { xs: "none", md: "block" },
                    padding: "2rem",
                    bgcolor: "rgba(0,0,0,0.85)",
                }}
                >
                    <Profile/>
                </Grid2>
                </Grid2>;
                    </>
                )
                }
}

export default AppLayout