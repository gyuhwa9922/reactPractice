import React from 'react';
import { useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Page from '../pages/Page';



function Home(props) {
  const [isDark, setIsDark] =useState(true);

  console.log(isDark);

  return (
    <>
      <ThemeContext.Provider value={{isDark, setIsDark}}>
      <Page/>
      </ThemeContext.Provider>
    </>
  );
}

export default Home;