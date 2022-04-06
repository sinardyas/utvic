import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Upload from '../../assets/images/upload.png'
import { styled } from '@mui/material/styles';
import LinkLogo from '../../assets/images/link.png'
import Radio from '@mui/material/Radio';

const Input2 = () => {
    const [inputList, setInputList] = useState([]);

  const onAddBtnClick = event => {
    setInputList(inputList.concat(<Input2 key={inputList.length} />));
  };

  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return <>
     <div className=" w-full pt-5">
   <div class="p-6 bg-white rounded-xl border-solid border-2 border-slate-200 w-full">
     <div className="flex flex-row gap-5">
       <div>
         <strong>1.</strong>
       </div>
       <div className="flex flex-col w-full">
         <label className='font-bold'>Pertanyaan</label>
         <textarea className="form-control mt-3 pt-3" placeholder="Isi judul kamu" rows="3"></textarea>
         <div className="flex flex-row gap-5 pt-5">
           <div className="flex flex-col w-full">
             <div className="flex flex-row justify-between">
               <span className='pb-3 font-semibold'>Upload Banner</span>
               <span className='text-upload'>Belum ada file dipilih</span>
             </div>
             <label htmlFor="icon-button-file">
               <div class="p-1 bg-slate-100 rounded-lg border-solid border border-slate-300 w-full">
                 <Input accept="image/*" id="icon-button-file" type="file" />
                 <div className="flex flex-row">
                   <IconButton color="primary" aria-label="upload picture" component="span">
                     <img src={Upload} alt=".." />
                   </IconButton>
                   <div className='flex items-center'>
                     <span className='upload-placeholder'>Upload Image Banner Artikel</span>
                   </div>
                 </div>
               </div>
             </label>
             <div className='pt-3'>
               <div className='text-upload'>*Upload file dalam format gambar ( <span className='text-upload2'>jpeg, png</span> ) </div>
             </div>
           </div>
           <div className='flex flex-col  w-full'>
             <span className='pb-3 font-semibold'>Link</span>
             <div>
               <div class="form-group has-search">
                 <span class="form-control-feedback pt-3 pl-3">
                   <img src={LinkLogo} alt=".." />
                 </span>
                 <input type="text" class="form-control" placeholder="Masukan Link" />
               </div>
             </div>
           </div>
         </div>
         <div className="flex flex-col pt-5">
           <strong>Jawaban</strong>
           <div className="flex flex-row gap-5 pt-3 items-center">
             <div>
               <Radio {...controlProps('a')} sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }} />
             </div>
             <div className="w-full">
               <input type="text" class="form-control mt-3 w-full"></input>
             </div>
             <div>
               <Radio {...controlProps('b')} sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }} />
             </div>
           </div>
           <div className="flex flex-row gap-5 pt-3 items-center">
             <div>
               <Radio {...controlProps('c')} sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }} />
             </div>
             <div className="w-full">
               <input type="text" class="form-control mt-3 w-full"></input>
             </div>
             <div>
               <Radio {...controlProps('d')} sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }} />
             </div>
           </div>
           <div className="flex flex-row gap-5 pt-3 items-center">
             <div>
               <Radio {...controlProps('e')} sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }} />
             </div>
             <div className="w-full">
               <input type="text" class="form-control mt-3 w-full"></input>
             </div>
             <div>
               <Radio {...controlProps('f')} sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }} />
             </div>
           </div>
           <div className="flex flex-row gap-5 pt-3 items-center">
             <div>
               <Radio {...controlProps('g')} sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }} />
             </div>
             <div className="w-full">
               <input type="text" class="form-control mt-3 w-full"></input>
             </div>
             <div>
               <Radio {...controlProps('h')} sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }} />
             </div>
           </div>
         </div>

         <div className="flex flex-col mt-5">
             <strong>Insight Quiz</strong>
         <input type="text" class="form-control mt-3 w-full"></input>
         </div>
       </div>
     </div>
   </div>
 </div>
  </> 
};

