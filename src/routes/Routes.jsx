import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/common/Home';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import PageNotFound from '../components/common/PageNotFound';
import { connect } from 'react-redux'

class Routes extends Component {
    render() {
        let loginStatus = this.props.loginStatus
        return (
            <>
                <Switch>
                    <Route exact path='/' render={() => loginStatus ? <Home /> : <Redirect to='/login' />} />
                    <Route exact path='/home' render={() => loginStatus ? <Home /> : <Redirect to='/login' />} />
                    <Route exact path='/login' render={() => <Login />} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/register' render={() => <Register />} />
                    <Route exact render={() => <PageNotFound />} />
                </Switch>
            </>
        )
    }
}

const mapStateToProps = state => ({
    loginStatus: state.loginStatus
})


export default connect(mapStateToProps)(Routes)