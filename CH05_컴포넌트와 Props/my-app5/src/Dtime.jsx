import React from 'react';

function Dtime() {
  let $date = new Date().toLocaleDateString();
  let $time = new Date().toLocaleTimeString();
  return (
    <div>
      {$date}{$time}
    </div>
  );
}

export default Dtime;