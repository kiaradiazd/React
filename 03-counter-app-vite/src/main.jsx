import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './CounterApp';
import { FirstApp } from './FirstApp';
import HelloWorldApp from './HelloWorldApp'
import './styles.css'
CounterApp

ReactDOM.createRoot(document.getElementById('root') ).render(
  <React.StrictMode>
   {/*<HelloWorldApp /> */}
    <FirstApp title="hojojojo" />
   {/**  <CounterApp value={0}/>*/}
  </React.StrictMode>
);