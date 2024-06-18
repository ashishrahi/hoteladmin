import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './list.scss'
import { Box } from '@mui/material'
import Datatable from './Datatable'
const Users = () => {
  return (
    <Box className='list' style={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer" style={{flex:'6'}}>
      <Navbar/>
     <Datatable/>
        </Box>
      </Box>
  )
}

export default Users