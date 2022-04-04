import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { createBrowserHistory } from "history"

import {GlobalProvider, GlobalContext} from './store/global/Provider'

import Header from './components/Header'
import DrawerNav from './components/menu/DrawerNav'


import './styles/App.scss';

import Login from './views/auth/Login'
import Error404 from './views/error/404'

import Home from './views/home'
//import Profile from './views/profile'
import Profile from './views/profile/_index'
import BotbStar from './views/botbstar/_index'
import Prestasi from './views/prestasi'
import Certifikat from './views/certificate'
import Article from './views/article/_index'
import InnovationProfile from './views/submit-innovation/innovation-profile'
import Analysis from './views/submit-innovation/analysis'



const PrivateRoute = function({ children, ...rest }) {

  const History = createBrowserHistory()

  return (
    !!localStorage.getItem('Token')
    ? (children)
    : (
      History.push('/login'),
      History.go()
    )
  )
}


export default function AppFunc() {

  return (
    <GlobalProvider>
      <BrowserRouter>


        <main>
          <Routes>

            <Route exact
              path='/login'
              element={
              localStorage.getItem('Token')
                ? <Navigate
                    to={{ pathname: `/`}}
                  />
                :<Login />
              }
            />

            <Route exact
              path='/'
              element={
                <PrivateRoute>
                  <Home/>
                </PrivateRoute>
              }
            />

{/*<Route exact
              path='/profile'
              element={
                <PrivateRoute>
                  <Profile/>
                </PrivateRoute>
              }
            />
            */}

<Route exact
              path='/prestasi'
              element={
                <PrivateRoute>
                  <Prestasi/>
                </PrivateRoute>
              }
            />

<Route exact
              path='/certifikat'
              element={
                <PrivateRoute>
                  <Certifikat/>
                </PrivateRoute>
              }
            />

            {
              [
                '/article',
                '/article/:type',
                '/article/:type/:option'
              ].map((path, index) =>
                <Route key={index} path={path}
                  element={
                    <PrivateRoute>
                      <Article/>
                    </PrivateRoute>
                  }
                />
              )
            }

            {
              [
                '/profile',
                '/profile/:type',
                '/profile/:type/:option'
              ].map((path, index) => 
                <Route key={index} path={path}
                  element={
                    <PrivateRoute>
                      <Profile/>
                    </PrivateRoute>
                  }
                />
              )
            }

{
              [
                '/botbstar',
                '/botbstar/:type',
                '/botbstar/:type/:option'
              ].map((path, index) => 
                <Route key={index} path={path}
                  element={
                    <PrivateRoute>
                      <BotbStar/>
                    </PrivateRoute>
                  }
                />
              )
            }

            <Route
              exact
              path={'/submit-innovation/innovation-profile'}
              element={
                <PrivateRoute>
                  <InnovationProfile />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={'/submit-innovation/analysis'}
              element={
                <PrivateRoute>
                  <Analysis />
                </PrivateRoute>
              }
            />

            <Route
              path='*'
              element={
                <PrivateRoute>
                  <Error404/>
                </PrivateRoute>
              }
            />


          </Routes>
        </main>
      </BrowserRouter>
    </GlobalProvider>
  )
}
