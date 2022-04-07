import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../store/global/Provider'
import Search from "./SearchForm"
import "../../styles/Artikel.scss"
import PageSpinner from '../../components/Spinner-1'
import Pagination from '../../components/Paginations'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Comment from '../../assets/images/comment.png';
import TextField from '@mui/material/TextField';
import InputUnstyled from '@mui/base/InputUnstyled';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import Like from '../../assets/images/like.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import Delete from "../../assets/images/delete_search.png"
import SearchLogo from "../../assets/images/search.png"
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

const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: auto;
  font-size: 0.875rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 8px;
  padding: 12px 12px;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:focus {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }
`,
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
  );
});

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: auto;
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 8px;
  
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  padding: 12px 12px;
  color: ${theme.palette.mode === 'dark' ? grey[500] : grey[500]};

 

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
        Let’s Innovate
      </Link>
      <Typography color="text.primary" className='font-bold'>Semua Artikel</Typography>
    </Breadcrumbs>
  </div>
  </div>
  </section>
  
    

    <section className="section-body hidden md:flex pt-10">
          <div className="container">
            <div className="flex lg:flex-row sm:flex-col gap-3">
            <Search/>
                <div className='flex flex-row gap-5'>
                    <div className='flex items-center pt-5'>
                      <button class="active hover:bg-amber-400  active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-400 focus:bg-amber-400 font-bold rounded-full px-5 h-12" onClick={() => {window.location.href="/article/all"}} >
                          Semua Artikel
                      </button>
                    </div>
                    <div className='flex items-center pt-5'>
                      <button class=" hover:bg-amber-400  active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-400 focus:bg-amber-400 font-bold rounded-full px-5 h-12" onClick={() => {window.location.href="/article/my"}}>
                          Artikel Ku
                      </button>
                    </div>
                </div>

            </div>
          </div>
        </section>
    

    <section className="section-body block md:hidden pt-20">
          
          <div className="container">
          
                
            <div className='flex flex-col'>
            <span className='pb-3 font-semibold'>Filter</span>
            <div className='flex flex-row gap-1 '>
              <div className='w-11/12'>
            <CustomSelect defaultValue={10}>
        <StyledOption value={10}>Pilih filter yang diinginkan</StyledOption>
        <StyledOption value={20}>filter 1</StyledOption>
        <StyledOption value={30}>filter 2</StyledOption>
      </CustomSelect>
      </div>
     
      <img src={SearchLogo} alt=".." width="42" height="42"/>
      
      </div>
      </div>
      <div className='flex flex-col mt-5'>
                    <span className='pb-3 font-semibold'>Judul</span>
          <div className='flex flex-row'>
            <div className='w-11/12'>
            <CustomInput aria-label="Search"  type="search"/>
            </div>
            <div className='flex items-center'>
            <img src={Delete} alt=".." width="24" height="24"/>
            </div>
            </div>
            </div>
      <div className='flex flex-row'>
      <div className='flex items-center pt-5'>

      <button class=" hover:bg-amber-400  active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-400 focus:bg-amber-400 font-bold rounded-full px-5 h-12" onClick={() => {window.location.href="/article/all"}}>
  Semua Artikel
</button>



</div>

<div className='flex items-center pt-5'>
<button class=" hover:bg-amber-400  active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-400 focus:bg-amber-400 font-bold rounded-full px-5 h-12" onClick={() => {window.location.href="/article/my"}}>
Artikel Ku
</button>



</div>
</div>

        
          </div>
        </section>
      <section className='section-body pt-12'>
        <div className="container">
       
          <div className='hidden md:flex'>
        <div className='list-artikel'>
          {
                      homeArticleResp.map((article,index) => (
            
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
                      
              ))
              }
              </div>
              </div>
            
        
        <div className='flex justify-center py-12 hidden md:flex'><Pagination/></div>

        <div className='block md:hidden'>
        <div className='list-artikel'>
          {
                      homeArticleResp.map((article,index) => (
            
                 

                  
<div className='pr-2'>
<div class=" bg-white rounded-xl shadow-lg flex items-center space-x-4">
<img class="img-artikel rounded-xl" src={article.ImageUrl} alt="ChitChat Logo"/>

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

              </div>

      </section>

    
   
    </>
  }
}




const List = function({...props}) {
  let { type, option } = useParams()
  const navigate = useNavigate()

  return (
    <GlobalContext.Consumer>
      {context => (
        <Child 
          {...props}
          context={context}
          navigate={navigate}
          pageType={type}
          pageOption={option}
          />
      )}


    </GlobalContext.Consumer>

    
  );
}

export default List