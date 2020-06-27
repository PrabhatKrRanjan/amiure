import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../../redux/action';
import { connect } from 'react-redux';


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
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
        this.props.registerUser(this.state)
        this.setState({
            name: '',
            email: '',
            password: '',
        })
        alert("Registration SuccesFul")
    }

    render() {

        return (
            <div>
                <nav className="display-4 p-3 text-center text-white bg bg-dark">Welcome to Registration Page</nav>
                <section className="container p-5">
                    <div className="d-flex justify-content-center">
                        <div className="card p-5">
                            <h1 className="text-secondary text-center">Registration form</h1>
                            <form onSubmit={this.handelSubmit} className="p-5">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" value={this.state.name} onChange={this.handelChange} className="form-control" placeholder="Name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Email">Email</label>
                                    <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handelChange} placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Password">Password</label>
                                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handelChange} placeholder="Password" required />
                                </div>
                                <button type="submit" className="btn btn-secondary btn-block mt-4">Register</button>
                                <div className="mt-5">Alredy Rgistered Go Back To Login <Link to="/login">Click Here </Link></div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

// Accessing Data from Store
const mapStateToProps = state => ({

});

// Dispatching Action
const mapDispatchToProps = dispatch => ({
    registerUser: (payload) => dispatch(registerUser(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register)