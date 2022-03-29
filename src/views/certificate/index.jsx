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
import CertifLogo from '../../assets/images/menu/certif.png';
import Edit from "../../assets/images/edit.png";
import EditPen from "../../assets/images/edit-pen.png";
import Header from '../../components/Header'
import DrawerNav from '../../components/menu/DrawerNav'
import SearchForm from "./SearchForm"
import Download from "../../assets/images/download.png"
import View from "../../assets/images/view.png"
import Share from "../../assets/images/share-certif.png"
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';

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
         List E-Certificate
      </Link>
    
    </Breadcrumbs>
  </div>
  </div>
  </section>
     <section className='hidden md:flex'>
       <div className="container">
         <div className="flex flex-row pt-5">
           <div className='px-5'>
           <img src={CertifLogo} alt="..." />
           </div>
           <div className='flex items-center'>
             <h2>
            E-Certificate
            </h2>
           </div>
         </div>
       </div>
     </section>

     <SearchForm/>

      <section className='profile-body lg:pt-10 pb-40 sm:pt-20'>
        <div className="container">

      <div className="flex flex-col">
      <div className="flex flex-row pb-5 justify-between">
          <div className="flex flex-row">
          <img src={CertifLogo} alt="..." width="40" height="47"/>
          <div className='flex items-center pl-5'>
          <h2>Total Certificate (4)</h2>
          </div>
          </div>

          <CustomSelect defaultValue={10}>
        <StyledOption value={10}>2019</StyledOption>
        <StyledOption value={20}>2020</StyledOption>
        <StyledOption value={30}>2021</StyledOption>
        <StyledOption value={30}>2022</StyledOption>
      </CustomSelect>
        </div>

        <div className="flex lg:flex-row sm:flex-col gap-5">

        <div class="p-6   bg-white rounded-xl border-solid border-2 border-slate-200  w-full">
                <div className='flex flex-row'>
                  <div>
                <img src={CertifLogo} alt="..." width="40" height="47"/>
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
                <div className='flex flex-col'>
                <img src={View} alt=".." width="71" height="26" />
                <img src={Download} alt=".." width="105" height="25" className='pt-2'/>
                <img src={Share} alt=".." width="76" height="25" className='pt-2'/>
                </div>
                </div>
          </div>
          <div class="p-6   bg-white rounded-xl border-solid border-2 border-slate-200  w-full">
                <div className='flex flex-row'>
                  <div>
                <img src={CertifLogo} alt="..." width="40" height="47"/>
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
                <div className='flex flex-col'>
                <img src={View} alt=".." width="71" height="26" />
                <img src={Download} alt=".." width="105" height="25" className='pt-2'/>
                <img src={Share} alt=".." width="76" height="25" className='pt-2'/>
                </div>
                </div>
          </div>
          </div>
          <div className="flex lg:flex-row sm:flex-col gap-5 pt-5">

<div class="p-6   bg-white rounded-xl border-solid border-2 border-slate-200  w-full">
        <div className='flex flex-row'>
          <div>
        <img src={CertifLogo} alt="..." width="40" height="47"/>
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
        <div className='flex flex-col'>
                <img src={View} alt=".." width="71" height="26" />
                <img src={Download} alt=".." width="105" height="25" className='pt-2'/>
                <img src={Share} alt=".." width="76" height="25" className='pt-2'/>
                </div>
        </div>
  </div>
  <div class="p-6   bg-white rounded-xl border-solid border-2 border-slate-200  w-full">
        <div className='flex flex-row'>
          <div>
        <img src={CertifLogo} alt="..." width="40" height="47"/>
        </div>
        <div className="flex flex-col pl-5 pr-20">
          <div className="flex flex-row">
            <span className='pr-5'>Certificate</span>
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
        <div className='flex flex-col'>
                <img src={View} alt=".." width="71" height="26" />
                <img src={Download} alt=".." width="105" height="25" className='pt-2'/>
                <img src={Share} alt=".." width="76" height="25" className='pt-2'/>
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