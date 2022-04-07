import React, { useEffect } from 'react'
import { useParams, useNavigate, NavLink } from 'react-router-dom'
import { GlobalContext } from '../../store/global/Provider'
import Header from '../../components/Header'
import DrawerNav from '../../components/menu/DrawerNav'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Basic from './BasicTask'
import Sensational from './SensationalTask'
/*  class Child extends React.Component {
  
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

<section className='space-from-header py-[1rem] bg-slate-200 hidden md:flex'>
  <div className="container ">
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
         Star
      </Link>
      <Link
        underline="hover"
        color="inherit"
       
        className='font-bold'
      >
         List Task
      </Link>
    
    </Breadcrumbs>
  </div>
  </div>
  </section>

         <section className='pt-3'>
             <div className="container">
             <div className='flex flex-row gap-20 justify-center pt-10'>
                   
                      <button class=" hover:bg-amber-400  active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-400 focus:bg-amber-400 font-bold rounded-md p-3" >
                      Seasonal Task
                      </button>
                   
                   
                      <button class=" hover:bg-amber-400  active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-400 focus:bg-amber-400 font-bold rounded-md p-3">
                      Basic Task
                      </button>
                   
                    
                </div>
             </div>
         </section>
      </>
    }
  }
  */
  
  
  function Stars(props) {
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
  <div className="container ">
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
         Star
      </Link>
      <Link
        underline="hover"
        color="inherit"
       
        className='font-bold'
      >
         List Task
      </Link>
    
    </Breadcrumbs>
  </div>
  </div>
  </section>

         <section className='section-body pt-3'>
             <div className="container">
             <div className='flex flex-row gap-20 justify-center pt-10'>
                   
                      <button class=" hover:bg-amber-400  active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-400 focus:bg-amber-400 font-bold rounded-md p-3" >
                      Seasonal Task
                      </button>
                   
                   
                      <button class=" hover:bg-amber-400  active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-400 focus:bg-amber-400 font-bold rounded-md p-3">
                      Basic Task
                      </button>
                   
                    
                </div>
             </div>
         </section>

    <Sensational/>


         </>
  }
  
 
  
  export default Stars