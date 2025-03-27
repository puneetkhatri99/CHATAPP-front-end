import React ,{lazy, Suspense, useEffect}from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute'
import LayoutLoader from './components/layout/Loaders'
import { server } from './constants/config'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { userNotExists } from './redux/reducers/auth'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Chat = lazy(() => import('./pages/Chat'))
const Group = lazy(() => import('./pages/Group'))
const NotFound = lazy(() => import('./pages/NotFound'));
import { Toaster } from 'react-hot-toast'


const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const UserManagement = lazy(() => import("./pages/admin/UserManagement"));
const ChatManagement = lazy(() => import("./pages/admin/ChatManagement"));
const MessagesManagement = lazy(() => import("./pages/admin/MessageManagement"));


function App() {

  const { user , loader} = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  useEffect(()=>{
    axios
    .get(`${server}/api/v1/user/me` , { withCredentials: true })
    .then((res)=> console.log(res))
    .catch((err)=> dispatch(userNotExists()))
  } , [dispatch])

  return loader? (<LayoutLoader/>) : (
      <Router> 
       <Suspense fallback={<LayoutLoader/>}>
       <Routes>
          <Route  element={<ProtectRoute user={user}/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/chat/:chatId" element={<Chat/>} />
            <Route path="/group" element={<Group/>} />
          </Route>
          <Route path="/login" element={<ProtectRoute user={!user} redirect="/">
             <Login/>
            </ProtectRoute>} />

            <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/chats" element={<ChatManagement />} />
          <Route path="/admin/messages" element={<MessagesManagement />} />


        <Route path="*" element={<NotFound/>} />
        </Routes>
        </Suspense>
              <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
      </Router>
  )
}
 
export default App
 