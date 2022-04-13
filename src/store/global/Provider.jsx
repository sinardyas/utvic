import React, { useState } from 'react';
import { api } from '../../boot/axios'



const GlobalContext = React.createContext();

const {
  api: {
  }
} = window.processEnv


class GlobalProvider extends React.Component {
  state = {
    auth: null,
    drawer: false,
    kamu:"aku"
  }

  UpdateContextValue = (key, val) => {
    return new Promise((resolve, reject) => {
      this.setState({[key]: val})

      resolve()
    })
  }

  FetchGet({url, errorText = `Error - fetch API`}) {
    return new Promise((resolve, reject) => {
      api({
        method: 'GET',
        url,

        headers: {
          Auth: localStorage.getItem('Token')
        }
      })
      .then(response => {
        const { Status, Message, Data } = response.data
        console.log('Data:', !!(Status === 200 && ( Data && (Data.length || Object.keys(Data).length) )))

        if ( Status === 200 && ( Data && (Data.length || Object.keys(Data).length) ) ) resolve(Data)
        else {reject(Message)}
      })
      .catch((error) => {
        console.error(error)
        reject(errorText)
      })
    });
  }

  componentDidMount() {
    
  }

  render() {
    const {
      auth,
      drawer,
      kamu
    } = this.state

    return (
      <GlobalContext.Provider
        value={{
          auth,
          drawer,
          kamu,
          UpdateContextValue: this.UpdateContextValue,
          FetchGet: this.FetchGet,
        }}
        >
        {this.props.children}
      </GlobalContext.Provider>
    )
  }

}

export {GlobalProvider, GlobalContext}
