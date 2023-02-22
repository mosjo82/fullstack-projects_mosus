import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import App2 from './App2';
// import App4 from './App4';
import Square from './five_shapes/Square';
import Cylinder from './five_shapes/Cylinder';
import Triangle from './five_shapes/Triangle';
import Cone from './five_shapes/Cone';
import Class1 from './Class1';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <App3 l="4" b="12"/> */}
    {/* <App4 /> */}
    <h1>
    <Square a="5"/>
    <br></br>
    <Cylinder r="7" h="16" />
    <br></br>
    <Triangle bas="4" hg="12"/>
    <br></br>
    <Cone r="4" l="12" />
    <br></br>
    <Class1 s="12"/>
    </h1>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
