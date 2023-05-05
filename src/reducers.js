const initialState = {
    userAuthData: {},
    userFullData:{}
  };

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          userAuthData: action.payload,
        };
            default :
            return state;
    }
  };

export const updateReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_FULL_DATA':
        return {
          ...state,
          userFullData: action.payload,
        };
            default :
            return state;
    }
  };
  

  export default userReducer;