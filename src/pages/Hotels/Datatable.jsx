import '../Users/list.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from './datatablesource';
import {Link} from 'react-router-dom'
import { Button,Box } from '@mui/material';
import {GridDeleteForeverIcon } from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Datatable = () => {

const[hotels,setHotels]=useState({})

 const fetchHotels=async()=>{
  const response=await axios.get('http://localhost:5100/api/hotels')
  const data=await response.json()
  setHotels(data)
}
useEffect(() => {
    fetchHotels();
  },)

const handleDeleteHotel=async()=>{
  await axios.delete(`http://localhost:5100/api/hotels/${hotels._id}`)
}
  

  

const actionColoumn = [
     {field:'action',header:'Action',width:'200',renderCell:()=>{
        return(
          <Box className='cellAction' sx={{display:'flex',gap:'10px'}}>
          <Link to='/hotels/test' style={{textDecoration:'none'}}><Box className="viewButton" sx={{display:'flex',gap:'2px'}}><VisibilityIcon/> View</Box></Link>  
            <Button onClick={handleDeleteHotel}  className="deleteButton" sx={{display:'flex',flexDirection:'row',gap:'2px',color:'red'}}><GridDeleteForeverIcon sx={{marginTop:'2px'}}/>Delete</Button>
        </Box>
        )
     }}
]

    return (
        <Box className='datatable' style={{ height: 400, width: '100%' }}>
<Box className="datatableTitle" style={{width:'95%',fontSize:'24px',color:'grey',marginBottom:'10px',
display:'flex',fontWeight:'bold'}}>
 <span>Hotels</span> 
</Box>

          <DataGrid
            rows={userRows}
            columns={userColumns.concat(actionColoumn)}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </Box>
      );
}

export default Datatable