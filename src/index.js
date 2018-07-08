import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {cakesReducer} from './store/reducers/cakesReducer';
import './index.css';
import Routes from './routes/Routes';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(cakesReducer, composeEnhancers(
    applyMiddleware(thunk)
));


ReactDOM.render(<Provider store={store}><Routes /></Provider>, document.getElementById('root'));
registerServiceWorker();
