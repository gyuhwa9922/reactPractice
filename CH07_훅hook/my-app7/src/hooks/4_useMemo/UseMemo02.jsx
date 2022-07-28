import React, { useMemo } from 'react';
import { useState } from 'react';

const hardCalculate = (number)=>{
  let total= 0;
  for(let i = 0; i<99999999; i++ ){
    total += i;
  }
  console.log('good');
  return number + total;
}
const easyCalculate = (number) =>{
  console.log(`(●'◡'●)`);
  return number +1;
}

function UseMemo02(props) {

  const [hardNumber, setHardNumber] = useState(0);
  const [easyNumber,setEasyNumber] = useState(0);

  // const hard = hardCalculate(hardNumber);

  const easy= easyCalculate(easyNumber);
  const hard = useMemo(()=>{
    return hardCalculate(hardNumber);
  },[hardNumber]);

  return (
    <div className='container'>
      <div style={{ border: '1px solid green', padding: '20px' }}>
        <h5 style={{ color: '#999' }}>hard working</h5>
        <input
          className='form-control' type='number'
          value={hardNumber}
          onChange={(e) => setHardNumber(parseInt(e.target.value))}
        />
        <hr />
        <span> result = {hard}</span>
        </div>
        <div style={{ border: '1px solid green', padding: '20px' }}>
        <h5 style={{ color: '#999' }}>Simple working</h5>
        <input
          className='form-control' type='number'
          value={easyNumber}
          onChange={(e) => setEasyNumber(parseInt(e.target.value))}
        />
        <hr />
        <span> result = {easy}</span>
      </div>
    </div>
  );
}

export default UseMemo02;