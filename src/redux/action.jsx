import axios from "axios"
export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = "LOGIN_USER";
export const FETCH_DATA ="FETCH_DATA";
export const FETCH_SUCCESS ="FETCH_SUCCESS";
export const FETCH_FAILURE ="FETCH_FAILURE";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const CHANGE_PER_PAGE = "CHANGE_PER_PAGE";

 
export const registerUser = (payload) => ({
    type: REGISTER_USER,
    payload
})

export const loginUser = (payload) => ({
    type: LOGIN_USER,
    payload
})


export const fetchData = payload => {
    const requestParam = {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',

    }
    return dispatch => {
        return axios(requestParam)
            .then(res => {
                const data = res.data;
                return dispatch(fetchSuccess(data))
            })
            .catch(error => {
                return dispatch(fetchFailure(error))
            })
    };
};


export const fetchSuccess = (payload) => ({
    type: FETCH_SUCCESS,
    payload
})

export const fetchFailure = (payload) => ({
    type: FETCH_FAILURE,
    payload
})

export const changePage = (payload) => ({
    type: CHANGE_PAGE,
    payload
})

export const changePerPage = (payload) => ({
    type: CHANGE_PER_PAGE,
    payload
})