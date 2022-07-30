import React from 'react';
import { useReducer } from 'react';
import { useState } from 'react';
import Student from './Student';

const reducer = (state, action) => {
  switch(action.type){
    case 'addStu': 
      const name = action.payload.name;
      const newStudent ={
        id : Date.now(),
        name : name,
        isHere : false
      };
      return {
        count : state.count + 1,
        students : [...state.students,newStudent]
      }
    case 'deleteStu' :
      return{
        count : state.count -1,
        students : state.students.filter(students=> students.id !== action.payload.id) 
      }
    case 'checkstu' :
      return{
        count: state.count,
        students: state.students.map((student)=>{
          if(student.id === action.payload.id){
            return {...student, isHere:!student.isHere}
          }
          return student;
        })
      }
      default : 
      return state;


  }
}
const initialState = {
  count: 1,
  students: [{
    id: Date.now(),
    name: '이규화',
    isHere: false
  },
],
}
function UseReducer03() {
  const [name, setName] = useState('');
  const [stuinfo, dispatch] = useReducer(reducer, initialState);
  console.log(reducer.newStudent);
  return (
    <div className='container'>
      <div className='alert alert-info'>
        <div>
          <i className="fa-solid fa-book"></i>
          &nbsp; 출석부
        </div>
        <hr />
        <p>총 학생수 : {stuinfo.count}명</p>
        <div>
          <input className='form-control m-auto' placeholder='이름을 입력해주세요' spellCheck='false'
            onChange={(e) => {setName(e.target.value) }}
          />
          <button className='btn btn-success mt-3'
            onClick={() => {
              if(name === ''){
                alert(`이름을 입력해라`);
                return;
              }
              dispatch({
                type : 'addStu',
                payload : {name},
              });
            }}
          > 추가 </button>
        </div>
      </div>
      {
        stuinfo.students.map(students => {
          return <Student
            id={students.id}
            name={students.name}
            isHere={students.isHere}
            dispatch ={dispatch}
          />
        })}

    </div>
  );
}

export default UseReducer03;