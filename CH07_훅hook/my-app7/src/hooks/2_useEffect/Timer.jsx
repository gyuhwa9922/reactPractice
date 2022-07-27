import React from 'react';
import { useEffect } from 'react';

function Timer() {

   useEffect(() => {
    const good = setInterval(() => {
      console.log(`(●'◡'●)`);
    }, 1000);
    //마운트 해제시 실행 정지
    return ()=>{
      clearInterval(good);
    }
  }, []);

  return (
    <div>
      <span>타이머 star</span>
    </div>
  );
}

export default Timer;