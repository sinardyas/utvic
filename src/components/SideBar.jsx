import React, { useRef } from 'react';
import Arrow from "../assets/images/arrow-down.png"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';

export default function SideBar() {

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    borderRight: 0,
    borderLeft: 0,
    borderTop: 0,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  return (
	<>
    <section className='side-bar py-10'>
  <div className="container">
    <div className="pl-16 pr-20">

      <ul class="bg-white  border-solid border-2 border-slate-200 w-64 text-gray-900 ">
       
    <li class="px-2 py-2 w-full flex flex-col  hover:bg-amber-300 active:bg-amber-300 focus:bg-amber-300">
      
    <strong>Setting Menu</strong>
  
      </li>
      <div className='px-2'>
    <hr/>
    </div>

      <li class="px-2  py-2 w-full flex flex-col  hover:bg-amber-300 active:bg-amber-300 focus:bg-amber-300">
   <strong>Update Banner</strong>
    </li>
    <div className='px-2'>
    <hr/>
    </div>
    <li class="px-2 py-2 w-full flex flex-col  hover:bg-amber-300 active:bg-amber-300 focus:bg-amber-300">
  <strong>Edit Fitur</strong>
    </li>
    <div className='px-2'>
    <hr/>
    </div>
    
  <Accordion>
  <li class=" w-full flex flex-col  hover:bg-amber-300 active:bg-amber-300 focus:bg-amber-300">
    <AccordionSummary expandIcon={ <ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > <strong>Riwayat Penjurian</strong>
    </AccordionSummary>
  </li>
  <ul>
    <div className='px-2'>
      <hr />
    </div>
    <li class=" w-full flex flex-col  hover:bg-slate-900  active:bg-slate-900 focus:bg-slate-900">
      <AccordionDetails>
        <span className='hover:text-white'>Penjurian Lokal</span>
      </AccordionDetails>
    </li>
    <div className='px-2'>
      <hr />
    </div>
    <li class="w-full flex flex-col  hover:bg-slate-900  active:bg-slate-900 focus:bg-slate-900">
      <AccordionDetails>
        <span className='hover:text-white'>Penjurian Nasional</span>
      </AccordionDetails>
    </li>
    <div className='px-2'>
      <hr />
    </div>
    <li class="w-full flex flex-col  hover:bg-slate-900  active:bg-slate-900 focus:bg-slate-900">
      <AccordionDetails>
        <span className='hover:text-white'>Penjurian Grand Final</span>
      </AccordionDetails>
    </li>
  </ul>
</Accordion>
<div className='px-2'>
      <hr />
    </div>
<Accordion>
  <li class="w-full flex flex-col  hover:bg-amber-300 active:bg-amber-300 focus:bg-amber-300">
    <AccordionSummary expandIcon={ <ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > <strong>STAR</strong>
    </AccordionSummary>
  </li>
  <ul>
    <div className='px-2'>
      <hr />
    </div>
    <li class="w-full flex flex-col  hover:bg-slate-900  active:bg-slate-900 focus:bg-slate-900">
      <AccordionDetails>
        <span className='hover:text-white'>Kuis</span>
      </AccordionDetails>
    </li>
    
    
  </ul>
</Accordion>
<div className='px-2'>
  <hr />
</div>
    <li class="px-2 py-2 w-full flex flex-col  hover:bg-amber-300 active:bg-amber-300 focus:bg-amber-300">
   <strong>Lets Innovate</strong>
    </li>
    <div className='px-2'>
    <hr/>
    </div>
    <li class="px-2 py-2 w-full flex flex-col  hover:bg-amber-300 active:bg-amber-300 focus:bg-amber-300">
   <strong>Setting STAR</strong>
    </li>
    <div className='px-2'>
    <hr/>
    </div>
    <li class="px-2 py-2 w-full flex flex-col  hover:bg-amber-300 active:bg-amber-300 focus:bg-amber-300">
   <strong>Category Mandatory</strong>
    </li>
    <div className='px-2'>
    <hr />
  </div>
<Accordion>
<li class="w-full flex flex-col  hover:bg-amber-300 active:bg-amber-300 focus:bg-amber-300">
  <AccordionSummary expandIcon={ <ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > 
  <strong>Setting Penjurian</strong>
  </AccordionSummary>
</li>
<ul>
  <div className='px-2'>
    <hr />
  </div>
  <li class="w-full flex flex-col  hover:bg-slate-900  active:bg-slate-900 focus:bg-slate-900">
    <AccordionDetails>
      <span className='hover:text-white'>Setting Tahap Penjurian</span>
    </AccordionDetails>
  </li>
  <div className='px-2'>
    <hr />
  </div>
  <li class="w-full flex flex-col  hover:bg-slate-900  active:bg-slate-900 focus:bg-slate-900">
    <AccordionDetails>
      <span className='hover:text-white'>Setting Quota Penjurian</span>
    </AccordionDetails>
  </li>
  <div className='px-2'>
    <hr />
  </div>
  <li class="w-full flex flex-col  hover:bg-slate-900  active:bg-slate-900 focus:bg-slate-900">
    <AccordionDetails>
      <span className='hover:text-white'>Setting Jumlah Makalah per Group</span>
    </AccordionDetails>
  </li>
  <div className='px-2'>
    <hr />
  </div>
  <li class="w-full flex flex-col  hover:bg-slate-900  active:bg-slate-900 focus:bg-slate-900">
    <AccordionDetails>
      <span className='hover:text-white'>Setting Jumlah Makalah</span>
    </AccordionDetails>
  </li>
  <div className='px-2'>
    <hr />
  </div>
  <li class="w-full flex flex-col  hover:bg-slate-900  active:bg-slate-900 focus:bg-slate-900">
    <AccordionDetails>
      <span className='hover:text-white'>Setting Juri</span>
    </AccordionDetails>
  </li>
  
</ul>
</Accordion>
<div className='px-2'>
<hr />
</div>
    
    <li class="px-2 py-2 w-full flex flex-col  hover:bg-amber-300 active:bg-amber-300 focus:bg-amber-300">
   <strong>Signature</strong>
    </li>
    <div className='px-2'>
    <hr/>
    </div>
    <li class="px-2 py-2 w-full flex flex-col  hover:bg-amber-300 active:bg-amber-300 focus:bg-amber-300">
   <strong>Perhitungan Pejuang</strong>
    </li>
    <div className='px-2'>
    <hr/>
    </div>
    <li class="px-2 py-2 w-full flex flex-col  hover:bg-amber-300 active:bg-amber-300 focus:bg-amber-300">
   <strong>Submit Inovasi</strong>
    </li>
    <div className='px-2'>
    <hr/>
    </div>
    <li class="px-2 py-2 w-full flex flex-col  hover:bg-amber-300 active:bg-amber-300 focus:bg-amber-300">
   <strong>Submit Pejuang</strong>
    </li>
    <div className='px-2'>
    <hr/>
    </div>
    <li class="px-2 py-2 w-full flex flex-col  hover:bg-amber-300 active:bg-amber-300 focus:bg-amber-300">
   <strong>Pendaftaran Event</strong>
    </li>
    <div className='px-2'>
    <hr/>
    </div>
  
    
    
  </ul>
  
  
  </div>
  </div>
  </section>

	</>
  );
}
