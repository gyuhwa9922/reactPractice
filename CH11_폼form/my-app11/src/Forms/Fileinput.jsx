import React from 'react';
import { useState } from 'react';

function Fileinput(props) {
  const [imgScr,setImgSRC] = useState('');

  const handleImageUpload = (e) =>{
    console.log(e.target.value[0]);

    setImgSRC(URL.createObjectURL(e.target.files[0]));
    console.log(imgScr);
  }


  return (
    <>
      <div className='input-group mb-3'>
        <input type={'file'} accept="image/*" className='form-control'
          id='inputFile'
          onChange={handleImageUpload}
        />
        <label className='input-group-text'>
          upload
        </label>
      </div>
      <div className='preview'>
        {
          imgScr && <img className='w-25' src={imgScr} alt=''/>
        }
      </div>
    </>
  );
}

export default Fileinput;