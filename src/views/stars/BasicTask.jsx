import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../store/global/Provider'

import 'swiper/css';
import '../../styles/stars.scss';
import PageSpinner from '../../components/Spinner-1';
import Link from '@mui/material/Link';

import Breadcrumbs from '@mui/material/Breadcrumbs';

import Header from '../../components/Header'
import DrawerNav from '../../components/menu/DrawerNav'
import Task from "../../assets/images/task.png"


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
  

     <section className='section-body pt-5'>
       <div className="container">
       <div className='list-task'>
         <div className="max-w-sm mx-auto rounded-xl items-center space-x-1 px-2 py-3">
           <img src={Task} alt="..." className="img-article"/>
           <h3 class="text-title">Introduction to Machine Learning in Production</h3>
          </div>

          <div className="max-w-sm mx-auto rounded-xl items-center space-x-1 px-2 py-3">
           <img src={Task} alt="..." className="img-article"/>
           <h3 class="text-title">Introduction to Machine Learning in Production</h3>
          </div>

          <div className="max-w-sm mx-auto rounded-xl items-center space-x-1 px-2 py-3">
           <img src={Task} alt="..." className="img-article"/>
           <h3 class="text-title">Introduction to Machine Learning in Production</h3>
          </div>

          <div className="max-w-sm mx-auto rounded-xl items-center space-x-1 px-2 py-3">
           <img src={Task} alt="..." className="img-article"/>
           <h3 class="text-title">Introduction to Machine Learning in Production</h3>
          </div>

        </div>

       </div>
     </section>


      
       
        </>
  }
}

const Admin = function() {
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


export default Admin