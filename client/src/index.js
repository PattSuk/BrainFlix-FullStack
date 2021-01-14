import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './index.css';
import App from './App';
import UploadVideo from './components/UploadVideo';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/" exact component={App} />
        <Route path="/videos/:id" component={App} />
        <Route path="/upload" component={UploadVideo} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
