import "raf/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

it("renders without crashing", () => {
  const div = document.createElement("div");

  const mockStore = configureStore()({ loggedIn: false });

  ReactDOM.render(
    <Provider store={mockStore}>
      <App />
    </Provider>,
    div
  );
});
