import React from "react";

function Table1(props) {
  let info = {
    color:'white',
    backgroundColor : '#282c34',
    display : 'flex',
    border : '1px solid'
  };
  let img = {
    width : '100px',
    height : '100px',
    borderRadius : '100px',
    marginRight : '50px'
  }
  let urlImg = 'https://images.unsplash.com/photo-1657554987359-815499c7df43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1ODcyOTUwMw&ixlib=rb-1.2.1&q=80&w=1080';
  
  return (
    <div style={info}>
      <img src={urlImg} style={img}/>
      <tr>
        <td>{`${props.con1} `}</td>
        <td>{`${props.con2} `}</td>
        <td>{`${props.con3}`}</td>
      </tr>
    </div>
  );
};

export default Table1;