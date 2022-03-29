import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";
import { useParams, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../store/global/Provider'

import PageSpinner from '../../components/Spinner-1'
import ProfileLogo from '../../assets/images/menu/profil.png';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import InputUnstyled from '@mui/base/InputUnstyled';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Editor } from '@tinymce/tinymce-react';
import TextEditor from '../../components/TextEditor2'

import Header from '../../components/Header'
import DrawerNav from '../../components/menu/DrawerNav'
import Update from '../../assets/images/update.png'
import Upload from '../../assets/images/upload.png'
import Banner from "../../assets/images/banner-validate.png"



const Input = styled('input')({
  display: 'none',
});

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 100%;
  font-size: 0.875rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 8px;
  padding: 12px 12px;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:focus {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }
`,
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
  );
});




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
     <section className='space-from-header py-[1rem] bg-slate-200'>
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
         Update Banner
      </Link>
    
    </Breadcrumbs>
  </div>
  </div>
  </section>
  <section className='hidden md:flex'>
       <div className="container">
         <div className="flex flex-row pt-12">
           <div className='px-5'>
           <img src={Update} alt="..." />
           </div>
           <div className='flex items-center'>
             <h2>
             Update Banner
            </h2>
           </div>
         </div>
       </div>
     </section>
      <section className='pt-10'>
        <div className="container">
          <div className="flex flex-col">
              <div className="flex flex-col">
                 
              <img src={Banner} alt=".." width="1060" height="342"/>
              </div>
      

        <div className='flex flex-col  w-full pt-5'>
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
              <div className='text-upload'>*Upload file dalam format gambar ( <span className='text-upload2'>jpeg, png</span> )</div>
            </div>
            <div className="flex flex-row gap-4 pt-10 pb-10">
            <button
                      type='submit'
                     
                      className='bg-red-700 px-4 py-2 rounded-md text-white font-semibold disabled:opacity-75'
                      >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      
                      className='bg-yellow-400 px-4 py-2 rounded-md text-black font-semibold disabled:opacity-75'
                      >
                      Submit
                    </button>
            </div>
      </div>

  

        </div>
   
        </div>
      
      </section>
    </>
  }
}

const UpdateBanner = function({...props}) {
  let { type, option } = useParams()
  const navigate = useNavigate()


  

  return (
    <GlobalContext.Consumer>
      {context => (
        <Child 
          {...props}
          context={context}
          navigate={navigate}
          pageType={type}
          pageOption={option}
          />
      )}
    </GlobalContext.Consumer>
  )
}

export default UpdateBanner