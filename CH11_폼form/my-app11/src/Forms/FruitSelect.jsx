import React from 'react';
import { useState } from 'react';

function FruitSelect(props) {
  const [value,setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const handleSubmit= (e) =>{
    alert('선택된 음식은 : ' +value);
    e.preventDefault();
  }
  return (
    <div>
      <label>
      <h5> 음식을 선택해주세요 </h5>
      <select className='form-select' value={value} onChange={handleChange}>
        <option value={"bingre"}>
          (●'◡'●)
        </option>
        <option value={"right"}>
          (☞ﾟヮﾟ)☞
        </option>
        <option value={"left"}>
          ☜(ﾟヮﾟ☜)
        </option>
      </select>
      </label>
      <button className='btn btn-success ms-1' type='submit' onClick={handleSubmit}>등록</button>
    </div>
  );
}

export default FruitSelect;