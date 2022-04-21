import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom' 
import AppNavbar from './components/layouts/navbar'
// import Index from './components/layouts/Index'
// import View from './components/movi/View'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Provider1} from './context';
import {Provider} from 'react-redux'
import store from './store'
 import {loadUser} from './actions/authAction'
class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser())
  }
  render(){
    return(
      <Provider store={store}>
      <Provider1>
      <Router>
        <React.Fragment>
          <AppNavbar />
          {/* <div className="container" >
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/movie/movies/:id" component={View} />
            </Switch>
            </div> */}
         </React.Fragment>
      </Router>
      </Provider1>
      </Provider> 
    );
  }
}


export default App;
