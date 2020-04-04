import React from 'react'
import './App.scss'

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import ConversationPage from './pages/conversation'
import ConversationDetailsPage from './pages/conversation-details'

import { Experiment } from './components/experiment/experiment'

export default () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={ConversationPage} exact />
        <Route path='/c/:id' component={ConversationDetailsPage} exact />
        <Route path='/ex/' component={Experiment} exact />
        <Route path='/' render={() => <Redirect to='/' />} />
      </Switch>
    </Router>
  )
}

/*
  <div className='main-container'>
      <div id='content'>

      <div id='left-container'>
        /<Sidebar title='Left sidebar goes here.' />

      </div>
      <div id='middle-container'>
      <div id='message-list'>
        {data.map(x => {
          const { id, message, timestamp } = x

          return (
            <Message
              key={id}
              id={id}
              message={message}
              timestamp={timestamp}
            />
          )
        })}
      </div>
      <div id='entry-message'>
        <EntryMessage />
      </div>
    </div>
    <div id='right-container'>
    <Sidebar title='Right sidebar goes here.' />
  </div>
  </div>
  <div id='tab'>
    <TabBar>
      <button key='Tab1' style={{ flexGrow: 1 }}>
        Tab1
      </button>
      <button key='Tab2' style={{ flexGrow: 1 }}>
        Tab2
      </button>
      <button key='Tab3' style={{ flexGrow: 1 }}>
        Tab3
      </button>
    </TabBar>
  </div>
</div>
      */
