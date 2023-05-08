import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './Actions/index';
function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-1'></div>
          <h1>Increment/Decrement counter</h1>
          <h2>using React and Redux</h2>

          <div className='col-md-10 col-sm-6 col-xs-6'>
            <div className='quantity'>
              <a className='quantity_minus' title='Decrement' onClick={() => dispatch(decNumber())}><span>-</span></a>
              <input name="quantity" type='text' className='quantity_input' value={myState} />
              <a className='quantity_plus' title='Increment' onClick={() => dispatch(incNumber(5)
              )}><span>+</span></a>

            </div>
            <div className='col-md-1 col-sm-12 col-xs-6'></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
