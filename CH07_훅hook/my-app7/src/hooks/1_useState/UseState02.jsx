import React from 'react';
import {useState} from 'react'

function useState02(props) {

  const [input, setInput] = useState('');
  const [names, setName] = useState([]);

  const inputChangeHandler = (e) =>{
    setInput(e.target.value);
  }
  const btnSave = () =>{
    setName((preState)=>{
      console.log(preState);
      return [...preState, input + '\n']
    });
  }


  return (
    <div className='container'>
      <input type='text' className="inputPassword6 float-first m-3 p-3" placeholder='내용 입력'
      onChange={inputChangeHandler}/>
      <button className='btn btn-primary' onClick={btnSave}>버튼</button><br />
      <input type='textarea' className="form-control float-first" placeholder='내용 출력' defaultValue={names.toString().split(',').join()}/>
    </div>
  );
}

export default useState02;