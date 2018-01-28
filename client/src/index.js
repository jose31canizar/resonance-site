import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/'
import { apiMiddleware } from './redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import ReactSpinner from 'react-spinjs'

import { PersistGate } from 'redux-persist/lib/integration/react'

const persistConfig = {
    key: 'root',
    storage: storage,
  }

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, {loggedIn: false}, applyMiddleware(apiMiddleware));

let persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={<ReactSpinner/>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>, 
    document.getElementById('root'));
