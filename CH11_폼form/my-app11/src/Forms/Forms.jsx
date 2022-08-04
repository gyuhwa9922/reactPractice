import React from 'react';
import Fileinput from './Fileinput';
import FruitSelect from './FruitSelect';
import NameForm from './NameForm';

function Forms(props) {
  return (
    <div className='container mt-5 rounded-4'>
      <NameForm/>
      <FruitSelect/>
      <Fileinput/>
    </div>
  );
}
export default Forms;