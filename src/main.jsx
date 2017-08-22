import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import { Router, Route, Redirect, browserHistory } from 'react-router'

import { store } from './store'
import { Layout, Journal } from './'

import { actions } from './__data__'

import { loadMessages } from 'src/core_modules'

const initJournal = () => (
  store.dispatch(actions.journalFetch())
)

ReactDom.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={Layout}>
        <Route
          path='journal'
          component={Journal}
          onEnter={initJournal()}
        />
      </Route>
      <Redirect from='/' to='/journal' />
    </Router>
  </Provider>
  ,
  document.getElementById('app')
)
