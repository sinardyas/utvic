import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../store/global/Provider'

import 'swiper/css';
import '../../styles/profile.scss';
import PageSpinner from '../../components/Spinner-1';
import Link from '@mui/material/Link';
import Pagination from '../../components/Paginations'

import Foto from "../../assets/images/foto.png";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import PrestasiLogo from '../../assets/images/menu/prestasi.png';
import Edit from "../../assets/images/edit.png";
import EditPen from "../../assets/images/edit-pen.png";
import Header from '../../components/Header'
import DrawerNav from '../../components/menu/DrawerNav'
import SearchForm from "./SearchForm"
import Download from "../../assets/images/download.png"

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
         List Prestasi
      </Link>
    
    </Breadcrumbs>
  </div>
  </div>
  </section>
     <section className='hidden md:flex'>
       <div className="container">
         <div className="flex flex-row pt-5">
           <div className='px-5'>
           <img src={PrestasiLogo} alt="..." />
           </div>
           <div className='flex items-center'>
             <h2>
            Prestasi
            </h2>
           </div>
         </div>
       </div>
     </section>

     <SearchForm/>

      <section className='profile-body lg:pt-10 pb-40 sm:pt-20'>
        <div className="container">

      <div className="flex flex-col">
        <div className="flex flex-row pb-5">
          <img src={PrestasiLogo} alt="..." width="40" height="47"/>
          <div className='flex items-center pl-5'>
          <h2>Total Prestasi (4)</h2>
          </div>
        </div>

        <div className="flex lg:flex-row sm:flex-col gap-5">

        <div class="p-6   bg-white rounded-xl border-solid border-2 border-slate-200 border-l-orange-300 w-ful">
                <div className='flex flex-row'>
                  <div>
                <img src={PrestasiLogo} alt="..." width="40" height="47"/>
                </div>
                <div className="flex flex-col pl-5 pr-20">
                  <div className="flex lg:flex-col sm:flex-row">
                  <div className="flex lg:flex-row sm:flex-col">
                    <span className='pr-5 font-slate-200'>Prestasi</span>
                    <span>: Juara 2 Grand Final</span>
                  </div>
                  <div className="flex lg:flex-row sm:flex-col pt-2">
                    <span className='pr-9'>Judul</span>
                    <span>: STAR</span>
                  </div>
                  </div>
                  <div className="flex flex-row pt-2">
                    <span className='pr-10'>Role</span>
                    <span>: member</span>
                  </div>

                </div>
                <div>
                <img src={Download} alt=".." width="105" height="25"/>
                </div>
                </div>
          </div>
          <div class="p-6   bg-white rounded-xl border-solid border-2 border-slate-200 border-l-orange-300 w-ful">
                <div className='flex flex-row'>
                  <div>
                <img src={PrestasiLogo} alt="..." width="40" height="47"/>
                </div>
                <div className="flex flex-col pl-5 pr-20">
                  <div className="flex flex-row">
                    <span className='pr-5'>Prestasi</span>
                    <span>: Juara 2 Grand Final</span>
                  </div>
                  <div className="flex flex-row pt-2">
                    <span className='pr-9'>Judul</span>
                    <span>: STAR</span>
                  </div>
                  <div className="flex flex-row pt-2">
                    <span className='pr-10'>Role</span>
                    <span>: member</span>
                  </div>

                </div>
                <div>
                <img src={Download} alt=".." width="105" height="25"/>
                </div>
                </div>
          </div>
          </div>
          <div className="flex lg:flex-row sm:flex-col gap-5 pt-5">

<div class="p-6   bg-white rounded-xl border-solid border-2 border-slate-200 border-l-orange-300 w-ful">
        <div className='flex flex-row'>
          <div>
        <img src={PrestasiLogo} alt="..." width="40" height="47"/>
        </div>
        <div className="flex flex-col pl-5 pr-20">
          <div className="flex flex-row">
            <span className='pr-5'>Prestasi</span>
            <span>: Juara 2 Grand Final</span>
          </div>
          <div className="flex flex-row pt-2">
            <span className='pr-9'>Judul</span>
            <span>: STAR</span>
          </div>
          <div className="flex flex-row pt-2">
            <span className='pr-10'>Role</span>
            <span>: member</span>
          </div>

        </div>
        <div>
        <img src={Download} alt=".." width="105" height="25"/>
        </div>
        </div>
  </div>
  <div class="p-6   bg-white rounded-xl border-solid border-2 border-slate-200 border-l-orange-300 w-ful">
        <div className='flex flex-row'>
          <div>
        <img src={PrestasiLogo} alt="..." width="40" height="47"/>
        </div>
        <div className="flex flex-col pl-5 pr-20">
          <div className="flex flex-row">
            <span className='pr-5'>Prestasi</span>
            <span>: Juara 2 Grand Final</span>
          </div>
          <div className="flex flex-row pt-2">
            <span className='pr-9'>Judul</span>
            <span>: STAR</span>
          </div>
          <div className="flex flex-row pt-2">
            <span className='pr-10'>Role</span>
            <span>: member</span>
          </div>

        </div>
        <div>
        <img src={Download} alt=".." width="105" height="25"/>
        </div>
        </div>
  </div>
  </div>
        </div>
        
        <div className='flex justify-center py-12 hidden md:flex'><Pagination/></div>
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