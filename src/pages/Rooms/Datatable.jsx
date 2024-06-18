import '../Users/list.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from '../../datatablesource';
import {Link} from 'react-router-dom'
import { Button } from '@mui/material';
import { GridAddIcon } from '@mui/x-data-grid';
import {GridDeleteForeverIcon } from '@mui/x-data-grid';
import {Box} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState,useEffect } from'react';
import axios from 'axios';



const Datatable = () => {
  const[rooms,setRooms]=useState();

    const fetchRooms = async () => {
    const response = await axios.get('http://localhost:8000/api/rooms');
    const data = await response.json();
    setRooms(data.data);
  }
  const handleDelete = async () => {
    const response = await axios.delete(`http://localhost:5100/api/rooms/${id}`);
    const data = await response.json();
    setRooms(data.data);
    console.log(data);
  }
 useEffect(() => {
    fetchRooms();
  }, [])
  

const actionColoumn = [
     {field:'action',header:'Action',width:'200',renderCell:()=>{
        return(
            <Box className='cellAction' sx={{display:'flex',gap:'10px'}}>
              <Link to='/users/test' style={{textDecoration:'none'}}><Box className="viewButton" sx={{display:'flex',gap:'2px'}}><VisibilityIcon/> View</Box></Link>  
                <Button  className="deleteButton" onClick={handleDelete} sx={{display:'flex',flexDirection:'row',gap:'2px',color:'red'}}><GridDeleteForeverIcon sx={{marginTop:'2px'}}/>Delete</Button>
            </Box>
        )
     }}
]

    return (
        <Box className='datatable' style={{ height: 400, width: '100%' }}>
<Box className="datatableTitle" style={{width:'95%',fontSize:'24px',color:'grey',marginBottom:'10px',
display:'flex',alignItems:'center',justifyContent:'space-between',fontWeight:'bold'}}>
  Add New Room
  <Link to='/rooms/new' style={{textDecoration:'none',color:'green'}}><Button  variant="contained" startIcon={<GridAddIcon/>}>
Add New
</Button></Link>
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