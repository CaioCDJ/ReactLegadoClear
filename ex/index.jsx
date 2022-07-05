import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers,createStore} from 'redux';
import {Provider} from 'react-redux';
import fieldReducer from './fieldReducer';


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

const reducers = combineReducers({
  field: fieldReducer
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Field initialValue="Test"/>
  </Provider>,
  document.getElementById('app'));


