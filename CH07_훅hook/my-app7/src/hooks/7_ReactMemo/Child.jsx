import React from 'react';
/**
 * [React.memo 최적화]
 * 랜더링이 되어야 할 상황에 놓일때마다
 * props check를 통해 자신이 받는 props에
 * 변화가 있는지 확인하여
 * 있다면 렌더링, 없다면 기존 결과를 재사용
 */
function Child(props) {
  return (
    <div className='alter alert-success'>
      <h5>
        <i className='fa-solid fa-children'></i>
        <div className='d-flex flex-column'>
          <span>name : {name}</span>
          <span>age : {age} </span>
        </div>
      </h5>
      
    </div>
  );
}

export default Child;