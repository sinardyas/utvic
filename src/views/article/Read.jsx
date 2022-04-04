import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../store/global/Provider'
import { api } from '../../boot/axios'
import PageSpinner from '../../components/Spinner-1'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Share from "../../assets/images/share.png"
import BannerArtikel from "../../assets/images/banner-artikel.png"
import Love from "../../assets/images/love.png"
import CommentPhoto from "../../assets/images/comment_img.png"
import Calendar from "../../assets/images/calender.png"
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Like from '../../assets/images/like.png';
import Comment from '../../assets/images/comment.png';
import "../../styles/Artikel.scss"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Header from '../../components/Header'
import DrawerNav from '../../components/menu/DrawerNav'
const {
  api: {
    articleDetail: apiArticleDetail,
    homeArticle: apiHomeArticle,
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
          url: apiHomeArticle,
          errorText: 'Error while fetch Home Article'
        }),
        FetchGet({
          url: apiArticleDetail,
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

    //const {
    //  html
  //  } = this.props

  const {
    pageIsLoading,
    response: [
      
    
      homeArticleResp,
      html,
    
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
    <section className='space-from-header py-[1rem] bg-slate-200 hidden md:flex'>
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
         Let’s Innovate
      </Link>
      <Link
        underline="hover"
        color="inherit"
       
        className='font-bold'
      >
         Agricultural Drone
      </Link>
    
    </Breadcrumbs>
  </div>
  </div>
  </section>
  <section className='section-article lg:pt-5 sm:pt-20'>
    <div className="container">
      <div className="flex flex-row justify-between">
        <div>
          <div className='flex w-10/12'>
      <h1 className='artikel-title'>The Agricultural Drone Market Could Reach $6 Billion in 5 Years</h1>
      </div>
      </div>
      <div className='date-col'>
      <span>18&nbsp;Jan,&nbsp;2022&nbsp; </span>
      <img src={Share} alt=".." className='share'/>
      </div>

      </div>
     
    </div>
  </section>
  <section className='p-0 mt-5'>
    <img src={BannerArtikel} alt=".." width="1440" height="740"/>
  </section>
      <section className='pt-10'>
        <div className="container">
          <article className='article-content'>
            <p>
            Drones have helped redefine farming over the last two years. If used properly, they can result in improved crop yields, higher economic returns, and more efficient use of water and labor. The use of UAVs in agriculture can even help lower greenhouse gas emissions since they require less fuel than bulkier, motorized farm equipment (crop dusters, anyone?)
            </p>
            <br />
           
           {/* <pre>{JSON.stringify(html, null, 2)}</pre>*/}

          
           
          </article>
        <article>
      
          <p>Drones have helped redefine farming over the last two years. If used properly, they can result in improved crop yields, higher economic returns, and more efficient use of water and labor. The use of UAVs in agriculture can even help lower greenhouse gas emissions since they require less fuel than bulkier, motorized farm equipment (crop dusters, anyone?)

In their brief time on the agricultural market, drones have made a substantial impact. But is this just a passing trend, or will the market continue to grow on the same exponential trajectory it is today?</p>

        </article>

        <article>
        <br />
          <strong>Projected Growth of the Agricultural Drone Market</strong>
          <br />
          <br />
          <p>
          Investment bank Goldman Sachs predicts that in five years, the drone industry overall will hit $100 billion thanks to their attractiveness for commercial, hobby, and civil government functions. They predict the full economic potential of drones could be even larger as their effects ripple through the economy.


          </p>
          <br />
          <p>According to Goldman Sachs, agriculture is one of the industries with the most potential growth opportunity from drones. Their research states that in the next five years, the agricultural drone market will be estimated at $5.9 billion.</p>
        </article>

        <div className="flex flex-row gap-5 pt-7">
          <div className='flex flex-row justify-between w-36 items-center px-4 py-3 mr-2 text-xs font-bold leading-none text-slate-900 border border-slate-500 rounded-full'>
         
            <div>
            <img src={Love} alt="..." width="24" height="24"/>
            </div>
         <div>
         <span>Like</span>
         </div>
          <div>
          <span class="inline-flex items-center justify-center py-2 px-3 mr-2 text-xs font-bold leading-none text-red-100 bg-slate-500 rounded-full">9</span>

          </div>
        
          </div>

          <div className='flex flex-row justify-between w-36 items-center px-4 py-3 mr-2 text-xs font-bold leading-none text-slate-900 border border-slate-500 rounded-full'>
         
            <div>
            <img src={Share} alt="..." width="24" height="24"/>
            </div>
         <div>
         <span>Share</span>
         </div>
          <div>
          <span class="inline-flex items-center justify-center py-2 px-3 mr-2 text-xs font-bold leading-none text-red-100 bg-slate-500 rounded-full">9</span>

          </div>
        
          </div>


          </div>

        </div>
      </section>
      <section className='section-commment pt-12'>
        <div className="container">
          <div className='flex flex-row gap-2'>
          <h3 className='font-semibold'>Komentar</h3>
          <span class="inline-flex items-center justify-center py-2 px-3 mr-2 text-xs font-bold leading-none text-black bg-amber-400 rounded-full">9</span>

          </div>
        

          <div className='pt-8'>
          <div class="flex">
  <ul class="bg-white rounded-lg w-full text-gray-900">
  <hr className='pb-3'/>
    <li class="lg:px-6 sm:px-0 py-2 border-b border-gray-200 w-full rounded-t-lg">
      <div className="flex flex-row gap-5">
      
          <img src={CommentPhoto} alt=".." width="72" height="72" className='comment-foto'/>
          
        <div >
          <div className='flex flex-row'>
            <div className='padding-comment flex'> <span className='font-semibold'>Fariz Sumarjo</span></div>
            <div className='flex flex-row'>
              <div>
            <img src={Calendar} alt="..." width="24" height="24"/>
            </div>
            <span className='date text-slate-500'>19 Jan, 2022</span>

          </div>
         
          </div>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
       
        </div>

      </div>
      <ul className='pl-16 pt-5'>
        <hr />
        <li className='pt-5'>
        <div className="flex flex-row lg:gap-5 sm:gap-2">
      
       
          <img src={CommentPhoto} alt=".."  className='comment-foto'/>
          
        
        <div>
          <div className='col-comment flex flex-row'>
            <div className='flex padding-comment'> 
            <span className='font-semibold'>Fariz Sumarjo</span>
            </div>
            
            <div className='flex flex-row'>
              <div>
            <img src={Calendar} alt="..." width="24" height="24"/>
            </div>
            <span className='date text-slate-500'>19 Jan, 2022</span>

          </div>
         
          </div>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
       
        </div>

      </div>
        </li>
      </ul>
    </li>
    
  
  
  </ul>
</div>
          </div>
       
        </div>
      </section>

      <section className='pb-16 pt-10'>
        <div className="container">

        <h3 className='font-semibold pb-5'>Komentar</h3>

        <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      
      className='textarea min-h-[10%] w-full '
    />
<div className='pt-5'>
<button
                      type='submit'
                     
                      className='bg-yellow-400 px-4 py-2 rounded-md text-black text-sm disabled:opacity-75'
                      >
                      Kirim
                    </button>
                    </div>

        </div>
      </section>

      <section>
        <div className="container">
        <h3 className='font-semibold'>Artikel Lainnya</h3>
        </div>
      </section>

      <section className='pb-16 pt-5 hidden md:flex'>

        <Swiper
  slidesPerView={2.5}
  spaceBetween={30}
  breakpoints={{
    320: {
      slidesPerView: 1,
    },

    450:{
      slidesPerView: 1.5,
    },

    640:{
      slidesPerView: 2.5,
    }
   
  }}
onSlideChange={() => console.log('slide change')}
onSwiper={(swiper) => console.log(swiper)}>
{
          homeArticleResp.map((article,index) => (
  <SwiperSlide>
    <div class="w-full mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-6">
<img class="img-artikel-read rounded-xl" src={article.ImageUrl} alt="ChitChat Logo"/>

  <div>
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
    </div>
  </SwiperSlide>
  ))
  }
  </Swiper>

      </section>


      <section className='block md:hidden'>
        <div className="container">
        <div className='list-artikel'>
          {
                      homeArticleResp.map((article,index) => (
            
                 

                  
<div className='pr-2'>
<div class="w-full mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-6">
<img class="img-artikel-read rounded-xl" src={article.ImageUrl} alt="ChitChat Logo"/>

  <div>
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
    </div>
</div>

                      
              ))
              }
              </div>
        </div>
      </section>
    </>
  }
}


const Read = function({...props}) {
  // let { pageType, pageOption } = props
  
  let { type: slug, option } = useParams()
  const navigate = useNavigate()

  const [response, setResponse] = useState(null)
  const [pageIsLoading, setPageIsLoading] = useState(true)

  useEffect(() => {
    api({
      method: 'POST',
      url: apiArticleDetail,
      headers: {
        Auth: localStorage.getItem('Token')
      },
      data: JSON.stringify({
        slug
      })
    })
    .then(response => {
      const { Status, Message, Data } = response.data

      if ( Status === 200 && ( Data && (Data.length || Object.keys(Data).length) ) ) {

        setResponse(response => response = Data)
        setPageIsLoading(pageIsLoading => pageIsLoading = false)

      } else {
        navigate('/404', {replace: true})
      }
    })
    .catch((error) => {
      console.error(error)
      navigate('/404', {replace: true})
    })
  }, [])

  return pageIsLoading
    ? <PageSpinner/>
    : (
      <GlobalContext.Consumer>
        {context => (
          <>
            <Child
              {...props}
              context={context}
              navigate={navigate}
              pageType={slug}
              pageOption={option}
              html={response}
              />
          </>
        )}
      </GlobalContext.Consumer>
    )
}

export default Read