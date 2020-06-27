import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/action';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault()
        this.props.loginUser(this.state);
    }
        
    render() {
        return (
            <div>
                <nav className="display-4 p-3 text-center text-white bg bg-dark">Welcome to Login Page</nav>
                <section className="container p-5">
                    <div className="d-flex justify-content-center">
                        <div className="card p-5">
                            <h1 className="text-secondary text-center">Login form</h1>
                            <form onSubmit={this.handelSubmit} action="" className="p-5">
                                <div className="form-group">
                                    <label htmlFor="Email">Email</label>
                                    <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handelChange} placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Password">Password</label>
                                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handelChange} placeholder="Password" required />
                                </div>
                                <button type="submit" className="btn btn-secondary btn-block mt-4">Submit</button>
                                <div className="mt-5">Don't have Account <Link to="/register">Click Here to Register</Link></div>
                            </form>
                        </div>
                    </div>
                </section>
                <Route render={() => this.props.loginStatus && <Redirect to='/home' />} />
            </div>
        )
    }
}

// Accessing Data from Store
const mapStateToProps = (state) => ({
    loginStatus: state.loginStatus,
    registrationData: state.registrationData
})

// Dispatching Action
const mapDispatchToProps = dispatch => ({
    loginUser: (payload) => dispatch(loginUser(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)