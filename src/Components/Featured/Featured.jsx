import '../Featured/Featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/material';
const Featured = () => {
  return (
    <Box className="featured">
        <Box className='top'>
          <h1 className='title'>Total Revenue</h1>
          <MoreVertIcon fontSize='small'/>
        </Box>
        <Box className='bottom'>
          <Box className='featuredChart'>
          <CircularProgressbar value={70} text={'70%'} strokeWidth={1}  />
          </Box>
          <p className='title'>Total sales made Today</p>
          <p className='amount'>$420</p>
          <p className='desc'>Previous transactions processing.
          Last payments may not be included</p>
          <Box className='summary'>
            <Box className='item'>
              <Box className='itemTitle'>Target</Box>
              <Box className='itemResult'>
              <KeyboardArrowDownIcon fontsize='small'/>
                <Box className='resultAmount'>$12.4k</Box>
              </Box>
            </Box>
          </Box>

        </Box>
    </Box>
  )
}

export default Featured