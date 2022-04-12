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

<div className="flex flex-row justify-between items-center pb-5">
          <h2>Quiz 1</h2>
          <div class="p-1 bg-white rounded-full border-solid border-2 border-red-700">
          <span class="dot">
              <div className='flex flex-col items-center py-5'>
              <h2>100</h2>
              <h2>Point</h2>
              </div>
          </span>
          </div>
      </div>
      <div className="list-setting">
        <div className="pb-5">
  <div class="p-6 bg-white rounded-xl border-solid border-2 border-slate-200 w-full">
 
  <div className="flex flex-row gap-3">
<span>1.&nbsp;</span>
<div className="flex flex-col">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
<div className="flex flex-row pt-5 justify-between">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">&nbsp;Jawaban A</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option1"/>
  <label class="form-check-label" for="inlineRadio2">&nbsp;Jawaban B</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option1"/>
  <label class="form-check-label" for="inlineRadio3">&nbsp;Jawaban C</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option1"/>
  <label class="form-check-label" for="inlineRadio4">&nbsp;Jawaban D</label>
</div>
  </div>
</div>
  </div>
 
 
</div>
</div>
<div className="pb-5">
<div class="p-6 bg-white rounded-xl border-solid border-2 border-slate-200 w-full">
 
<div className="flex flex-row gap-3">
<span>1.&nbsp;</span>
<div className="flex flex-col">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
<div className="flex flex-col pt-5">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">&nbsp;Jawaban A</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option1"/>
  <label class="form-check-label" for="inlineRadio2">&nbsp;Jawaban B</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option1"/>
  <label class="form-check-label" for="inlineRadio3">&nbsp;Jawaban C</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option1"/>
  <label class="form-check-label" for="inlineRadio4">&nbsp;Jawaban D</label>
</div>
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