import React from "react";

function Clock(props){
  let now = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();

  return(  
    <>
    <span className="sss">{now}{time}
    </span>
    </>
);
}
export default Clock;