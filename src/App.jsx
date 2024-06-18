import Home from "./pages/Home/Home"
import Login from './pages/Login/Login'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Users from './pages/Users/Users'
import UserDetails from './pages/UserDetails/UserDetails'
import NewUser from './pages/NewUser/NewUser'
import {userInputs,productInputs} from './formSource'

import Hotels from "./pages/Hotels/Hotels"
import HotelDetails from "./pages/HotelDetails/HotelDetails"
import NewHotel from './pages/NewHotel/NewHotel'

import Rooms from './pages/Rooms/Rooms'
import RoomDetails from './pages/RoomDetails/RoomDetails'
import NewRoom from './pages/NewRoom/NewRoom'

import Orders from "./pages/Order/Orders"
import OrderDetails from "./pages/OrderDetails/OrderDetails"


const App = () => {

  
  const user = true;
  
  return (
    <div className="app dark">
      <BrowserRouter>
        <Routes>
        <Route path="/">
        <Route index element={user ? <Home />:<Login/>} />
        <Route path="login" element={<Login />} />

        <Route path="/users">
          <Route index element={user ? <Users/>:<Login/>} />
          <Route path=":userId" element={user?<UserDetails inputs={userInputs} title='View' />:<Login/>}  />
          <Route path="new" element={<NewUser inputs={userInputs} title='Add New User'/>} />
        </Route>
        
        <Route path="hotels">
          <Route index element={user ? <Hotels/>:<Login/>} />
          <Route path=":hotelId" element={user ? <HotelDetails/> :<Login/>} />
         <Route path="new" element={user ? <NewHotel inputs={productInputs} title='Add New Hotel'/>:<Login/>} />
        </Route>
       
       <Route path="rooms">
          <Route index element={user ? <Rooms/>:<Login/>} />
          <Route path=":roomId" element={user ? <RoomDetails/> :<Login/>} />
          <Route path="new" element={user ? <NewRoom inputs={productInputs} title='Add New Room'/>:<Login/>} />
        </Route>
       
        <Route path="orders">
          <Route index element={user ? <Orders/>:<Login/>} />
          <Route path=":orderId" element={user ? <OrderDetails/> :<Login/>} />
        </Route>
       
         </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App