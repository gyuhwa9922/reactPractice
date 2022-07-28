import React, { useRef } from 'react';
import { useState } from 'react';

function UseRef02(props) {
  //state변수 사용
  const [count, setCount] = useState(0);

  // ref변수 사용
  const countRef = useRef(0);


  const increaseCountState = () => {
    setCount(count + 1)
  }
  const increaseCountRef = () => {
    countRef.current ++

  }
  return (
    <div className='container'>
      <h3> State : {count} </h3>
      <h3> Ref : {countRef.current} </h3>

      <button className='btn btn-info mr-2' onClick={increaseCountState}>
        State &nbsp;
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
      <button className='btn btn-success ml-2' onClick={increaseCountRef}>
        Ref &nbsp;
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
    </div>
  );
}

export default UseRef02;