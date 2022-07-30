import React, { useState } from 'react';
import { useReducer } from 'react';

const ACTION_TYPE={
  DEPOSIT : '출금',
  WITHDRAW : '입금'
}

const reducer = (state,action) => {
  console.log(state,action);
  switch (action.type){
    case ACTION_TYPE.DEPOSIT :
      return state + action.payload;
    case ACTION_TYPE.WITHDRAW: 
      return state -action.payload 
      default :
      break;
  }
}

function UseReducer02(props) {

  const [money, setMoney] = useState(0);
  const [account, dispatch] = useReducer(reducer, 0);

  return (
    <div className='container'>
      <h6>useReducer 은행 예시</h6>

      <h2>잔고 : {account} $</h2>
      <div>
        <input className='form-control mb-2' type={'number'}
          placeholder='너의 잔고야'
          step={1000}
          onChange={(e) => { setMoney(parseInt(e.target.value)) }}
        />
        <button className='btn btn-primary'
          onClick={() => { dispatch({ type: ACTION_TYPE.DEPOSIT, payload: money }) }}
        >예금</button>
        <button className='btn btn-danger'
          onClick={()=>{ dispatch({type: ACTION_TYPE.WITHDRAW, payload:money})}}
        >출금</button>
      </div>
    </div>
  );
}

export default UseReducer02;
