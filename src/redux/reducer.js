import {
  REGISTER_USER,
  LOGIN_USER,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  CHANGE_PAGE,
  CHANGE_PER_PAGE,
} from "./action";

const initialState = {
  loginStatus: false,
  registrationData: [
    { name: "Prabhat", email: "prabhat@gmail.com", password: "admin" },
  ],
  apiData: [],
  page: 1,
  perPage: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_USER:
      let status = false;
      let userData = state.registrationData.filter(
        (item) =>
          item.email === action.payload.email &&
          item.password === action.payload.password
      );

      localStorage.setItem("loginData", JSON.stringify(userData))
      
      if (userData.length === 1) {
        status = true;
      }

      return {
        ...state,
        loginStatus: status,
      };

    case REGISTER_USER:
      return {
        ...state,
        registrationData: [...state.registrationData, action.payload],
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        apiData: action.payload,
      };

    case FETCH_FAILURE:
      return {
        ...state,
        apiData: action.payload,
      };

    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case CHANGE_PER_PAGE:
    return {
        ...state,
        perPage: action.payload,
    };

    default:
      return state;
  }
};

export default reducer;
