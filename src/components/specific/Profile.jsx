import { Avatar, Stack , Typography } from '@mui/material'
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";


const Profile = () => {
  return (
   <Stack spacing={"2rem"} direction={"column"} alignItems={"center"} >   
   <Avatar sx={{
          py: 1,
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }} />
    <ProfileCard heading={"Bio"} text={"bio"} />
      <ProfileCard
        heading={"Username"}
        text={"puneetkhatri99"}
        Icon={<UserNameIcon />}
      />
      <ProfileCard heading={"Name"} text={"puneet"} Icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={moment.utc().format("MMMM Do YYYY")}
        Icon={<CalendarIcon />}
      />
    </Stack>
  
  )
}

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}

    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);
export default Profile