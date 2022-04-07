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
      
<section className='section-body space-from-header py-[1rem] bg-slate-200 hidden md:flex'>
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
     <section className='section-body hidden md:flex'>
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

      <section className='section-body body-section lg:pt-10 pb-40 sm:pt-20'>
        <div className="container">
        
        <div className='flex lg:gap-14 md:gap-0 flex-row '>
          <div>
            <img src={Foto} alt=".."  width="280" height="280" className='hidden md:flex'/>
            </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col hidden md:flex">
          <div>
                <h2>Agat322</h2>
              </div>
              <div className='pt-5'>
             
                <span className='font-semibold'>Jakarta</span>
              </div>

              </div>

              <div className='flex md:flex-row md:hidden'>
            <div className='flex w-5/12 items-center'>
            <img src={Foto} alt=".." className='foto-profile'/>
          </div>
          <div className="flex flex-col sm:flex-col pb-5 pt-5">
          
              <div className='flex pb-3'>
                <h2>Agat322</h2>
              </div>
              <div className='pb-3'>
              <span>Maintenance</span>
              </div>
              <div className='flex flex-row' onClick={() => {window.location.href="/profile/update"}}>
           
                <div className='pr-3'>
                <img src={EditPen} alt=".." />
                </div>
                <div className='flex items-center'>
                <span>Edit profile</span>
                </div>
               

              </div>

            </div>

            </div>

              
              
              <div className="flex flex-row colupdate-profile gap-4 pt-5">
            
                <div className="flex flex-col w-full">
                  <span className='font-semibold'>Nama</span>
                  <input class="form-control" type="text" placeholder="Nama"></input>
                </div>
                <div className="flex flex-col w-full">
                  <span className='font-semibold'>NRP</span>
                  <input class="form-control" type="text" placeholder="NRP"></input>
                </div>
                
              </div>
              <div className="flex flex-row colupdate-profile gap-4 pt-5">
                <div className="flex flex-col w-full">
                  <span className='font-semibold'>Area</span>
                  <input class="form-control" type="text" placeholder="Area"></input>
                </div>
                <div className="flex flex-col w-full">
                  <span className='font-semibold'>Masa Kerja</span>
                  <input class="form-control" type="text" placeholder="Masa Kerja"></input>
                </div>
              </div>
              <div className="flex flex-row colupdate-profile gap-4 pt-5">
                <div className="flex flex-col w-full">
                  <span className='font-semibold'>Posisi</span>
                  <input class="form-control" type="text" placeholder="Posisi"></input>
                </div>
                <div className="flex flex-col w-full">
                  <span className='font-semibold'>Email</span>
                  <input class="form-control" type="text" placeholder="Email"></input>
                </div>
              </div>
              <div className="flex flex-row pt-5">
                <div className="flex flex-col w-6/12 colupdate-profile">
                  <span className='font-semibold'>No. Handphone</span>
                  <input class="form-control" type="text" placeholder="No. Handphone"></input>
                </div>
               
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

const UpdateProfile = function() {
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


export default UpdateProfile