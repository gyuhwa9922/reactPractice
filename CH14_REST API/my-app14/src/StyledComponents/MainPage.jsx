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
const $btn = styled.button`
 border-radius: 5px;
 cursor: pointer;
 background-color: #222;
 color: white;
`
function MainPage(props) {

  return (
    <Wrapper >
    <div>
      <$btn> gigigigi </$btn>
    </div>
    </Wrapper>
  );
}

export default MainPage;