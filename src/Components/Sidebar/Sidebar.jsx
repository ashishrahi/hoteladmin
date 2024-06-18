import '../Sidebar/sidebar.scss'

import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import CategoryIcon from '@mui/icons-material/Category';
import { Box, ListItem,List, Drawer } from '@mui/material';
import { Link } from'react-router-dom';

const Sidebar = () => {
  return (
    <Box className="sidebar" sx={{bgcolor:'white'}}>
      <Box className="top">
        <Link to='/' style={{textDecoration:'none'}}><span className="logo"></span><FoodBankIcon sx={{color:'gray',fontWeight:'bold'}} /> <span style={{color:'grey'}}>BookingApp</span> </Link>
        
        </Box>
      <hr />
      <List className="center">
        <ul className='list'>
        <p className='title' style={{fontWeight:'bold',fontSize:'16px',color:'gray'}}>Main</p>
         
        <Link to='/' style={{textDecoration:'none'}}>
          <DashboardIcon className='icon' />
            <span>Dashboard</span>
            </Link>
          <p className='title' style={{fontSize:'16px',fontWeight:'bold',color:'gray'}}>LISTS</p>
          <Link to='/users' style={{textDecoration:'none'}}>
          <ListItem>
          <PersonIcon className='icon'/>
          <span>Users</span>
          </ListItem>
          </Link>
          <Link to='/hotels' style={{textDecoration:'none'}}>
          <li>
          <CategoryIcon className='icon' />
          <span>Hotels</span>
          </li>
          </Link>


          <Link to='/rooms' style={{textDecoration:'none'}}>
          <li >
             <InventoryIcon className='icon' />
            <span>Rooms</span>
          </li>
          </Link>
          <Link to='/orders' style={{textDecoration:'none'}}>
          <li>
          <BorderColorIcon className='icon' />
            <span>Booking</span>
          </li>
          </Link>
          <Link to='/' style={{textDecoration:'none'}}>
          <li>
          <LocalShippingIcon className='icon'/>
            <span>Booking Time</span>
          </li> 
          </Link>
          <Drawer/>
          <p className='title' style={{fontSize:'16px',fontWeight:'bold',color:'gray'}}>USEFUL</p>  
          <Link to='/' style={{textDecoration:'none'}}>
          <li>
           <QueryStatsIcon className='icon' />
            <span>Stats</span>
          </li>
          </Link>
          <Link to='/' style={{textDecoration:'none'}}>
          <li>
           <CircleNotificationsIcon className='icon' />
            <span>Notification</span>
          </li>
          </Link>
          <p className='title' style={{fontSize:'16px',fontWeight:'bold',color:'gray'}}>SERVICE</p>
          <Link to='/' style={{textDecoration:'none'}}>
          <li>
          <SettingsSystemDaydreamIcon className='icon' />
            <span>System Health</span>
          </li>
          </Link>
          <li>
            <span>Logs</span>
          </li>
          <Link to='/' style={{textDecoration:'none'}}>
          <li>
          <SettingsApplicationsIcon className='icon' />
            <span>Settings</span>
          </li>
          </Link>
          <p className='title' style={{fontSize:'16px',fontWeight:'bold',color:'gray'}}>USER</p>
          <Link to='/' style={{textDecoration:'none'}}>
          <li>
          <AccountCircleIcon className='icon' />

            <span>Profile</span>
          </li>
          </Link>
          <Link to='/' style={{textDecoration:'none'}}>
          <li>
          <LogoutIcon className='icon'/>
            <span>Logout</span>
          </li></Link>

        </ul>
      </List>
      <Box className="bottom">
        <Box className="colorOption"></Box>
        <Box className="colorOption"></Box>
        <Box className="colorOption"></Box>
      
      </Box>
      </Box>
  )
}

export default Sidebar