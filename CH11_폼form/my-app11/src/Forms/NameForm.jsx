import React from 'react';
import { useState } from 'react';

function NameForm(props) {
  const [value,setValue] = useState('');
  const $good = document.querySelector('#good');

  const handleSubmit = (e) =>{
    e.preventDefault();
    $good.textContent = value;
    setValue('')
  }
  const handleChange =(e) =>{
    setValue(e.target.value);
    if(e.target.value.split("").length >= 8){
      alert("8글자 넘었어!!");
      setValue('');
      return;
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <h4> Name : <h4 id={'good'}></h4></h4> 
          <input className='form-control' type={'text'} placeholder='너의 이름은 뭐니?'
            onChange={handleChange} name = "name" id='name' value={value}
          />
        </label>
        <button className='btn btn-success ms-1' type='submit'>등록</button>
      </form>
    </>
  );
}

export default NameForm;