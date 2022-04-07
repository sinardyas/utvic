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
import Foto from "../../assets/images/foto-champion.png"
import Email from "../../assets/images/email.png"
import Delete from "../../assets/images/delete.png"

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
      <div class="p-6 bg-white rounded-xl border-solid border-2 border-slate-200  w-full">
              <div className="flex flex-col ">
                <div className='flex justify-end'>
              <span >12/11/2021</span>
              </div>
              <div className="flex flex-row justify-between pt-5">
                <div className='flex flex-row gap-3'>
                <div>
                  <img src={Foto} alt=".." width="58" height="58"/>
                </div>
                <div>
                  <ul>
                    <li>Ibnu Prasetyo</li>
                    <li>Staff Member</li>
                    <li>Management Development</li>
                    <li>Corporate Strategy Technology</li>
                    <li>0818 9478 094</li>
                    <li>ibnu@unitedtractors.com</li>
                    <li>10 Tahun</li>
                 
                  </ul>
                </div>
                </div>


                <div>
                  <img src={Delete} alt=".." />
                 
                  <img src={Email} alt=".." className='pt-2 pb-8' />
                 
                  <button class="bg-emerald-400 text-white rounded-md p-2 px-3" >
                  Aktif
                     </button>
                     </div>
              </div>
              </div>
          </div>
          <div class="p-6 bg-white rounded-xl border-solid border-2 border-slate-200  w-full">
              <div className="flex flex-col ">
                <div className='flex justify-end'>
              <span>12/11/2021</span>
              </div>
              <div className="flex flex-row justify-between pt-5">
                <div className='flex flex-row gap-3'>
                <div>
                  <img src={Foto} alt=".." width="58" height="58"/>
                </div>
                <div>
                  <ul>
                    <li>Ibnu Prasetyo</li>
                    <li>Staff Member</li>
                    <li>Management Development</li>
                    <li>Corporate Strategy Technology</li>
                    <li>0818 9478 094</li>
                    <li>ibnu@unitedtractors.com</li>
                    <li>10 Tahun</li>
                 
                  </ul>
                </div>
                </div>


                <div>
                  <img src={Delete} alt=".." />
                 
                  <img src={Email} alt=".." className='pt-2 pb-8' />
                 
                  <button class="bg-emerald-400 text-white rounded-md p-2 px-3" >
                  Aktif
                     </button>
                     </div>
              </div>
              </div>
          </div>
          <div class="p-6 bg-white rounded-xl border-solid border-2 border-slate-200  w-full">
              <div className="flex flex-col ">
                <div className='flex justify-end'>
              <span>12/11/2021</span>
              </div>
              <div className="flex flex-row justify-between pt-5">
                <div className='flex flex-row gap-3'>
                <div>
                  <img src={Foto} alt=".." width="58" height="58"/>
                </div>
                <div>
                  <ul>
                    <li>Ibnu Prasetyo</li>
                    <li>Staff Member</li>
                    <li>Management Development</li>
                    <li>Corporate Strategy Technology</li>
                    <li>0818 9478 094</li>
                    <li>ibnu@unitedtractors.com</li>
                    <li>10 Tahun</li>
                 
                  </ul>
                </div>
                </div>


                <div>
                  <img src={Delete} alt=".." />
                 
                  <img src={Email} alt=".." className='pt-2 pb-8' />
                 
                  <button class="bg-emerald-400 text-white rounded-md p-2 px-3" >
                  Aktif
                     </button>
                     </div>
              </div>
              </div>
          </div>
          <div class="p-6 bg-white rounded-xl border-solid border-2 border-slate-200  w-full">
              <div className="flex flex-col ">
                <div className='flex justify-end'>
              <span>12/11/2021</span>
              </div>
              <div className="flex flex-row justify-between pt-5">
                <div className='flex flex-row gap-3'>
                <div>
                  <img src={Foto} alt=".." width="58" height="58"/>
                </div>
                <div>
                  <ul>
                    <li>Ibnu Prasetyo</li>
                    <li>Staff Member</li>
                    <li>Management Development</li>
                    <li>Corporate Strategy Technology</li>
                    <li>0818 9478 094</li>
                    <li>ibnu@unitedtractors.com</li>
                    <li>10 Tahun</li>
                 
                  </ul>
                </div>
                </div>


                <div>
                  <img src={Delete} alt=".." />
                 
                  <img src={Email} alt=".." className='pt-2 pb-8' />
                 
                  <button class="bg-emerald-400 text-white rounded-md p-2 px-3" >
                  Aktif
                     </button>
                     </div>
              </div>
              </div>
          </div>
</div>
       
        </>
  }
}

const CardChampion = function() {
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


export default CardChampion