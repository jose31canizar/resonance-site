import history from "./history";

export const apiMiddleware = store => next => action => {
  next(action);
  switch (action.type) {
    case "LOGIN_USER":
      // console.log('logging in the user')
      fetch(`/account/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: action.email,
          password: action.password
        })
      })
        .then(res => {
          return res.json();
        })
        .then(
          res => {
            // console.log('res login');
            // console.log(res);
            if (res.message === "successful login") {
              const disp = store.dispatch({
                type: "LOGIN",
                firstName: res.firstName,
                lastName: res.lastName,
                email: res.email,
                id: res.id,
                warning: "You've logged in!"
              });
              history.push("beta");
            } else if (res.message === "wrong email or password") {
              const disp = store.dispatch({
                type: "WRONG_EMAIL",
                warning: "Wrong email or password :("
              });
            }
          },
          function(err) {
            console.log(err);
          }
        );
      history.push(`/beta`);
      break;
    case "LOGOUT_USER":
      // console.log("logging out the user. .");
      store.dispatch({ type: "LOGOUT" });
      history.push(`/login`);
      break;
    case "SIGNUP_USER":
      fetch(`/account/signup`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: action.email,
          password: action.password,
          firstName: action.firstName,
          lastName: action.lastName,
          username: action.username
        })
      })
        .then(res => {
          return res.json();
        })
        .then(
          res => {
            if (res.message === "duplicate user") {
              // console.log('dup user')
              const disp = store.dispatch({
                type: "DUPLICATE_USER",
                warning: "There is a user already using this email."
              });
            } else if (res.message === "success") {
              // console.log('youve officially signed up')
              const disp = store.dispatch({
                type: "SIGNUP",
                warning: "You've signed up!"
              });
              history.push("login");
            }
          },
          function(err) {
            console.log(err);
          }
        );
      break;
    case "LOAD_USER_DATA":
      console.log("loading user data");
      console.log(action.id);
      fetch(`/account/user.json?id=${action.id}`)
        .then(res => {
          // console.log('res')
          // console.log(res)
          return res.json();
        })
        .then(
          res => {
            console.log("res2");
            console.log(res._id);
            console.log(res.firstName);
            store.dispatch({
              type: "USER_DATA_RECEIVED",
              firstName: res.firstName,
              lastName: res.lastName,
              username: res.username,
              id: res._id,
              email: res.email,
              favorite_bands: res.favorite_bands,
              loggedIn: true
            });
          },
          function(err) {
            console.log(err);
          }
        );
      break;
    case "LOAD_POST_DATA":
      fetch(`/account/posts.json?id=${action.id}`)
        .then(res => {
          return res.json();
        })
        .then(
          res => {
            store.dispatch({
              type: "POST_DATA_RECEIVED",
              posts: res.posts,
              loggedIn: true
            });
          },
          function(err) {
            // console.log(err);
          }
        );
      break;
    default:
      break;
  }
};
