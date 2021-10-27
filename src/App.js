
import React from 'react'
import Form from './useEffect/github/form'
import UseEffectAPI from './useEffect/useEffectAPI'
import {BrowserRouter as Router,  Route, Switch } from 'react-router-dom'
const App = () => {
  return (
    <>
    <Router>
<Switch>
     <Route exact path="/" component={ UseEffectAPI }/> 
      <Route exact path="/form" component={Form} />
  </Switch>
    </Router>
</>
  )
}

export default App