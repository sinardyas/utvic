import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { createBrowserHistory } from "history"

import { GlobalProvider, GlobalContext } from './store/global/Provider'

import Header from './components/Header'
import DrawerNav from './components/menu/DrawerNav'


import './styles/App.scss';

import Login from './views/auth/Login'
import Error404 from './views/error/404'

import Home from './views/home'
import Profile from './views/profile'
import Prestasi from './views/prestasi'
import Certifikat from './views/certificate'
import Article from './views/article/_index'


import Makalah from './views/makalah/'
import Dasboard from './views/dashboard/'
import Settings from './views/settings'
import FormMadatory from './views/settings/FormMandatory'
import AddSessionPenjurian from './views/settings/session-penjurian/AddSessionPenjurian';





const PrivateRoute = function ({ children, ...rest }) {

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
                    to={{ pathname: `/` }}
                  />
                  : <Login />
              }
            />

            <Route exact
              path='/'
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />

            <Route exact
              path='/profile'
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />


            <Route exact
              path='/certifikat'
              element={
                <PrivateRoute>
                  <Certifikat />
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
                      <Article />
                    </PrivateRoute>
                  }
                />
              )
            }


            <Route exact
              path='/dashboard'
              element={
                <PrivateRoute>
                  <Dasboard />
                </PrivateRoute>
              }
            />

            <Route
              path='/makalah'
              element={
                <PrivateRoute>
                  <Makalah />
                </PrivateRoute>
              }
            />

            <Route
              path='/setting/mandatory'
              element={
                <PrivateRoute>
                  <FormMadatory />
                </PrivateRoute>
              }
            />

            <Route
              path='/settings'
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            />

            <Route
              path='setting/add-session-penjurian'
              element={
                <PrivateRoute>
                  <AddSessionPenjurian />
                </PrivateRoute>
              }
            />

            <Route
              path='*'
              element={
                <PrivateRoute>
                  <Error404 />
                </PrivateRoute>
              }
            />


          </Routes>
        </main>
      </BrowserRouter>
    </GlobalProvider>
  )
}