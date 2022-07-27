import React from 'react';
import { useState } from 'react';

const UseState03 = () => {
  const [time, setTime] = useState(0);
  const handleClick = () => {
    setTime(time + 1);
  }
  const good = {
    fontSize : time
  }
    
  return (
    <div>
      <div style={good}>{time}
      <button className='btn btn-primary'onClick={(handleClick)}><i className="fa-solid fa-computer-mouse"/></button>
      </div>
    </div>
  );
}

export default UseState03;