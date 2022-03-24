// src/boot/axios.js

import axios from 'axios'
import axiosRetry from 'axios-retry'

const api = axios.create({
  headers: {
     /*common: {
       Auth: localStorage.getItem('Token') 
         ? localStorage.getItem('Token')
         : '',
     },
  'Content-Type': 'application/json'*/
  }
})

const axiosRetryOpts = {
  retries: 3,
  retryDelay: (retryCount) => {
    return retryCount * 2000
  },
  retryCondition: (error) => {
    return error.response.status === 503
  },
}

axiosRetry(axios, axiosRetryOpts)
axiosRetry(api, axiosRetryOpts)

export { axios, api }