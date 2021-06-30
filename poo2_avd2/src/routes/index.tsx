import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import New from '../pages/New'

const Routes: React.FC = () => (
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/events/:id' exact component={New} />
    </Switch>
  )

  export default Routes