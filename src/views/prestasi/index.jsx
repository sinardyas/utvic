import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../store/global/Provider'

import 'swiper/css';
import '../../styles/Prestasi.scss';
import PageSpinner from '../../components/Spinner-1';
import Link from '@mui/material/Link';
import Pagination from '../../components/Paginations'

import Foto from "../../assets/images/foto.png";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import PrestasiLogo from '../../assets/images/menu/prestasi.png';

import Header from '../../components/Header'
import DrawerNav from '../../components/menu/DrawerNav'
import SearchForm from "./SearchForm"
import Download from "../../assets/images/download.png"
import Search from "../../assets/images/search.png"
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import Delete from '../../assets/images/delete_search.png';
import { styled } from '@mui/system';

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
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};





const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  width: auto;
  background: ${'#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 8px;
  
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  padding: 12px 12px;
  color: ${'#000000'};

 

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `,
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: auto;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;

  
  `,
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  padding: 12px 12px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});




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
         List Prestasi
      </Link>
    
    </Breadcrumbs>
  </div>
  </div>
  </section>
     <section className='section-body'>
       <div className="container">

         <div className="flex flex-row justify-between pt-5">
           <div className="title flex flex-row">
           <div className='px-5'>
           <img src={PrestasiLogo} alt="..." />
           </div>
           <div className='flex items-center'>
             <h2>
            Prestasi
            </h2>
           </div>
           </div>
           <div className='pt-20 block md:hidden'>
           <img src={Search} alt=".." />
           </div>
         </div>
        
       </div>
      
     </section>

     <SearchForm/>

      <section className='section-body profile-body lg:pt-10 pb-40 sm:pt-20 w-full'>
        <div className="container">

      <div className="flex flex-col">
        <div className="flex flex-row pb-5 justify-between">
          <div className="flex flex-row">
          <img src={PrestasiLogo} alt="..." width="40" height="47"/>
   
          <div className='flex items-center pl-5'>
          <h2>Total certificate (4)</h2>
          </div>
         

          

          </div>

          <CustomSelect defaultValue={10}>
        <StyledOption value={10}>2019</StyledOption>
        <StyledOption value={20}>2020</StyledOption>
        <StyledOption value={30}>2021</StyledOption>
        <StyledOption value={30}>2022</StyledOption>
      </CustomSelect>
        </div>

        <div className="col-prestasi flex flex-row  gap-5 justify-between  ">
       
        <div class="p-6 bg-white rounded-xl border-solid border-2 border-slate-200 border-l-orange-300 w-full">
                <div className='flex flex-row'>
                  <div>
                <img src={PrestasiLogo} alt="..." width="40" height="47"/>
                </div>
                <div className='list-content1'>
                <div className="content-list flex flex-col pl-5">
                  <div className="flex flex-col ">
                  <div className="content-prestasi flex flex-row ">
                    <span className='pr-5 font-content'>Prestasi :</span>
                   
                    <span className='font-subcontent'>Juara&nbsp;2&nbsp;Grand&nbsp;Final</span>
                  </div>
                  <div className="content-prestasi flex flex-row  pt-2">
                    <span className='pr-9 font-content'> Judul :</span>
                  
                    <span className='font-subcontent'>STAR</span>
                  </div>
                  </div>
                  <div className="flex flex-row pt-2 hidden md:flex ">
                    <span className='pr-10 font-content'>Role :</span>
                   
                    <span className='font-subcontent'> member</span>
                  </div>

                </div>
              
                <div className=' col-downloadpres'>
                <img src={Download} alt=".." width="105" height="25"/>
                </div>
                </div>

                <div className="flex flex-col block md:hidden ">
                    <span className='pr-10 font-content'>Role&nbsp;:</span>
                    <span className='font-subcontent'> member</span>
                  </div>
                </div>
          </div>
          <div class="p-6   bg-white rounded-xl border-solid border-2 border-slate-200 border-l-orange-300 w-full">
                <div className='flex flex-row'>
                  <div>
                <img src={PrestasiLogo} alt="..." width="40" height="47"/>
                </div>
                <div className='list-content1'>
                <div className="content-list flex flex-col pl-5">
                  <div className="flex flex-col ">
                  <div className="content-prestasi flex flex-row ">
                    <span className='pr-5 font-content'>Prestasi :</span>
                   
                    <span className='font-subcontent'>Juara&nbsp;2&nbsp;Grand&nbsp;Final</span>
                  </div>
                  <div className="content-prestasi flex flex-row  pt-2">
                    <span className='pr-9 font-content'> Judul :</span>
                  
                    <span className='font-subcontent'>STAR</span>
                  </div>
                  </div>
                  <div className="flex flex-row pt-2 hidden md:flex ">
                    <span className='pr-10 font-content'>Role :</span>
                   
                    <span className='font-subcontent'> member</span>
                  </div>

                </div>
                <div className='col-downloadpres'>
                <img src={Download} alt=".." width="105" height="25"/>
                </div>
                </div>
                <div className="flex flex-col block md:hidden ">
                    <span className='pr-10 font-content'>Role&nbsp;:</span>
                    <span className='font-subcontent'> member</span>
                  </div>

                </div>
          </div>
         
          </div>


          <div className="col-prestasi flex lg:flex-row sm:flex-col justify-between gap-5 pt-5">

