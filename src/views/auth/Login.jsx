import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { createBrowserHistory } from "history";

import { GlobalContext } from '../../store/global/Provider';
import { api } from '../../boot/axios';
import LoginHeader from "../../components/HeaderLogin";
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import People from '../../assets/images/people 1.png';
import '../../styles/Login.scss';
import LoginBackground from "../../assets/images/login_background.png"
import Like from '../../assets/images/like.png';


const TextFieldCustom = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      backgroundColor: '#fff',
    },
    '& MuiInputBase-input': {
      color: '#000'
    },
  },
});


class Child extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: null,
      password: null,

      formIsDirty: false,
      userIdIsValid: false,
      passwordIsValid: false,
    }

    this.OnChangeInput = this.OnChangeInput.bind(this)
    this.OnSubmitForm = this.OnSubmitForm.bind(this)
  }

  OnChangeInput(event) {

    switch (event.target.name) {
      case 'userId':
        if (event.target.value.trim() !== '') {
          this.setState({userIdIsValid: true})
        } else {
          this.setState({userIdIsValid: false})
        }
        break;
      case 'password':
        if (event.target.value.trim() !== '') {
          this.setState({passwordIsValid: true})
        } else {
          this.setState({passwordIsValid: false})
        }
        break;
    }
    
    this.setState((prevState) => ({
      ...prevState,
      formIsDirty: true,
      [event.target.name]: event.target.value
    }))
  }

  OnSubmitForm(event) {
    event.preventDefault()

    const { userId, password } = this.state
    const {
      api: {
        login: apiLogin
      }
    } = window.processEnv
    

    api({
      method: 'POST',
      url: apiLogin,
      data: JSON.stringify({
        UserId: userId,
        Password: password,
      })
    })
    .then(response => {
      const { Status, Message, Data } = response.data

      if ( Status === 200 && Object.keys(Data).length ) {

        Object.keys(Data).forEach(item => {
          localStorage.setItem(item, JSON.stringify(Data[item]))
        })
        
        this.props.history.push('/')
        this.props.history.go()
        // window.location.href = '/'
      } else {
        
      }
    })
    .catch((error) => {
      console.error(error)
    })


  }

  componentDidMount() {

  }

  render() {

    const {
      userId,
      password,
      formIsDirty,
      userIdIsValid,
      passwordIsValid
    } = this.state

    return (
      <>
      <LoginHeader/>
        <section className='login-section flex h-screen '>
      
          <div className="w-full container">
            <div className="flex lg:flex-row md:flex-col sm:flex-col lg:gap-x-20 md:gap-x-0 h-screen items-center ">
              <div  >
                <img src={People} alt=".." width="749" height="200" className='people z-40'/>
                </div>
              {/* <div className="col col-span-2"></div> */}
            
              <div>
              
             
                <form
                  onSubmit={this.OnSubmitForm}
                  className="form-login block bg-black text-white w-96 rounded-lg p-6 mb-[4rem] md:mb-0 z-40"
                  >
            

                  <div className="flex flex-col mb-3 pt-5">
                  <h2 className='text-white text-left mb-5'>LOGIN</h2>
                    <label
                      htmlFor="userId"
                      className='text-sm text-yellow-400 mb-3'
                      >User ID</label>
                    <input 
                      type='text'
                      className='rounded-md p-3 text-gray-800'
                      name='userId'
                      id='userId'
                      defaultValue={userId}
                      onChange={this.OnChangeInput}
                      />
                    {
                      formIsDirty && !userIdIsValid &&
                      <small className='text-red-500 italic'>This field is required</small>
                    }
                  </div>

                  <div className="flex flex-col mb-3">
                    <label
                      htmlFor="password"
                      className='text-sm text-yellow-400 mb-3'
                      >Password</label>
                    <input 
                      type='text'
                      className='rounded-md p-3 text-gray-800'
                      name='password'
                      id='password'
                      defaultValue={password}
                      onChange={this.OnChangeInput}
                      />
                    {
                      formIsDirty && !passwordIsValid &&
                      <small className='text-red-500 italic'>This field is required</small>
                    }
                  </div>

                  <div className='mt-[1.5rem] pb-8'>
                    <button
                      type='submit'
                      disabled={!formIsDirty || !userIdIsValid || !passwordIsValid ? true : ''}
                      className='bg-yellow-400 px-4 py-2 rounded-md text-black text-sm disabled:opacity-75'
                      >
                      Login
                    </button>
                  </div>

                </form>

              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

const Login = function() {
  let { page } = useParams()
  const history = createBrowserHistory()
  const location = useLocation()

  const urlQuery = new URLSearchParams(window.location.search);

  return (
    <GlobalContext.Consumer>
      {context => (
        <Child
          // {...props}
          urlQuery={urlQuery}
          context={context}
          page={page}
          history={history}
          location={location}
          />
      )}
    </GlobalContext.Consumer>
  )
}

export default Login