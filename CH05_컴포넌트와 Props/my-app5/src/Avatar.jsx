import React from 'react';

const styles = {
  ava : {
    width : 50,
    height : 50,
    borderRadius : '50%'
  }
}

function Avatar(props) {
  return (
    <>
     <img src= {props.url}  alt='avarta_img'/>
    </>
  );
}

export default Avatar;