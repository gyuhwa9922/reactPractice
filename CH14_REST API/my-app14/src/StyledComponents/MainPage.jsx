import React from 'react';
import styled from 'styled-components'
/**
 * styled-components
 * :CSS 문법을 그대로 사용 가능
 * 
 */
 const Wrapper = styled.div`
 padding: 1em;
 background: crimson;
 border-radius: 50%;
`
// const $btn = styled.button`
//  border-radius: 5px;
//  cursor: pointer;
//  background-color: #222;
//  color: white;
// `
const SmartButton = styled.button`
  color: ${props => props.dark ? "white" : "dark"};
  background-color: ${props => props.dark ? "black" : "white"};
  border: 1px solid crimson;
  padding: 3px;
`


function MainPage(props) {

  return (
    <Wrapper >
    <div>
    <SmartButton dark>Black Button</SmartButton>
    </div>
    </Wrapper>
  );
}

export default MainPage;