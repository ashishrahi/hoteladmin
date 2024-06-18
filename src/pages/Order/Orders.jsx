import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './list.scss'
import Datatable from './Datatable'
import { Box } from '@mui/material'
const Orders = () => {
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

export default Orders