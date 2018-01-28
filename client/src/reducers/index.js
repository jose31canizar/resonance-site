const defaultState = {
  loggedIn: false,
  firstName: '',
  id: ''
};

const reducer = (state = defaultState, action) => {
    switch(action.type){
      case 'LOGIN': 
        return {
          loggedIn: true, 
          firstName: action.firstName,
          lastName: action.lastName,
          email: action.email,
          id: action.id
        };
      case 'LOGOUT': 
        return {
          loggedIn: false,
          id: ''
        };
      case 'SIGNUP': 
        return {
          loggedIn: false,
          warning: action.warning,
          id: ''
        };
      case 'DUPLICATE_USER':
        return {
          loggedIn: false, 
          warning: action.warning,
          id: ''
        };
      case 'WRONG_EMAIL':
        return {
          loggedIn: false,
          warning: action.warning,
          id: ''
        }
      case 'USER_DATA_RECEIVED': 
        return {
          ...state,
          firstName: action.firstName,
          lastName: action.lastName,
          username: action.username,
          email: action.email,
          favorite_bands: action.favorite_bands,
          loggedIn: true
        };
      case 'POST_DATA_RECEIVED': 
        return {
          ...state,
          posts: action.posts,
          loggedIn: true
        };
      default:
        return defaultState;
    }
  }

export default reducer