import React from 'react'
import {
    View
} from 'react-native'
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import reducer from './reducers'
import App from './Screens'
const store = createStore(reducer, applyMiddleware(thunk));

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}
