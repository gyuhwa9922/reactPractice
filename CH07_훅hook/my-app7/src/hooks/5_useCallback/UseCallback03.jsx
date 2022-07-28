import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import Box from './Box';
function UseCallback03(props) {
  const [size, setSize] = useState(100);
  const [isDark,setIsDark] = useState(false);

  const createBoxStyle = useCallback(()=>{
    return {
      backgroundColor : 'skyblue',
      width : `${size}px`,
      height : `${size}px`,
      borderRadius : `${size/5}%`
    }
  },[size]);


  // const createBoxStyle = () =>{
  //   console.log(size);
  //   (size/2 ===1) ?
  //   return {
  //     backgroundColor : 'skyblue',
  //     width : `${size}px`,
  //     height : `${size}px`,
  //     borderRadius : `${size/5}%`
  //   }
  //   :
  //   return {
  //     backgroundColor : 'skyblue',
  //     width : `${size}px`,
  //     height : `${size}px`,
  //     borderRadius : `${size/5}%`
  //   }
    
  // }

  return (
    <div style={{backgroundColor: isDark ? '#222' : 'white'}}>
      <button className='btn btn-info mb-1' onClick={()=>{setIsDark(!isDark)}}>ddd</button>
      <input className='form-control' type={'number'} value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <br />

      <Box createBoxStyle={createBoxStyle}/>
    </div>
  );
}

export default UseCallback03;