import '../Widgets/Widgets.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Box } from '@mui/material';
const Widgets = ({type}) => {
 let data;

switch (type) {

    case 'user':
        data={
            title:'users',
            isMoney:false,
            link:'see all users',
            icon:<PersonOutlineIcon className='icon' sx={{color:'crimson',backgroundColor:'rbga(255,0,0,0.2)'}}/>
        };
        break;
    
    case 'Hotels':
            data={
                title:'Hotels',
                isMoney:false,
                link:'see all Hotels',
                icon:<PersonOutlineIcon className='icon' sx={{color:'crimson',backgroundColor:'rbga(255,0,0,0.2)'}}/>
            };
            break;
            case 'Rooms':
                data={
                    title:'Rooms',
                    isMoney:false,
                    link:'see all Rooms',
                    icon:<PersonOutlineIcon className='icon' sx={{color:'crimson',backgroundColor:'rbga(255,0,0,0.2)'}}/>
                };
                break;


    case 'order':
            data={
                title:'ORDERS',
                isMoney:false,
                link:'see all ORDERS',
                icon:<AddShoppingCartIcon className='icon'/>
            };
            break;

            case 'earning':
                data={
                    title:'ERARNING',
                    isMoney:true,
                    link:'View net earnings ',
                    icon:<MonetizationOnIcon className='icon'/>
                };
                break;
                case 'balance':
                    data={
                        title:'BALANCE',
                        isMoney:true,
                        link:'See details ',
                        icon:<MonetizationOnIcon className='icon'/>
                    };
                    break;

    default:
        break;
}


  return (
    <Box className="widget">
        <Box className="left">
            <span className='title'>{data.title}</span>
            <span className="counter">{data.isMoney && '$'}</span>
            <span className="link">{data.link}</span>
         </Box>
        <Box className="right">
            <Box className='percentage positive'>
            <KeyboardArrowDownIcon/>
                20%
                </Box>
                {data.icon}
        </Box>

    </Box>
  )
}

export default Widgets