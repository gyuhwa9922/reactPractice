import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Box(props) {
  const [style, setStyle] = useState({});
  useEffect(()=>{
    console.log('good');
    setStyle(props.createBoxStyle);
  },[props.createBoxStyle])

  return (
    <div style={style}>
      
    </div>
  );
}

export default Box;