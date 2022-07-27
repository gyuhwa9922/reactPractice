import React from 'react';
import { useState } from 'react';

const UseState01 = () => {

  let [time, setTime] = useState(1);
  const handleClick = () => {
    if (time >= 24) {
      setTime(1);
    } else {
      setTime(time + 1);
    }
  }


  return (
    <>
      <span>현재 시각 : {time}시
        <button className='btn btn-primary bg-dark' onClick={(handleClick)}>update</button>
      </span>
    </>
  );

};

export default UseState01;