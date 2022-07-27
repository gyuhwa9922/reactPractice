import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function UseEffect02(props) {

  const [count,setCount] = useState(0);
  const [name, setName] = useState('');
  const updateInput = (e)=>{
    setName(e.target.value);
  }
  const updateCount = () => {
    setCount(count +1);
  }
  //랜더링 될때마다 사이드 이펙트 실행
  useEffect(()=>{
    console.log('매번 컴포넌트 렌더링')
  },[count]);
  

  useEffect(()=>{
    console.log('마운팅&& name');
  },[name]);
  useEffect(()=>{
    console.log('마운팅&& name');
  },[]);


  return (
    <div className='container'>
      <div className='loading'>
      <span>
      {count}
      </span> 
      <br/>
      <button className='btn btn-success'
      onClick={updateCount}
      >UPDATE</button>
      <div>
        <input type='text' onChange={updateInput}></input>
      </div>
      <p>{name}</p>
     
      </div>
    </div>
  );
}

export default UseEffect02;