const Input = styled('input')({
    display: 'none',
  });

const Form = () => {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = event => {
    setInputList(inputList.concat(<Input2 key={inputList.length} />));
  };

  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return <>
    <div className="mt-10" >
      <button className="bg-yellow-400 px-4 py-2 rounded-md text-black font-semibold disabled:opacity-75" onClick={onAddBtnClick}>+ Tambah Pertanyaan</button>
     
    </div>
    <div className=" w-full pt-5">
   <div class="p-6 bg-white rounded-xl border-solid border-2 border-slate-200 w-full">
     <div className="flex flex-row gap-5">
       <div>
         <strong>1.</strong>
       </div>
       <div className="flex flex-col w-full">
         <label className='font-bold'>Pertanyaan</label>
         <textarea className="form-control mt-3 pt-3" placeholder="Isi judul kamu" rows="3"></textarea>
         <div className="flex flex-row gap-5 pt-5">
           <div className="flex flex-col w-full">
             <div className="flex flex-row justify-between">
               <span className='pb-3 font-semibold'>Upload Banner</span>
               <span className='text-upload'>Belum ada file dipilih</span>
             </div>
             <label htmlFor="icon-button-file">
               <div class="p-1 bg-slate-100 rounded-lg border-solid border border-slate-300 w-full">
                 <Input accept="image/*" id="icon-button-file" type="file" />
                 <div className="flex flex-row">
                   <IconButton color="primary" aria-label="upload picture" component="span">
                     <img src={Upload} alt=".." />
                   </IconButton>
                   <div className='flex items-center'>
                     <span className='upload-placeholder'>Upload Image Banner Artikel</span>
                   </div>
                 </div>
               </div>
             </label>
             <div className='pt-3'>
               <div className='text-upload'>*Upload file dalam format gambar ( <span className='text-upload2'>jpeg, png</span> ) </div>
             </div>
           </div>
           <div className='flex flex-col  w-full'>
             <span className='pb-3 font-semibold'>Link</span>
             <div>
               <div class="form-group has-search">
                 <span class="form-control-feedback pt-3 pl-3">
                   <img src={LinkLogo} alt=".." />
                 </span>
                 <input type="text" class="form-control" placeholder="Masukan Link" />
               </div>
             </div>
           </div>
         </div>
         <div className="flex flex-col pt-5">
           <strong>Jawaban</strong>
           <div className="flex flex-row gap-5 pt-3 items-center">
             <div>
               <Radio {...controlProps('a')} sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }} />
             </div>
             <div className="w-full">
               <input type="text" class="form-control mt-3 w-full"></input>
             </div>
             <div>
               <Radio {...controlProps('b')} sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }} />
             </div>
           </div>
           <div className="flex flex-row gap-5 pt-3 items-center">
             <div>
               <Radio {...controlProps('c')} sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }} />
             </div>
             <div className="w-full">
               <input type="text" class="form-control mt-3 w-full"></input>
             </div>
             <div>
               <Radio {...controlProps('d')} sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }} />
             </div>
           </div>
           <div className="flex flex-row gap-5 pt-3 items-center">
             <div>
               <Radio {...controlProps('e')} sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }} />
             </div>
             <div className="w-full">
               <input type="text" class="form-control mt-3 w-full"></input>
             </div>
             <div>
               <Radio {...controlProps('f')} sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }} />
             </div>
           </div>
           <div className="flex flex-row gap-5 pt-3 items-center">
             <div>
               <Radio {...controlProps('g')} sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }} />
             </div>
             <div className="w-full">
               <input type="text" class="form-control mt-3 w-full"></input>
             </div>
             <div>
               <Radio {...controlProps('h')} sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }} />
             </div>
           </div>
         </div>

         <div className="flex flex-col mt-5">
             <strong>Insight Quiz</strong>
         <input type="text" class="form-control mt-3 w-full"></input>
         </div>
       </div>
     </div>
   </div>
 </div>
 {inputList}
    </>
};

export default Form