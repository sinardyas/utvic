import React, { useEffect } from 'react'
import { useParams, useNavigate, NavLink } from 'react-router-dom'
import { GlobalContext } from '../../store/global/Provider'
import Header from '../../components/Header'
import DrawerNav from '../../components/menu/DrawerNav'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import Sensational from './TabSetting'
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Task from "./CardSetting"
import Typography from '@mui/material/Typography';
import SideBar from "../../components/SideBar"
  
const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
  };
  
  const Tab = styled(TabUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    color: '#000000';
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold;
    background-color: transparent;
    width: auto;
    padding: 30px;
    margin: 6px 6px;
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: #FFCD00;
      border-radius: 10px;
    }
  
    &:focus {
      color: #fff;
      border-radius: 10px;
      
      background-color: #FFCD00;
     
      outline-offset: 2px;
     
    }
  
    &.${tabUnstyledClasses.selected} {
      background-color: #FFCD00;
      color: #000000;
      
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;
  
  const TabPanel = styled(TabPanelUnstyled)`
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
  `;
  
  const TabsList = styled(TabsListUnstyled)`
   
    border-radius: 8px;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
   
  `;
  
class Child extends React.Component {
    render() {
    return <>
        {
            !!localStorage.getItem('Token')
            ? (
              <>
                <Header/>
                <DrawerNav/>
              </>
            )
            : <></>
          }
 
 <section className='section-body space-from-header py-[1rem] bg-slate-200 hidden md:flex'>
  
  <div className="container">
  <div role="presentation" className='pt-3'>
    <Breadcrumbs aria-label="breadcrumb" >
      <Link underline="hover" color="inherit" href="/" className='font-bold'>
        Home
      
      </Link>
      <Link
        underline="hover"
        color="inherit"
       
        className='font-bold'
      >
        Let’s Innovate
      </Link>
      <Typography color="text.primary" className='font-bold'>Artikel Ku</Typography>
    </Breadcrumbs>
  </div>
  </div>
  </section>

  <div className="flex flex-row w-full">
      
         
<div className="flex w-full">
 <section className='section-main w-full'>
       <div className="container">
       <TabsUnstyled defaultValue={0}>
         <div className="flex flex-col">
      <TabsList className='pt-0 pb-20'>
        <Tab>WINA</Tab>
        <Tab>RITA</Tab>
        <Tab>FITA</Tab>
      </TabsList>
      
                <div className='flex flex-col'>
                <TabPanel value={0}><Task/></TabPanel>
      <TabPanel value={1}><Task/></TabPanel>
      <TabPanel value={2}><Task/></TabPanel>
                  </div>
                
                  </div>
      
    </TabsUnstyled>

       </div>
     </section>
     </div>

     <SideBar/>



     </div>


         </>
    }
  }
  
 
  
  const SettingParameter = function() {
    let { page } = useParams()
    const navigate = useNavigate()
    return (
      <GlobalContext.Consumer>
        {context => (
          <Child 
            context={context}
            page={page}
            navigate={navigate}
            />
        )}
      </GlobalContext.Consumer>
    )
  }
  
  
  export default SettingParameter