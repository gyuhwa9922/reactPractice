import React, { useState } from 'react';

function UseReducer02(props) {

  const [money,setMoney] = useState(700000);
  
  return (
    <div className='container'>
      <h6>useReducer 은행 예시</h6>

      <h2>잔고 : {money} w</h2>
      <div >
        <input className='form-control mb-2' type={'number'} 
        placeholder='너의 잔고야'
        step={1000}
        />
        <button className='btn btn-primary'>예금</button>
        <button className='btn btn-danger'>출금</button>
      </div>
    </div>
  );
}

export default UseReducer02;
