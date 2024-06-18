import './single.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Logo from '../../Components/assets/logo.jpg'
import Chart from '../../Components/Chart/Chart'
import Table from '../../Components/Table/Table'
import EditIcon from '@mui/icons-material/Edit';
import {Stack,Box} from '@mui/material'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const UserDetails = () => {
  const {id}= useParams()

  const handleEdit = async() => {
    await axios.put(`http://localhost:5100/api/users/${id}`)
  }


  
  return (
    <Stack className='single' sx={{display:'flex',flexDirection:'row'}}>
      <Sidebar/>
      <Box className="singleContainer" style={{flex:'6' }}>
        <Navbar/>
          <Box className="top"> 
          <Box className="left">
            <Box className="editButton" sx={{fontSize:'12px'}} onClick={handleEdit}><EditIcon/>Edit</Box>
            <h1 className="title" style={{fontSize:'bold',color:'gray'}}>Information</h1>
            <Box className="item">
              <img src={Logo} alt="" className='itemImg'    />
              <Box className="details">
                <h1 className='itemTitle'>John Doe</h1>
                <Box className="detailItem">
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>JohnDoe@gmail.com</span>
                </Box>
                <Box className="detailItem">
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>+123-234-55-33</span>
                </Box>
                <Box className="detailItem">
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>33 road Area</span>
                </Box>
                <Box className="detailItem">
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>Spain</span>
                </Box>


              </Box>
            </Box>
          </Box>
          <Box className="right">
          <Chart aspect={3/1} title='User Spending (Last 6 Months)'/>
          </Box>
          </Box>
          <Box className="bottom">
            <Table/>
          </Box>
      </Box>
      </Stack>
  )
}

export default UserDetails