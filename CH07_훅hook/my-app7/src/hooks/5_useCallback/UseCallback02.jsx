import React,{ useCallback, useEffect,useState } from 'react';

function UseCallback02() {

  const [number,setNumber] = useState(0);
  // const somefunction = () =>{
  //   console.log(` somefuction :  ${number}`);
  // }
  const somefunction = useCallback(()=>{
    console.log(`someFunction : ${number}`);
  },[number]);

  useEffect(()=>{
    console.log(`somefuction이 변경되었어용`);
  },[somefunction]);

  return (
    <div className='container'>
      <input className='form-control' type={'number'} value = {number} onChange={(e) => {setNumber(e.target.value)}}/>
      <button className='btn btn-info' onClick={somefunction}>Call somefunction</button>
    </div>
  )
}

export default UseCallback02;