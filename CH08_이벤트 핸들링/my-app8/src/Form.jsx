import React from 'react';
import { useState } from 'react';

function Form(props) {
  const [password , setPassword] = useState('');
  const handleSubmit = (e) =>{
    /**
     * page refresh
     * 폼안에서 입력값을 전송할 때 페이지가 다시 로딩 ? 막는법
     * 
     */
    e.preventDefault();
    e.value = setPassword();
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type={'password'}
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
}

export default Form;