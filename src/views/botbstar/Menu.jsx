import React, { useEffect } from 'react'
import { useParams, useNavigate, NavLink, Link } from 'react-router-dom'
import { GlobalContext } from '../../store/global/Provider'
import Button from '@mui/material/Button';
import PageSpinner from '../../components/Spinner-1'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import TextField from '@mui/material/TextField';
import InputUnstyled from '@mui/base/InputUnstyled';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import LinkLogo from '../../assets/images/link.png'
import SearchLogo from '../../assets/images/search-form.png'




  
  class Child extends React.Component {
  
    render() {
      return <>
         <section>
             <div className="container">
             <div className='flex flex-row gap-20 justify-center pt-10'>
                   
                      <button class=" hover:bg-amber-400  active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-400 focus:bg-amber-400 font-bold rounded-md p-5" >
                      UTVIC
                      </button>
                   
                   
                      <button class=" hover:bg-amber-400  active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-400 focus:bg-amber-400 font-bold rounded-md p-5">
                      Innovastra
                      </button>
                   
                      <button class=" hover:bg-amber-400  active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-400 focus:bg-amber-400 font-bold rounded-md p-5">
                      Pejuang
                      </button>
                    
                      <button class=" hover:bg-amber-400  active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-400 focus:bg-amber-400 font-bold rounded-md p-5" >
                      Star
                      </button>
                    
                </div>
             </div>
         </section>
      </>
    }
  }
  
  
  
  
  const Search = function({...props}) {
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
  
      
    );
  }
  
  export default Search