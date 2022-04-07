import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../store/global/Provider'

import 'swiper/css';
import '../../styles/stars.scss';
import PageSpinner from '../../components/Spinner-1';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import Unlock from "../../assets/images/unlock.png"
import Date from "../../assets/images/date.png"

const { 
  api: {
    homeBanner: apiHomeBanner,
    homeArticle: apiHomeArticle,

    homeFeature: apiHomeFeature,
    homeEditFeature: apiHomeEditFeature,
    homeEvent: apiHomeEvent,
  }
} = window.processEnv


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

class Child extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      response: [],
      pageIsLoading: true
    }
  }

  FetchData() {
    const {
      context: {
        FetchGet,
      }
    } = this.props

    return new Promise((resolve, reject) => {

      Promise.all([
        FetchGet({
          url: apiHomeBanner,
          errorText: 'Error while fetch Home Banner'
        }),

        FetchGet({
          url: apiHomeArticle,
          errorText: 'Error while fetch Home Article'
        }),

        FetchGet({
          url: apiHomeFeature,
          errorText: 'Error while fetch Home Article'
        }),

        FetchGet({
          url: apiHomeEditFeature,
          errorText: 'Error while fetch Home Article'
        }),

        FetchGet({
          url: apiHomeEvent,
          errorText: 'Error while fetch Home Article'
        }),

        
      ])
      .then(response => {
        this.setState({
          response,
          pageIsLoading: false
        })
      })
    });
  }

  componentDidMount() {
    this.FetchData()
  }

  render() {

    const {
      pageIsLoading,
      response: [
        homeBannerResp,
        homeArticleResp,
        homeFeatureResp,
        homeEditFeatureResp,
        homeEventResp,
      ]
    } = this.state

    return pageIsLoading
      ? <PageSpinner/>
      : <>
      <div className="list-quiz">
  <div class="p-6  bg-slate-200 rounded flex items-center">
 
  <div className="flex flex-row justify-between w-full">
      <div className="flex flex-col">
      <Checkbox {...label} />
      <span className='font-bold'>Quiz A</span>
      </div>
      <div className="flex flex-col">
          <div className="flex flex-row gap-3">
              <div className='flex items-center'>
              <img src={Unlock} alt=".." />
              </div>
              <button class="bg-amber-400   font-bold rounded-md p-2" >
              20 Point
                      </button>
                </div>
          <div className="flex flex-row pt-5 gap-3">
              <div>
          <img src={Date} alt=".." />
          </div>
<div className='flex items-center'>
          <span className='date-card'>1 Maret - 20 Maret</span>
          </div>
          </div>
      </div>

  </div>
</div>
<div class="p-6  bg-slate-200 rounded flex items-center">
 
 <div className="flex flex-row justify-between w-full">
     <div className="flex flex-col">
     <Checkbox {...label} />
     <span className='font-bold'>Quiz A</span>
     </div>
     <div className="flex flex-col">
         <div className="flex flex-row gap-3">
             <div className='flex items-center'>
             <img src={Unlock} alt=".." />
             </div>
             <button class="bg-amber-400   font-bold rounded-md p-2" >
             20 Point
                     </button>
               </div>
         <div className="flex flex-row pt-5 gap-3">
             <div>
         <img src={Date} alt=".." />
         </div>
<div className='flex items-center'>
         <span className='date-card'>1 Maret - 20 Maret</span>
         </div>
         </div>
     </div>

 </div>
</div>
<div class="p-6  bg-slate-200 rounded flex items-center">
 
 <div className="flex flex-row justify-between w-full">
     <div className="flex flex-col">
     <Checkbox {...label} />
     <span className='font-bold'>Quiz A</span>
     </div>
     <div className="flex flex-col">
         <div className="flex flex-row gap-3">
             <div className='flex items-center'>
             <img src={Unlock} alt=".." />
             </div>
             <button class="bg-amber-400   font-bold rounded-md p-2" >
             20 Point
                     </button>
               </div>
         <div className="flex flex-row pt-5 gap-3">
             <div>
         <img src={Date} alt=".." />
         </div>
<div className='flex items-center'>
         <span className='date-card'>1 Maret - 20 Maret</span>
         </div>
         </div>
     </div>

 </div>
</div>
<div class="p-6  bg-slate-200 rounded flex items-center">
 
 <div className="flex flex-row justify-between w-full">
     <div className="flex flex-col">
     <Checkbox {...label} />
     <span className='font-bold'>Quiz A</span>
     </div>
     <div className="flex flex-col">
         <div className="flex flex-row gap-3">
             <div className='flex items-center'>
             <img src={Unlock} alt=".." />
             </div>
             <button class="bg-amber-400   font-bold rounded-md p-2" >
             20 Point
                     </button>
               </div>
         <div className="flex flex-row pt-5 gap-3">
             <div>
         <img src={Date} alt=".." />
         </div>
<div className='flex items-center'>
         <span className='date-card'>1 Maret - 20 Maret</span>
         </div>
         </div>
     </div>

 </div>
</div>
<div class="p-6  bg-slate-200 rounded flex items-center">
 
 <div className="flex flex-row justify-between w-full">
     <div className="flex flex-col">
     <Checkbox {...label} />
     <span className='font-bold'>Quiz A</span>
     </div>
     <div className="flex flex-col">
         <div className="flex flex-row gap-3">
             <div className='flex items-center'>
             <img src={Unlock} alt=".." />
             </div>
             <button class="bg-amber-400   font-bold rounded-md p-2" >
             20 Point
                     </button>
               </div>
         <div className="flex flex-row pt-5 gap-3">
             <div>
         <img src={Date} alt=".." />
         </div>
<div className='flex items-center'>
         <span className='date-card'>1 Maret - 20 Maret</span>
         </div>
         </div>
     </div>

 </div>
</div>
</div>
       
        </>
  }
}

const CardTask = function() {
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


export default CardTask