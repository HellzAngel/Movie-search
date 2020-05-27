import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'reactstrap'
import {logout} from '../../actions/authAction'
import PropTypes from 'prop-types'
// import Page from '../layouts/page'
// import Log from '../layouts/Log'

export class Logout extends Component {
    static propTypes={
        logout:PropTypes.func.isRequired
    }
    render() {
        return (
           <Fragment>
               <NavLink onClick={this.props.logout} href='#'>
                   Logout
               </NavLink>
               {/* <div>
            {isAuthenticated = false ? <Log/> : <Page/>}
            </div> */}
           
           </Fragment>
        )
    }
}

export default connect(null,
    {logout})
    (Logout);