<div class="p-6   bg-white rounded-xl border-solid border-2 border-slate-200 border-l-orange-300 w-full">
        <div className='flex flex-row'>
          <div>
        <img src={PrestasiLogo} alt="..." width="40" height="47"/>
        </div>
        <div className='list-content1'>
        <div className="content-list flex flex-col pl-5">
                  <div className="flex flex-col ">
                  <div className="content-prestasi flex flex-row ">
                    <span className='pr-5 font-content'>Prestasi :</span>
                   
                    <span className='font-subcontent'>Juara&nbsp;2&nbsp;Grand&nbsp;Final</span>
                  </div>
                  <div className="content-prestasi flex flex-row  pt-2">
                    <span className='pr-9 font-content'> Judul :</span>
                  
                    <span className='font-subcontent'>STAR</span>
                  </div>
                  </div>
                  <div className="flex flex-row pt-2 hidden md:flex ">
                    <span className='pr-10 font-content'>Role :</span>
                   
                    <span className='font-subcontent'> member</span>
                  </div>

                </div>
        <div className='col-downloadpres'>
        <img src={Download} alt=".." width="105" height="25"/>
        </div>
        </div>
        <div className="flex flex-col block md:hidden ">
                    <span className='pr-10 font-content'>Role&nbsp;:</span>
                    <span className='font-subcontent'> member</span>
                  </div>
        </div>
  </div>
  <div class="p-6   bg-white rounded-xl border-solid border-2 border-slate-200 border-l-orange-300 w-full">
        <div className='flex flex-row'>
          <div>
        <img src={PrestasiLogo} alt="..." width="40" height="47"/>
        </div>
        <div className='list-content1'>
        <div className="content-list flex flex-col pl-5">
                  <div className="flex flex-col ">
                  <div className="content-prestasi flex flex-row ">
                    <span className='pr-5 font-content'>Prestasi :</span>
                   
                    <span className='font-subcontent'>Juara&nbsp;2&nbsp;Grand&nbsp;Final</span>
                  </div>
                  <div className="content-prestasi flex flex-row  pt-2">
                    <span className='pr-9 font-content'> Judul :</span>
                  
                    <span className='font-subcontent'>STAR</span>
                  </div>
                  </div>
                  <div className="flex flex-row pt-2 hidden md:flex ">
                    <span className='pr-10 font-content'>Role :</span>
                   
                    <span className='font-subcontent'> member</span>
                  </div>

                </div>
        <div className='col-downloadpres'>
        <img src={Download} alt=".." width="105" height="25"/>
        </div>
        </div>
        <div className="flex flex-col block md:hidden ">
                    <span className='pr-10 font-content'>Role&nbsp;:</span>
                    <span className='font-subcontent'> member</span>
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