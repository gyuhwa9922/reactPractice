import React from 'react';

function Student({ id, name, isHere, dispatch }) {

  return (
    <div>
      <span style={{
        textDecoration:  isHere ? 'line-through' : 'none',
        cursor: 'pointer'
      }}
        onClick={() => {
          dispatch({
            type: 'checkstu',
            payload: { id }
          });
        }}>
        {`학생의 아이디는 ${id} 학생의 이름은 ${name}`}</span>
      <br />
      <button className='btn btn-outline-danger ml-3'
        onClick={() => {
          dispatch({
            type: 'deleteStu',
            payload: { id }
          });
        }}
      >삭제</button>
    </div>
  );
}

export default Student;