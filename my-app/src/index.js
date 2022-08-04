import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App1 from './test04/App1';
// import CommentList from './test03/CommentList';
// import Clock from './test02/Clock';

const root = ReactDOM.createRoot(document.getElementById("root"));

// setInterval(() =>{
//     root.render(<Clock />);
// },1000)

root.render(<App1 />);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();