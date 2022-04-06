import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../store/global/Provider'

import 'swiper/css';
import '../../styles/stars.scss';
import PageSpinner from '../../components/Spinner-1';

import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Task from "./CardTask"

const { 
  api: {
    homeBanner: apiHomeBanner,
    homeArticle: apiHomeArticle,

    homeFeature: apiHomeFeature,
    homeEditFeature: apiHomeEditFeature,
    homeEvent: apiHomeEvent,
  }
} = window.processEnv


const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: '#000000';
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  -webkit-border-top-left-radius: 8px;
  -webkit-border-top-right-radius: 8px;
  -moz-border-radius-topleft: 8px;
  -moz-border-radius-topright: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #FFCD00;
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    
    background-color: #FFCD00;
   
    outline-offset: 2px;
    -webkit-border-top-left-radius: 8px;
-webkit-border-top-right-radius: 8px;
-moz-border-radius-topleft: 8px;
-moz-border-radius-topright: 8px;
border-top-left-radius: 8px;
border-top-right-radius: 8px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #FFCD00;
    color: #000000;
    -webkit-border-top-left-radius: 8px;
-webkit-border-top-right-radius: 8px;
-moz-border-radius-topleft: 8px;
-moz-border-radius-topright: 8px;
border-top-left-radius: 8px;
border-top-right-radius: 8px;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
 
  border-radius: 8px;
  width: 83px;
  display: flex;
  align-items: center;
  justify-content: start;
 
`;

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
       <TabsUnstyled defaultValue={0}>
         <div className="flex flex-col gap-0">
      <TabsList className='pt-0'>
        <Tab>WINA</Tab>
        <Tab>RITA</Tab>
        <Tab>FITA</Tab>
      </TabsList>
      <div class="p-6 bg-white rounded border-solid border-2 border-slate-200  w-full">
                <div className='flex flex-col'>
                <TabPanel value={0}><Task/></TabPanel>
      <TabPanel value={1}><Task/></TabPanel>
      <TabPanel value={2}><Task/></TabPanel>
                  </div>
                  </div>
                  </div>
      
    </TabsUnstyled>

       </div>
     </section>


      
       
        </>
  }
}

const Sensational = function() {
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


export default Sensational