/**
 * 컴포넌트 입력(props)
 * : '속성'
 * 읽기 전용(read only)
 * 
 * 자바스크립트(js) 객체 {}
 */

import React from "react";

function App(props) {

  return (
      <profile
        name='tom'
        intro = 'hello'
        hit = {100}
      />
  );
}

function profile(name,intro,hit){
  return (
    <>
    <h2>{name}'s blog</h2>
    <p>{intro}</p>
    <hr/>
    <span>{hit}</span>
    </>
  );
}