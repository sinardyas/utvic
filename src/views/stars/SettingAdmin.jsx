import React, { useEffect } from 'react'
import { useParams, useNavigate, NavLink } from 'react-router-dom'
import { GlobalContext } from '../../store/global/Provider'
import Header from '../../components/Header'
import DrawerNav from '../../components/menu/DrawerNav'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import '../../styles/stars.scss';
import Typography from '@mui/material/Typography';
import SideBar from "../../components/SideBar"
import Tabs from './TabsSetting'
import Settings from './Settings'


  
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
      STAR 
      </Link>
      <Typography color="text.primary" className='font-bold'>
      Setting Admin
        </Typography>
    </Breadcrumbs>
  </div>
  </div>
  </section>

  <div className="flex flex-row w-full">
      
         
<div className="flex flex-col w-full">

<section className='section-second pt-20 w-full'>
       <div className="container">
       
            <Settings/>
       </div>
     </section>

 <section className='section-second pt-10 w-full'>
       <div className="container">
       
            <Tabs/>
       </div>
     </section>

     </div>

     <SideBar/>



     </div>


         </>
    }
  }
  
 
  
  const SettingAdmin = function() {
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
  
  
  export default SettingAdmin