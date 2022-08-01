import React from 'react';
import { useState } from 'react';
import Child from './Child';

function Parents(props) {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setchildAge] = useState(0);

  const incresementParentAge = ()=>{
    
    
  }
  const incresementChildAge = () =>{

  }


  return (
    <div className='container border border'>
      <div className='alert alert-info'>
        <h5>
          <i className='fa-solid fa-person-breastfeeding'></i>
          <span> age : {parentAge}</span>
        </h5>
      </div>
      <div className='mb-3 d-flex justify-content-center'>
        <button className='btn bnt-secondary mr-2'
          onClick={incresementParentAge}
        >부모나이 증가 +</button>
        <button className='btn bnt-secondary mr-2'
          onClick={incresementChildAge}
        >자식나이 증가 +</button>
      </div>
      <Child name = {"hi"} age = {"good"}/>
    </div>
  );
}

export default Parents;
