import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../layout/layout.css'
import {NavLink} from 'react-router-dom'

const styles = {
  header:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    color:'#111',
    backgroundColor:'#eee',
    justifyContent: 'center',
  },
  h4:{
    marginLeft:10,
  },
  avatar:{
    width:100,
    height:100,
    borderRadius:50,
  },
 
  ul:{
    width:400,
    listStyle:'none',
    display:'flex',
    justifyContent:'space-between',
    cursor:'pointer',
    
  },
};

function Header(props) {
  const {isDark} = useContext(ThemeContext);

  const setDark = ()=>{
    return {
      ...styles.header, filter: `invert(100%)`
    }
  }

  return (
    <>
      <header style={isDark? setDark() : styles.header}>
        <img style={styles.avatar} src='https://mblogthumb-phinf.pstatic.net/MjAyMDAzMzBfMTg5/MDAxNTg1NTc3MTk5Mjgw.fRCC4ALgwWdbTgQrM_ID4w93hrAAwoVXOhd1rSgxSJgg.BmfL8uIO49Hs4eFTQnc0ydzFf0MjS5FieqsXtKIzrswg.GIF.pikiro/IMG_2090.GIF?type=w800' alt=''/>
        <h4 style={styles.h4}>G.H.LEE<i className="fa-solid fa-house-user"></i></h4>
        
        <nav>
          <ul style={styles.ul}>
            <NavLink to={"/"}> Home </NavLink>
            <NavLink to={"js"}> JavaScript </NavLink>
            <NavLink to={"react"}> React </NavLink>
            <NavLink to={"java"}> java </NavLink>
            <NavLink to={"springboot"}> SpringBoot </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;