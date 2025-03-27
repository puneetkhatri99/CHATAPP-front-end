import { AppBar, Box, IconButton, Badge ,Toolbar, Typography ,Tooltip , Backdrop} from '@mui/material'
import { Add as AddIcon,Menu as MenuIcon,Search as SearchIcon,Group as GroupIcon,Logout as LogoutIcon, Notifications as NotificationsIcon} from '@mui/icons-material'
import React , {useState , Suspense , lazy} from 'react'
import { headerColour } from '../../constants/colors'
import { useNavigate } from 'react-router-dom'
const Search = lazy (() => import('../specific/Search') )
const Notifications = lazy(() => import('../specific/Notifications')) 
const NewGroup = lazy(() => import('../specific/NewGroup'))



function Header() {

  const handleMobile = () => {}
  const openSearch = () => {setIsSearch(prev => !prev)}
  const openNewGroup = () => {setIsNewGroup(prev => !prev)}   
  const openNotification = () => {setIsNotification(prev => !prev)}
  const logoutHandler = () => {}

  const navigate = useNavigate()
  const [isMobile , setIsMobile] = useState(false)
  const [isSearch , setIsSearch] = useState(false)
  const [isNotification , setIsNotification] = useState(false)
  const [isNewGroup , setIsNewGroup] = useState(false)

  const navigateToGroup = () => navigate("/group");

  return (
    <>
        <Box sx={{flexGrow:1}} height={"4rem"} >
          <AppBar position="static" sx={{backgroundColor : headerColour}}>
              <Toolbar>
                      <Typography variant="h6" sx={{display:{ xs: "none", sm: "block"}}}>
                        CONNECTED
                      </Typography>
              <Box sx={{display:{ xs: "block", sm: "none"}}}  >
                    <IconButton color='inherit' onClick={handleMobile}>
                      <MenuIcon/>
                    </IconButton>
              </Box>
        <Box
              sx={{
                flexGrow: 1, 
              }}
            />
            <Box>
              <IconBtn
                title={"Search"}
                icon={<SearchIcon />}
                onClick={openSearch}
              />

              <IconBtn
                title={"New Group"}
                icon={<AddIcon />}
                onClick={openNewGroup}
              />

              <IconBtn
                title={"Manage Groups"}
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />

              <IconBtn
                title={"Notifications"}
                icon={<NotificationsIcon />}
                onClick={openNotification}
                // value={notificationCount}
              />

              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onClick={logoutHandler}
              />
            </Box>
  </Toolbar>
  </AppBar>
  </Box>


  {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <Search />
        </Suspense>
      )}

      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <Notifications />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroup />
        </Suspense>
      )}
</>
  )
}

const IconBtn = ({ title, icon, onClick, value }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {value ? (
          <Badge badgeContent={value} color="error">
            {icon}
          </Badge>
        ) : (
          icon
        )}
      </IconButton>
    </Tooltip>
  );
};

export default Header;