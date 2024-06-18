  import { Stack,Box, TextField,Button, Typography, Paper, Modal } from "@mui/material"
  import { useState } from "react";
  import FoodBankIcon from '@mui/icons-material/FoodBank';
  import axios from 'axios'

 const Login = () => {

  const [open, setOpen] = useState(true);
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  
  const handleClose = () => setOpen(true);
  
  const handleSubmit = async() => {
  const response = await axios.post('',username,password)
  if(response.data){
    window.location.replace('/')
  }else{
    setOpen(false)
  }
}


  
  return (
    
    <Stack sx={{display:'flex',flexdirection:'column',alignItems:'center',
    
    bgcolor: 'background.paper'}}>
      <Modal 
       open={open}
       onClose={handleClose}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
      >
      <Paper onSubmit={handleSubmit} sx={{textAlign:'center',marginTop:'20px',alignItems:'center',
        position:'absolute',top:'20%',left:'50%',transform:'translateX(-50%)',width:400,
        bgcolor:'background.paper',border:'2px solid #000',boxShadow:24,p:4,
      }}>
      <Typography sx={{fontWeight:'bold',color:'orange',fontSize:'28px',marginBottom:'20px'}}>
        <FoodBankIcon sx={{marginRight:'10px',color:'orange'}}/>Login</Typography>
      <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
      <TextField onChange={(e)=>setUsername(e.target.value)} id="outlined-basic" label="Username" variant="outlined" />
      <TextField onChange={(e)=>setPassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" />
      <Button type="submit" variant="contained" sx={{bgcolor:'orange'}}>Login</Button>
      </Box>
      </Paper>
      </Modal>
      </Stack>
  )
}

export default Login