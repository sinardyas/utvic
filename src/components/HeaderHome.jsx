import React, {useEffect, useState } from 'react'

import {Link, useParams} from "react-router-dom";
import { createBrowserHistory } from "history"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import '../styles/HeaderHome.scss'
import Button from '@mui/material/Button';

import BtnToggleDrawer from './menu/BtnToggleDrawer';
import Chat from '../assets/images/chat.png';
import Notifikasi from '../assets/images/notifikasi.png';
import Profil from '../assets/images/artikel.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoMobile from '../assets/images/logo_mobile.png';
import Alert from '@mui/material/Alert';
import { color } from '@mui/system';

import Stack from '@mui/material/Stack';
/*class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      allMenu: props['data-all-menu']
    }

  }

  

  


  componentDidMount() {

  }




  render() {
   
    return (
      <header className='header-content bg-black text-white fixed top-0 left-0 w-full z-50 min-h-[var(--header-height-mobile)] lg:min-h-[var(--header-height-desktop)] py-3'>
        <div className='lg:container px-4'>
          <div className='flex items-center'>
            <div className='flex items-center justify-between w-full'>
              <Link to='/' className='mr-3'>
              <img src={ require('../assets/images/united_logo.png') }
        alt="..."
       width="283"
       height="60"
        />
              </Link>
            
          <Button>
            <img src={Chat} alt="..." />
          </Button>


              <BtnToggleDrawer/>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header 
*/

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

function Header(props) {
  const [openAlert, setOpenAlert] = React.useState(true);
  const History = createBrowserHistory()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [Name, setName] = useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
  
    window.localStorage.clear();
  
  };
  useEffect(() => {  
    setName(localStorage.getItem("Name"))
 
  

})
  return (
    <header className='header-content  top-0 left-0 w-full  min-h-[var(--header-height-mobile)] lg:min-h-[var(--header-height-desktop)]'>
    <div className='lg:container'>
      <div className="flex-col">
      <div className='flex items-center'>
        <div className='flex items-center justify-between w-full'>
          <div className="flex mt-5">
            
          <Link to='/' className='mr-3 block md:hidden'>
          <img src={LogoMobile} alt="..." width="181" height="41"/>
          </Link>

          <Link to='/' className='mr-3 hidden md:flex'>
            <h1 className='sr-only md:not-sr-only"'>
              United Traktors</h1>
          <img src={ require('../assets/images/united_logo.png') } alt="..." width="283" height="60"/>
          
          </Link>

          </div>
          <div className="flex items-end">
          <div className=' menu-nav items-end'>
          <LightTooltip title="Selamat datang Sastromenggolo, AYO submit innovation kamu Sekarang" placement="left" arrow>
        <Button>
        <img src={ Notifikasi }
    alt="..."
   width="36"
   height="36"
    />
   
        </Button>
      </LightTooltip>
      </div>
      <div className=' menu-nav items-end'>
      <Button>
        <img src={Chat} alt="..." />
      </Button>
      </div>
     
      <div className='hidden md:grid'>
      
<Button 
    id="fade-button "
    aria-controls={open ? 'fade-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
   className="button-prof"
  >
   
    <img src={Profil} alt="..." width="36" height="36"/>&nbsp;<span className='menu-text'>{Name}</span>&nbsp;
    <h2 className="text-center">
  
</h2>
    <ExpandMoreIcon className='menu-text'/>
  </Button>
  

  <Menu
    id="fade-menu"
    MenuListProps={{
      'aria-labelledby': 'fade-button',
    }}
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    TransitionComponent={Fade}
  >
    <MenuItem onClick={handleClose}>Profile</MenuItem>
    <MenuItem onClick={handleClose}>My account</MenuItem>
    <Link to="/login">
    <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Link>
  </Menu>
  </div>



  </div>
          <BtnToggleDrawer/>
        </div>
       
      </div>
      <div className="block lg:hidden">
      <Stack sx={{ width: '100%' }} spacing={2} className="px-2 block lg:hidden">
      <Alert icon={false} severity="success" onClose={() => {}} className="alert" style={{backgroundColor:'black', color:'white', fontSize:"11px"}}>Selamat datang Sastromenggolo, AYO submit innovation kamu Sekarang</Alert>
     
    </Stack>
    </div>
      </div>
    </div>
  </header>

  );
  
}
export default Header