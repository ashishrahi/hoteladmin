import '../Home/home.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Widgets from '../../Components/Widgets/Widgets'
import Featured from '../../Components/Featured/Featured'
import Chart from '../../Components/Chart/Chart'
import Table from '../../Components/Table/Table'
import { Box } from '@mui/material'
const Home = () => {
  return (
    <Box className='home'>
     <Sidebar/>
    <Box className="homeContainer">
     <Navbar/>
     <Box className="widgets">
     <Widgets type="user"/>
     <Widgets type='Hotels'/>
     <Widgets type='Rooms'/>

     <Widgets type='earning'/>
     <Widgets type='balance'/>
     </Box>
     <Box className="charts">
      <Featured/>
      <Chart title='Last 6 Months (Revenue)' aspect={2/1} />
     </Box>
     <Box className='listContainer'>
      <Box className='listTitle'>Latest Transactions  </Box>
     <Table/>
     </Box>
     </Box>
      </Box>
  )
}

export default Home