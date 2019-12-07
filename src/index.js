import React from 'react'; 
import ReactDOM from 'react-dom'; 

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';

const container = document.getElementById('app');

// ReactDOM.render(<Badge firstName="Philippa" lastName="Georgiou" jobTitle="USS Shenzhou Captain" twitter="captainGeorgiou" avatar="https://cudebi.files.wordpress.com/2018/01/image0025.png"/>,container);
ReactDOM.render(<Badges/>, container)