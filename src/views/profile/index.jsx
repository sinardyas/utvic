import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../store/global/Provider'

import 'swiper/css';
import '../../styles/profile.scss';
import PageSpinner from '../../components/Spinner-1';
import Link from '@mui/material/Link';
import Foto from "../../assets/images/foto.png";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ProfileLogo from '../../assets/images/menu/profil.png';
import Edit from "../../assets/images/edit.png";
import EditPen from "../../assets/images/edit-pen.png";
import Header from '../../components/Header'
import DrawerNav from '../../components/menu/DrawerNav'


const { 
  api: {
    homeBanner: apiHomeBanner,
    homeArticle: apiHomeArticle,

    homeFeature: apiHomeFeature,
    homeEditFeature: apiHomeEditFeature,
    homeEvent: apiHomeEvent,
  }
} = window.processEnv

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
         Profile
      </Link>
    
    </Breadcrumbs>
  </div>
  </div>
  </section>
     <section className='hidden md:flex'>
       <div className="container">
         <div className="flex flex-row pt-5">
           <div className='px-5'>
           <img src={ProfileLogo} alt="..." />
           </div>
           <div className='flex items-center'>
             <h2>
            Profile
            </h2>
           </div>
         </div>
       </div>
     </section>

      <section className='profile-body lg:pt-10 pb-40 sm:pt-20'>
        
        <div className='flex lg:gap-14 md:gap-0 flex-row'>
          <div>
            <img src={Foto} alt=".."  width="280" height="280" className='hidden md:flex'/>
            </div>
          <div className="flex flex-col w-full">
            <div className='flex md:flex-row md:hidden'>
            <div className='flex w-5/12 '>
            <img src={Foto} alt=".." className='foto-profile'/>
          </div>
          <div className="flex flex-col sm:flex-col pb-5 pt-5">
          
              <div className='flex pb-3'>
                <h2>Agat322</h2>
              </div>
              <div className='flex flex-row'>
                <div className='pr-3'>
                <img src={EditPen} alt=".." />
                </div>
                <div className='flex items-center'>
                <span>Edit profile</span>
                </div>

              </div>

            </div>

            </div>


            <div className="flex lg:flex-row  justify-between sm:flex-col pb-5 hidden md:flex">
          
              <div className='flex'>
                <h2>Agat322</h2>
              </div>
              <div className='flex flex-row justify-between'>
                <div className='pr-3'>
                <img src={Edit} alt=".." />
                </div>
                <div className='flex items-center'>
                <span>Edit profile</span>
                </div>

              </div>

            </div>
            
          <div className='flex flex-row hidden md:flex'>
            <div className='pr-5'>
              <div class="p-6 max-w-sm  bg-white rounded-xl border-solid border-2 border-slate-200 w-52 min-w-ful">
                <div className='flex flex-col'>
                  <span className='font-semibold'>NRP</span>
                  <span>011983908</span>
                  </div>
                  </div>
            </div>
            <div className='pr-5'>
              <div class="p-6 max-w-sm  bg-white rounded-xl border-solid border-2 border-slate-200 w-52 min-w-ful">
                <div className='flex flex-col'>
                <span className='font-semibold'>Area</span>
                  <span>Jakarta</span>
                  </div>
                  </div>
            </div>

            <div className='pr-5'>
              <div class="p-6 max-w-sm  bg-white rounded-xl border-solid border-2 border-slate-200 w-52 min-w-ful">
                <div className='flex flex-col'>
                <span className='font-semibold'>Posisi</span>
                  <span>"Teknisi"</span>
                  </div>
                  </div>
            </div>


          </div>
          <div className='flex flex-row pt-5 hidden md:flex'>
          <div className='pr-5'>
              <div class="p-6 max-w-sm  bg-white rounded-xl border-solid border-2 border-slate-200 w-52 min-w-ful">
                <div className='flex flex-col'>
                <span className='font-semibold'>Masa Kerja</span>
                  <span>10 tahun</span>
                  </div>
                  </div>
            </div>
            <div className='pr-5'>
              <div class="p-6 max-w-sm  bg-white rounded-xl border-solid border-2 border-slate-200 w-52 min-w-ful">
                <div className='flex flex-col'>
                <span className='font-semibold'>Email</span>
                  <span>"farhan@gmail.com"</span>
                  </div>
                  </div>
            </div>
          


          </div>

          <div className='flex flex-row pt-5 hidden md:flex'>
          <div className='pr-5'>
              <div class="p-6 max-w-sm  bg-white rounded-xl border-solid border-2 border-slate-200 w-52 min-w-ful">
                <div className='flex flex-col'>
                <span className='font-semibold'>Nomor Ponsel</span>
                  <span>0894 6678 9999</span>
                  </div>
                  </div>
            </div>
           
          


          </div>

          <div class="flex justify-center block md:hidden">
  <ul class="bg-white rounded-lg w-full text-gray-900">
    <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg flex flex-col">
    <span className='font-semibold'>NRP</span>
                  <span>011983908</span>
     
      </li>
    <li class="px-6 py-2 border-b border-gray-200 w-full flex flex-col">
    <span className='font-semibold'>Area</span>
                  <span>Jakarta</span>
    </li>
    <li class="px-6 py-2 border-b border-gray-200 w-full flex flex-col">
    <span className='font-semibold'>Posisi</span>
                  <span>"Teknisi"</span>
    </li>
    <li class="px-6 py-2 border-b border-gray-200 w-full flex flex-col">
    <span className='font-semibold'>Masa Kerja</span>
                  <span>10 tahun</span>
    </li>
    <li class="px-6 py-2 w-full rounded-b-lg flex flex-col">
    <span className='font-semibold'>Email</span>
                  <span>"farhan@gmail.com"</span>
    </li>
  </ul>
</div>
          
          </div>

        </div>
        

      </section>
       
        </>
  }
}

const Profile = function() {
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


export default Profile