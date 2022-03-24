import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { GlobalContext } from '../../store/global/Provider'
import Artikel from '../../assets/images/artikel.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../styles/Index.scss';
import PageSpinner from '../../components/Spinner-1';
import Profile from '../../assets/images/menu/profil.png';
import Prestasi from '../../assets/images/menu/prestasi.png';
import Star from '../../assets/images/menu/star.png';
import Certif from '../../assets/images/menu/certif.png';
import Like from '../../assets/images/like.png';
import Comment from '../../assets/images/comment.png';
import Innovation from '../../assets/images/feature/innovation.png';
import Feature from '../../assets/images/feature.png';
import Edit from '../../assets/images/edit-pen.png';
import Navbar from "../../components/HeaderLogin";
import Header from '../../components/HeaderHome'
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
   
          <section className='banner '>
            <div className="container ">
              <div className="lg:grid lg:grid-cols-4 gap-4">

                <div className='lg:col-span-3 lg:order-2 h-full'>
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    className='rounded-xl overflow-hidden'
                  >
                    {
                      homeBannerResp.map((banner,index) => (
                        <SwiperSlide key={index}>
                          <Link to={`/article/${banner.LinkTo}`} className='flex w-full h-full rounded-xl overflow-hidden'>
                            <picture className='flex w-full'>
                              <img src={banner.ImageUrl}
                                alt="Page loading"
                                width="780"
                                height="500"
                                className='flex w-full h-full'
                              />
                            </picture>
                          </Link>
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
                </div>

         

                <div className='lg:order-1 bg-white rounded-xl shadow-lg'>

                

                  <div className="hidden lg:flex flex-col h-full">
                    
                    <Link to='/profile' className='flex items-center'>
                    <div className='px-10 py-5'>

                    <div class="grid gap-1 grid-cols-2">
                      <div> 
                        <img src={Profile} alt=".." className='mt-5'/>
                      </div>
                      <div className='grid content-center pt-2'>
                        <h2>Profile</h2></div>
                      </div>
                      </div>

                      </Link>
                    <Link to='/achievement' className='flex items-center'>

                    <div className='px-10 py-5'>
             <div className="flex gap-7 flex-row">
               <div className="flex">
               <img src={Prestasi} alt=".."/>

               </div>
               <div className="flex pt-3">
               <h2>Prestasi</h2>
               </div>

             </div>
             </div>


                      </Link>
                    <Link to='/star' className='flex flex-row items-center'>
                    <div className='px-10 py-5'>
                   

                      <div class="grid gap-3 grid-cols-2 ">
                      <div className='grid justify-items-start '> 
                      <img src={Star} alt=".."/>
                      </div>
                      <div className='grid  pt-2'>
                      <h2>STAR</h2>
                      </div>
                    </div>
                    </div>
                    
                      </Link>

                      <Link to='/e-certificate' >
                        <div className='px-10 py-5'>
             <div className="flex gap-8 flex-row">
               <div className="flex">
               <img src={Certif} alt=".." />

               </div>
               <div className="flex">
               <h2>E-Certified</h2>
               </div>

             </div>
             </div>
            
               

               </Link>
                   
                     
                  </div>
                  </div>
                  {/*<div className=" items-center p-6">*/}

               
                  <div className='block lg:hidden mt-5'>
                  <div className="flex justify-between items-center">
                <div className='flex items-center'>
                  <h2  className='innovate-text'>Summary Profile</h2>
                
                </div>
                <Link to='/article/all' className='lihat-semua'>Lihat Semua</Link>
              </div>
                  <div className=" flex flex-col p-6 min-w-lg mx-auto bg-white rounded-xl shadow-lg mt-5">
                    
                  <h2  className='innovate-text'>Periode: WINA</h2>
                  <div className='w-full'>
                  <div className="list-feature mt-5">
                  <div class="max-w-sm mx-auto items-center">
                    <div className=' items-center'>
                    <img src={Profile} alt=".." width="32px" height="38.05px"/>
                    
                   
                      </div>
                     <div >
                     <span className='text-menu-mobile'>Profile</span>
                     </div>
                  </div>

                  <div class="max-w-sm mx-auto items-center">
                    <div className=' items-center'>
                    <img src={Prestasi} alt=".." width="32px" height="38px" />
                    <span className='text-menu-mobile'>Prestasi</span>
                      </div>
                     
                  </div>

                  <div class="max-w-sm mx-auto flex-col items-center">
                    <div className="items-center">
                    <img src={Star} alt=".." width="40px" height="38px"/>
                   
                      </div>
                    <div className="px-1">
                    <span className='text-menu-mobile'>STAR</span>
                    </div>
                     
                  </div>

                  <div class="max-w-sm mx-auto items-center">
                    <div className=' items-center px-2'>
                    <img src={Certif} alt=".." width="29px" height="38px"/>
                   
                      </div>
                      <div>
                      <span className='text-menu-mobile'> E-Certified</span>
                      </div>
                     
                  </div>
               
                
                


                     </div>
                     </div>


                  </div>
                  </div>

                

              </div>
              
            </div>
          </section>

          <section className='features block lg:hidden'>
            <div className="container">
              <div className="flex flex-col">

            <div className="flex justify-between items-center">
                <div className='flex items-center'>
                  <h2  className='innovate-text'>Fitur UTVIC</h2>
                
                </div>
                <Link to='/article/create'
                    className='btn-yellow'
                    >
                      <div className="flex">
                      <img src={Edit} alt="..." width="18.68" height="18.68" />
                     &nbsp;
                      Edit
                      </div>
                      </Link>
              </div>
           

                <div className="list-feature">
                {
                      homeFeatureResp.map((feature,index) => (
                  <div class="max-w-sm mx-auto items-center py-5">
                    <div className='rounded-xl p-2 mx-auto bg-blue-200 items-center'>
                      <img src={feature.ImageUrl} alt="..." width="34px" height="32px" />
                      </div>
                      <h3 className="artikel-title">{feature.Title}</h3>
                  </div>
                  ))
                  }
                  

                </div>
                </div>
          
           
              {/*<pre>{JSON.stringify(homeFeatureResp,null,2)}</pre>*/} 
            </div>
          </section>

         

          <section className='article-list py-[2rem]'>
            <div className="container">
              <div className="flex justify-between items-center">
                <div className='flex items-center'>
                  <h2  className='innovate-text'>Let's Innovate</h2>
                  <Link to='/article/create'
                    className='btn-yellow'
                    >Buat Artikel</Link>
                </div>
                <Link to='/article/all' className='lihat-semua'>Lihat Semua</Link>
              </div>

              <Swiper
            slidesPerView={4}
            breakpoints={{
              320: {
                slidesPerView: 2.3,
              },
              500:{
                slidesPerView: 3.5,
              },
              600:{
                slidesPerView: 4,
              },
            
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
          {
                      homeArticleResp.map((article,index) => (
              <SwiperSlide>
                <Link to="/article/read">
                 <div className="max-w-sm mx-auto rounded-xl items-center space-x-1 px-2 py-3">
                <img src={article.ImageUrl} alt="..." className="img-article"/>
                <h3 class="text-title">{article.Title}</h3>
                <p class="text-description">{article.Description}</p>
                <div className="flex mt-3">
                  <div className='flex'>
                    <img src={Like} alt="..." width="26.03" height="23.21" className='img-like'/>
                    <span className="text-like pl-3">{article.TotalFavorite}K</span>
                    </div>
                    <div className='flex pl-5'>
                      <img src={Comment} alt="..." width="23.42" height="23.42" className='img-comment'/>
                      <span className="text-like pl-3">{article.TotalComment}K</span>
                      </div>
                      </div>
                      </div>
                      </Link>

              </SwiperSlide>
              ))
              }
              </Swiper>
              {/*
              <div className="list-articel">

              {
                      homeArticleResp.map((article,index) => (

              <div className="max-w-sm mx-auto rounded-xl items-center space-x-1 px-2 py-3">
                <img src={article.ImageUrl} alt="..." className="img-article"/>
                <div class="text-xl font-medium text-black">{article.Title}</div>
                <p class="text-zinc-900">{article.Description}</p>
                <div className="flex mt-3">
                  <div className='flex'>
                    <img src={Like} alt="..." width="26.03" height="23.21"/>
                    <span className="pl-3">{article.TotalFavorite}K</span>
                    </div>
                    <div className='flex pl-5'>
                      <img src={Comment} alt="..." width="23.42" height="23.42"/>
                      <span className="pl-3">{article.TotalComment}K</span>
                      </div>
                      </div>
                      </div>
                        ))
                      }

             
                </div>
                */}


             {/*<pre>{JSON.stringify(homeArticleResp,null,2)}</pre>*/}
            </div>
          </section>

         

          <section className='features hidden lg:flex'>
            <div className="container">

            <div class="py-8 min-w-lg mx-auto bg-white rounded-xl shadow-lg items-center">
           

                <div className="list-articel">
                {
                      homeFeatureResp.map((feature,index) => (
                  <div className='px-3 mx-auto grid justify-items-center'>
                    <div className='rounded-xl bg-blue-200 grid justify-items-center p-6'>
                      <img src={feature.ImageUrl} alt="..." width="71.27" height="67.08"/>
                      </div>
                      <div className='grid justify-items-center'>
                      <h3 className='artikel-title pb-5'>{feature.Title}</h3>
                      </div>
                  </div>
                  ))
                  }
                  

                </div>
                <div className='grid justify-items-end px-10 pt-5'>
                <Link to='/article/create'
                    className='btn-yellow'
                    >
                      <div className="flex">
                      <img src={Edit} alt="..." width="18.68" height="18.68" />
                     &nbsp;
                      Edit
                      </div>
                      </Link>
                    </div>
                
            </div>
           
              {/*<pre>{JSON.stringify(homeFeatureResp,null,2)}</pre>*/} 
            </div>
          </section>

         

          <section className='events py-5'>
            <div className="container">

            <div className="flex justify-between items-center mt-5">
                <div className='flex items-center'>
                  <h2  className=' pr-5'>CoE</h2>
                  
                </div>
                <Link to='/article/all' className='text-event-all'>Lihat Semua</Link>
              </div>

            <Swiper
            slidesPerView={2}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },

              450:{
                slidesPerView: 1.5,
              },

              640:{
                slidesPerView: 2,
              }
             
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
              { homeEventResp.map((event,index) => (
              <SwiperSlide className='swipper'>
                <img src={event.ImageUrl} alt=".." width="524.68" height="173.37" className='w-full'/>
              </SwiperSlide>
              ))
              }
              </Swiper>
          
                {/*<pre>{JSON.stringify(homeEventResp,null,2)}</pre>*/}  
            </div>
          </section>
        </>
  }
}

const Home = function() {
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


export default Home