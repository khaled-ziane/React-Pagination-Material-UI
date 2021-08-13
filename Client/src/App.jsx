import React,{useState,useRef,useEffect} from 'react';
import Users from './components/Users'
import Button from '@material-ui/core/Button'
import './App.css';
import { StylesProvider } from "@material-ui/core/styles";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'




function App() {

  return (
    <>
    <Router>
  <Route exact path={`/users/:pageId`} >
  <StylesProvider injectFirst>
      <Users />
  </StylesProvider>
    </Route>
    </Router>
    </>
  );
}

export default App;
