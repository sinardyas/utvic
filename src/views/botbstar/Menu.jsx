import React, { useEffect } from 'react'
import { useParams, useNavigate, NavLink, Link } from 'react-router-dom'
import { GlobalContext } from '../../store/global/Provider'
import '../../styles/Botb.scss';

  class Child extends React.Component {
  
    render() {
      return <>
         <section className='section-body'>
             <div className="container">
             <div className='flex flex-row justify-center pt-10'>
                   <div className="tab-menu">
                      <button class=" hover:bg-amber-400  active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-400 focus:bg-amber-400 font-bold rounded-md" >
                      UTVIC
                      </button>
                   
                   
                      <button class=" hover:bg-amber-400  active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-400 focus:bg-amber-400 font-bold rounded-md">
                      Innovastra
                      </button>
                   
                      <button class=" hover:bg-amber-400  active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-400 focus:bg-amber-400 font-bold rounded-md">
                      Pejuang
                      </button>
                    
                      <button class=" hover:bg-amber-400  active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-400 focus:bg-amber-400 font-bold rounded-md" >
                      Star
                      </button>
                      </div>
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