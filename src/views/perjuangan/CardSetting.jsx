import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../store/global/Provider'

import 'swiper/css';
import '../../styles/Perjuangan.scss';
import PageSpinner from '../../components/Spinner-1';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import Unlock from "../../assets/images/unlock.png"
import Date from "../../assets/images/date.png"
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Edit from "../../assets/images/edit-setting.png"
import Delete from "../../assets/images/delete.png"

const { 
  api: {
    homeBanner: apiHomeBanner,
    homeArticle: apiHomeArticle,

    homeFeature: apiHomeFeature,
    homeEditFeature: apiHomeEditFeature,
    homeEvent: apiHomeEvent,
  }
} = window.processEnv


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 83,
  height: 47,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(35px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#000000',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    backgroundColor:'#FFCD00',
    width: 40,
    height: 40,
   
  },
  '& .MuiSwitch-track': {
    borderRadius: 50 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#000000' : '#000000',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

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
      <div className="list-setting">
        <div className="pb-5">
  <div class="p-6 bg-white rounded-xl border-solid border-2 border-slate-200 w-full">
 <div className="flex flex-col">
  <div className="flex flex-row justify-between w-full">
      <div className="flex flex-col w-full">
        <div className="flex flex-row gap-5">
          <div className="w-full" >
         
    <p className='font-bold'>LDR Mandiri &amp; Online Genba</p>
    </div>
    <div className="w-4/12 block md:hidden" >
    <FormControlLabel
        control={<IOSSwitch  defaultChecked />}
        label=""
      />
      </div>
    </div>
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
      </div>
      <div className="flex flex-row  w-9/12 justify-between items-center hidden md:flex">
      <div class="verikal_center"></div>
        <h3 className='font-bold'>25%</h3>
      <FormControlLabel
        control={<IOSSwitch  defaultChecked />}
        label=""
      />
      <div>
      <img src={Edit} alt=".." width="47" height="47"/>
      </div>
      <div>
      <img src={Delete} alt=".." width="47" height="47"/>
      </div>

      </div>
      

  </div>
  <div className="flex flex-row gap-3 mt-5  w-full  items-center block md:hidden">
    
        <h3 className='font-bold'>25%</h3>
    
      <div>
      <img src={Edit} alt=".." width="47" height="47"/>
      </div>
      <div>
      <img src={Delete} alt=".." width="47" height="47"/>
      </div>

      </div>
  </div>
</div>
</div>
<div className="pb-5">
  <div class="p-6 bg-white rounded-xl border-solid border-2 border-slate-200 w-full">
 <div className="flex flex-col">
  <div className="flex flex-row justify-between w-full">
      <div className="flex flex-col w-full">
        <div className="flex flex-row gap-5">
          <div className="w-full" >
         
    <p className='font-bold'>LDR Mandiri &amp; Online Genba</p>
    </div>
    <div className="w-4/12 block md:hidden" >
    <FormControlLabel
        control={<IOSSwitch  defaultChecked />}
        label=""
      />
      </div>
    </div>
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
      </div>
      <div className="flex flex-row  w-9/12 justify-between items-center hidden md:flex">
      <div class="verikal_center"></div>
        <h3 className='font-bold'>25%</h3>
      <FormControlLabel
        control={<IOSSwitch  defaultChecked />}
        label=""
      />
      <div>
      <img src={Edit} alt=".." width="47" height="47"/>
      </div>
      <div>
      <img src={Delete} alt=".." width="47" height="47"/>
      </div>

      </div>
      

  </div>
  <div className="flex flex-row gap-3 mt-5  w-full  items-center block md:hidden">
    
        <h3 className='font-bold'>25%</h3>
    
      <div>
      <img src={Edit} alt=".." width="47" height="47"/>
      </div>
      <div>
      <img src={Delete} alt=".." width="47" height="47"/>
      </div>

      </div>
  </div>
</div>
</div>
<div className="pb-5">
  <div class="p-6 bg-white rounded-xl border-solid border-2 border-slate-200 w-full">
 <div className="flex flex-col">
  <div className="flex flex-row justify-between w-full">
      <div className="flex flex-col w-full">
        <div className="flex flex-row gap-5">
          <div className="w-full" >
         
    <p className='font-bold'>LDR Mandiri &amp; Online Genba</p>
    </div>
    <div className="w-4/12 block md:hidden" >
    <FormControlLabel
        control={<IOSSwitch  defaultChecked />}
        label=""
      />
      </div>
    </div>
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
      </div>
      <div className="flex flex-row  w-9/12 justify-between items-center hidden md:flex">
      <div class="verikal_center"></div>
        <h3 className='font-bold'>25%</h3>
      <FormControlLabel
        control={<IOSSwitch  defaultChecked />}
        label=""
      />
      <div>
      <img src={Edit} alt=".." width="47" height="47"/>
      </div>
      <div>
      <img src={Delete} alt=".." width="47" height="47"/>
      </div>

      </div>
      

  </div>
  <div className="flex flex-row gap-3 mt-5  w-full  items-center block md:hidden">
    
        <h3 className='font-bold'>25%</h3>
    
      <div>
      <img src={Edit} alt=".." width="47" height="47"/>
      </div>
      <div>
      <img src={Delete} alt=".." width="47" height="47"/>
      </div>

      </div>
  </div>
</div>
</div>

<div className="pb-5">
  <div class="p-6 bg-white rounded-xl border-solid border-2 border-slate-200 w-full">
 <div className="flex flex-col">
  <div className="flex flex-row justify-between w-full">
      <div className="flex flex-col w-full">
        <div className="flex flex-row gap-5">
          <div className="w-full" >
         
    <p className='font-bold'>LDR Mandiri &amp; Online Genba</p>
    </div>
    <div className="w-4/12 block md:hidden" >
    <FormControlLabel
        control={<IOSSwitch  defaultChecked />}
        label=""
      />
      </div>
    </div>
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
      </div>
      <div className="flex flex-row  w-9/12 justify-between items-center hidden md:flex">
      <div class="verikal_center"></div>
        <h3 className='font-bold'>25%</h3>
      <FormControlLabel
        control={<IOSSwitch  defaultChecked />}
        label=""
      />
      <div>
      <img src={Edit} alt=".." width="47" height="47"/>
      </div>
      <div>
      <img src={Delete} alt=".." width="47" height="47"/>
      </div>

      </div>
      

  </div>
  <div className="flex flex-row gap-3 mt-5  w-full  items-center block md:hidden">
    
        <h3 className='font-bold'>25%</h3>
    
      <div>
      <img src={Edit} alt=".." width="47" height="47"/>
      </div>
      <div>
      <img src={Delete} alt=".." width="47" height="47"/>
      </div>

      </div>
  </div>
</div>
</div>


</div>
       
        </>
  }
}

const CardTask = function() {
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


export default CardTask