import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../redux/action';
import PageList from './PageList';
import { changePerPage } from '../../redux/action';

export class Home extends Component {

    componentDidMount() {
        this.props.fetchData()
    }

    handelChange = e => {
        console.log(e.target.value);
        this.props.changePerPage(e.target.value)
    }

    render() {
        const { page, perPage, apiData } = this.props
        return (
            <div>
                <nav className="display-4 p-3 text-center text-white bg bg-dark">Welcome to Home Page</nav>
                <section className="container p-5">
                    <h1 className="card p-3 text-center">Json Place Holder Data</h1>
                    <br />
                    <div className="d-flex justify-content-center">

                        <table className="table table-striped table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Body</th>
                                </tr>
                            </thead>
                            <tbody>

                                {/* Mapping API Data in Table Data */}

                                {apiData.filter((a, i) => i >= perPage * (page - 1) && i < perPage * page).map(item =>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.body}</td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="d-flex justify-content-center">
                        <form>
                            <div className="form-row align-items-center"> Select No View Per Page
                                <div className="col-auto mx-2">
                                    <select onChange ={this.handelChange} className="custom-select mr-sm-2">
                                        {[5,10,15,20,25].map((item, index) => <option key={item} value={item}>{item}</option> )}
                                    </select>
                                </div>
                            </div>
                        </form>
                        <PageList />
                    </div>
                </section>
            </div>
        )
    }
}

// Accessing Data from Store
const mapStateToProps = (state) => ({
    apiData: state.apiData,
    page: state.page,
    perPage: state.perPage
});

// Dispatching Action
const mapDispatchToProps = dispatch => ({
    fetchData: (payload) => dispatch(fetchData(payload)),
    changePerPage : (payload) => dispatch(changePerPage(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
