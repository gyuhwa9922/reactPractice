import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const styles = {
  footer: {
    backgroundColor: '#eee',
    height: 100,
    display: 'flex',
    // flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#111',
  },
  contain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',    
  }
};

function Footer(props) {

  const {isDark, setIsDark}  = useContext(ThemeContext);

  const setDark = () =>{
    return {
      ...styles.footer, filter: `invert(100%)`
    }
  }

  const toggle = () => {
    setIsDark(!isDark);
    document.querySelector('.btn').innerHTML = isDark ? 'dark mode' : 'light mode';

  }

  return (
    <>
      <footer style={isDark ? setDark() : styles.footer}>
        <div style={styles.contain}>
          2022.08.01 lgh react study very good ummm... yammy
          <button className='btn btn-dark ml-5'
            onClick={toggle}
          >dark mode</button>
        </div>
      </footer>
    </>
  );
}

export default Footer;