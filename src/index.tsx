import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Router from './routes';
// import { RecoilRoot } from 'recoil'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <RecoilRoot> */}
      <Router />
    {/* </RecoilRoot> */}
  </React.StrictMode>
);

