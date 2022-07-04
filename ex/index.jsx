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

/* ex03
import Family from './ex03Family.jsx';
import Member from './ex02.jsx'

 <Family lastName="Silva">
    <Member name="guilherme"/>
    <Member name="Rafael"/>
    <Member name="Julia"/>
  </Family>
  */
/* ex04Class
import ClassComponent from './ex04Class.jsx';
<ClassComponent 
      label="Contador"
      initialValue={10} />
*/

import Field from './ex05Field';
ReactDOM.render(
  <Field initialValue="Test"/>,
document.getElementById('app'));


