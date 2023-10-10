import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/chunkfive/ChunkFive-Regular.otf'
import './assets/fonts/el-messiri/elmessiri-regular.otf'
import './assets/fonts/el-messiri/elmessiri-bold.otf'
import './assets/fonts/el-messiri/elmessiri-semibold.otf'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
