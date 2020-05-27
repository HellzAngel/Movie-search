import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from '../../components/layouts/Index'
import View from '../../components/movi/View'


class Page extends Component {
    render() {
        return (
            <Router>
            <div className="container" >
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/movie/movies/:id" component={View} />
            </Switch>
            
            </div>
            </Router>
        )
    }
}
export default Page
