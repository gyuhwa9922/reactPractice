import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Slider from '../Ui/Slider';
import Main from '../pages/Main'
import JavaScript from '../pages/JavaScript';
import Reacts from '../pages/Reacts';
import Java from '../pages/Java';
import SpringBoot from '../pages/SpringBoot';


const styles = {
  h5 :{
    marginTop : 100,
  },
  main :{
    height:749,
    color:'gray',
    backgroundColor:'white',
  }
};

function Content(props) {

  const {isDark} = useContext(ThemeContext);

  const setDark = ()=>{
    return {
      ...styles.main, filter: `invert(100%)`
    }
  }

  return (
    <main style={isDark ? setDark() : styles.main}>
      <div className='container text-center'>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='js' element={<JavaScript/>}/>
        <Route path='react' element={<Reacts/>}/>
        <Route path='java' element={<Java/>}/>
        <Route path='springboot' element={<SpringBoot/>}/>
      </Routes>
      </div>
    </main>
  );
}

export default Content;