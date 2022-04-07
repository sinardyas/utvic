import React, { useRef } from 'react';
import Arrow from "../assets/images/arrow-down.png"

export default function SideBar() {

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
    <li class="px-2   py-2 w-full flex flex-col  hover:bg-amber-300 active:bg-amber-300 focus:bg-amber-300">
    <div className="flex flex-row justify-between">
    <strong >Riwayat Penjurian</strong>
    <div className='flex items-center'>
    <img src={Arrow} alt=".." width="14.1" height="15" />
    </div>
    </div>
    </li>
    <div className='px-2'>
    <hr/>
    </div>
    <ul>
      <li class="px-6  py-2 w-full flex flex-col  hover:bg-slate-900  active:bg-slate-900 focus:bg-slate-900">
        <span className='hover:text-white'>Penjurian Lokal</span>
      </li>
      <div className='px-2'>
        <hr />
      </div>
      <li class="px-6  py-2 w-full flex flex-col  hover:bg-slate-900  active:bg-slate-900 focus:bg-slate-900">
        <span className='hover:text-white'>Penjurian Nasional</span>
      </li>
      <div className='px-2'>
        <hr />
      </div>
      <li class="px-6  py-2 w-full flex flex-col  hover:bg-slate-900  active:bg-slate-900 focus:bg-slate-900">
        <span className='hover:text-white'>Penjurian Grand Final</span>
      </li>
      <div className='px-2'>
        <hr />
      </div>
    </ul>
  
    <li class="px-2 py-2 w-full flex flex-col  hover:bg-amber-300 active:bg-amber-300 focus:bg-amber-300">
   <strong>STAR</strong>
    </li>
    <div className='px-2'>
    <hr/>
    </div>
    <ul>
      <li class="px-6  py-2 w-full flex flex-col  hover:bg-slate-900  active:bg-slate-900 focus:bg-slate-900">
        <span className='hover:text-white'>Kuis</span>
      </li>
      <div className='px-2'>
        <hr />
      </div>
      </ul>
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
    <hr/>
    </div>
    <li class="px-2 py-2 w-full flex flex-col  hover:bg-amber-300 active:bg-amber-300 focus:bg-amber-300">
   <strong>Setting Penjurian</strong>
    </li>
    <div className='px-2'>
    <hr/>
    </div>
    <ul>
      <li class="px-6  py-2 w-full flex flex-col  hover:bg-slate-900  active:bg-slate-900 focus:bg-slate-900">
        <span className='hover:text-white'>Setting Tahap Penjurian</span>
      </li>
      <div className='px-2'>
        <hr />
      </div>
      <li class="px-6  py-2 w-full flex flex-col  hover:bg-slate-900  active:bg-slate-900 focus:bg-slate-900">
        <span className='hover:text-white'>Setting Quota Penjurian</span>
      </li>
      <div className='px-2'>
        <hr />
      </div>
      <li class="px-6  py-2 w-full flex flex-col  hover:bg-slate-900  active:bg-slate-900 focus:bg-slate-900">
        <span className='hover:text-white'>Setting Jumlah Makalah per Group</span>
      </li>
      <div className='px-2'>
        <hr />
      </div>
      <li class="px-6  py-2 w-full flex flex-col  hover:bg-slate-900  active:bg-slate-900 focus:bg-slate-900">
        <span className='hover:text-white'>Setting Jumlah Makalah</span>
      </li>
      <div className='px-2'>
        <hr />
      </div>
      <li class="px-6  py-2 w-full flex flex-col  hover:bg-slate-900  active:bg-slate-900 focus:bg-slate-900">
        <span className='hover:text-white'>Setting Juri</span>
      </li>
      <div className='px-2'>
        <hr />
      </div>
    </ul>
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
