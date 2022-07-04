import React from 'react';
import ReactDOM from 'react-dom';
// ex 01
// import {Primeiro,Segundo} from './component'
/*
 * <div>
      <Primeiro />
      <Segundo />
  </div>
 * */

// ex02
// import SilvaFamily from './ex02Family.jsx';

import Family from './ex03Family.jsx';
import Member from './ex02.jsx'

ReactDOM.render(
  <Family lastName="Silva">
    <Member name="guilherme"/>
    <Member name="Rafael"/>
    <Member name="Julia"/>
  </Family>,
document.getElementById('app'));


