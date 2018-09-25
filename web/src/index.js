import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise'

import TemplateMain from './components/template/template_main';
import reducers from './reducers';
import PostIndex from './components/posts_index';
import PostNew from './components/posts_new';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <TemplateMain>
        <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
            <Route path="/posts/new" component={PostNew}/>
            <Route path="/" component={PostIndex}/>
            </Switch>
        </BrowserRouter>
        </Provider>
    </TemplateMain>
    , document.getElementById('root'));
  


ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
