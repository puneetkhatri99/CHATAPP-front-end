
import React , {useState} from 'react'
import {  useInputValidation } from "6pp";
import {Container ,Avatar,  IconButton, Paper ,Stack, Typography , TextField, Button} from '@mui/material'
import {bgcolour} from '../../constants/colors.js'
import { Navigate } from 'react-router-dom';


const AdminLogin = () => {

const password = useInputValidation("");

const IsAdmin = true;


const handleLogin = (e) => {
  e.preventDefault();
}

if(IsAdmin) return <Navigate to="/admin/dashboard"/>
  return (
    <div style={ {backgroundImage : bgcolour}}>
    <Container maxWidth="xs" component={"main"} sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>   
    <Paper elevation={3} 
    sx={{
        padding: 4, display: "flex",flexDirection: "column",alignItems: "center"
      }}> 

          <Typography variant="h4" sx={{mb:2}}>Admin Login</Typography>
            <form style={{width: "100%" , marginTop:1}} onSubmit={handleLogin}> 
                <TextField
                required
                fullWidth
                margin='normal'
                label="PASS KEY"
                type='password'
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
                ></TextField>


                <Button sx={{marginTop: 2}} variant="contained" color="primary" fullWidth>
                    Login
                </Button>
            </form>
     </Paper>
         </Container>
         </div>
  )
}

export default AdminLogin