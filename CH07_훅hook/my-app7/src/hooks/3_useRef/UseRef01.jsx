import React, { useEffect, useRef } from 'react'
/**
 * useRef()
 *  참조(R) 참조를 사용하기 위한 훅
 *  반환값 : 레퍼런스 객체(ref object)
 * const fer = iseRef(value) == {current:value}
 * 
 * ref.current
 * 
 * ref 객체는 컴포넌트 전 생애주기 전체에 걸쳐서 유지
 * 컴포넌트가 재 렌더링 되더라도 초기화되지 않는다
 * 
 * 1. DOM 요소에 접근할 떄 (document.querySelect())
 * 2. 저장공간으로 사용
 */


function UseRef01() {

  const inputRef = useRef();// {current}
  const imgRef = useRef();

  useEffect(() =>{
    inputRef.current.focus();
  },[]);

  const onButtonClick =()=>{
    alert(`환영해요 'o' ${inputRef.current.value} `);
    imgRef.current.style.visibility = 'visible';
    inputRef.current.value = '';
  }
  const onButtonReclick = () =>{
    alert(`저리가요 ${inputRef.current.value}`);
    imgRef.current.style.visibility = 'hidden';
  }

  return (
    <div className='container'>
      <img ref={imgRef} src='logo192.png' alt='' style={{width:'100px',marginBottom : '100px',visibility:'hidden'}}/>
      <div className='d-flex'>
      <input ref={inputRef} className='form-control w-auto' type='text' placeholder='username'/>
      <button className='btn btn-info ml-1'
      onClick={onButtonClick}>로그인 </button>
      <button className='btn btn-danger ml-1'
      onClick={onButtonReclick}>로그아웃 </button>
      </div>
    </div>
  )
}

export default UseRef01