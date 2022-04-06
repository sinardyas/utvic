import React, { useEffect } from 'react'
import { useParams, useNavigate, NavLink } from 'react-router-dom'
import { GlobalContext } from '../../store/global/Provider'
import Header from '../../components/Header'
import DrawerNav from '../../components/menu/DrawerNav'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Basic from './BasicTask'
import Sensational from './SensationalTask'
import Stars from '../../assets/images/menu/star.png'
import DatePickers from '../../components/DatePickers'
import Calendar from '../../assets/images/calender.png'
import FormSoal from "./FormSoal"
import '../../styles/stars.scss';

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
  
  
  function AddTask(props) {
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
<section className='section-body space-from-header py-[1rem] bg-slate-200 hidden md:flex '>
   <div className="container ">
     <div role="presentation" className='pt-3'>
       <Breadcrumbs aria-label="breadcrumb">
         <Link underline="hover" color="inherit" href="/" className='font-bold'> Home </Link>
         <Link underline="hover" color="inherit" className='font-bold'> Star </Link>
         <Link underline="hover" color="inherit" className='font-bold'> Add Task </Link>
       </Breadcrumbs>
     </div>
   </div>
 </section>
 <section className='section-body title-star pt-10'>
   <div className="container">
     <div className="flex flex-row gap-5">
       <div>
         <img src={Stars} alt=".." />
       </div>
       <div className='flex items-center'>
         <h2>STAR - Add Task</h2>
       </div>
     </div>
   </div>
 </section>
 <section className='section-body pt-10'>
   <div className="container">
     <div className="flex flex-col">


       <div className="flex flex-col">
         <label className='font-bold'>Judul</label>
         <textarea className="form-control mt-3 pt-3" placeholder="Isi judul kamu" rows="3"></textarea>
       </div>
       <div className="flex col-form flex-row gap-5 mt-5">

        <div className="col-skor w-5/12 gap-5">
         <div className="flex flex-col w-full">
           <label className='font-bold'>Set Skor</label>
           <input type="text" class="form-control mt-3"></input>
         </div>
         <div className="flex flex-col  items-center">
           <span>PEJUANG</span>
           <p className='font-bold mt-8'>WINA</p>
         </div>

         </div>

        <div className="col-date w-7/12 gap-3">
         <div className='flex flex-col w-full'>
           <span className='pb-3 font-semibold'>Publish Date</span>
           <div>
             <div class="form-group has-search">
               <span class="form-control-feedback pt-5 pl-3">
                 <img src={Calendar} alt=".." />
               </span>
               <DatePickers />
             </div>
           </div>
         </div>
         <div className='flex flex-col w-full'>
           <span className='pb-3 font-semibold'>Unpublish Date</span>
           <div>
             <div class="form-group has-search">
               <span class="form-control-feedback pt-5 pl-3">
                 <img src={Calendar} alt=".." />
               </span>
               <DatePickers />
             </div>
           </div>
         </div>
         </div>

       </div>
       <FormSoal />
       <div className="flex flex-row gap-4 pt-10 pb-10">
         <button type='submit' className='bg-red-700 px-4 py-2 rounded-md text-white font-semibold disabled:opacity-75'> Cancel </button>
         <button type='submit' className='bg-yellow-400 px-4 py-2 rounded-md text-black font-semibold disabled:opacity-75'> Submit </button>
       </div>
     </div>
   </div>
 </section>

         </>
  }
  
 
  
  export default AddTask