import './common.blocks/index.scss';

import clsx from 'clsx'
import ReactDOM from 'react-dom';
import React from 'react';

import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { App } from './app';



import style from './common.blocks/index.module.scss';
import './assets/images/dog.jpg';
import { ReactComponent as ReactLogo } from './assets/images/react.svg';



// const root = ReactDOM.createRoot(document.querySelector('#root')!);
// root.render(
//   React.createElement("h1", null, "Привет, React!")
//  );

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
  <App />
);