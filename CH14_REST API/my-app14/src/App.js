import logo from './logo.svg';
import './App.css';
import MainPage from './StyledComponents/MainPage';
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import axios from 'axios'

/**
 * JS에서 비동기 HTTP 통신
 * Ajax,fetch, axios
 * 
 * 
 * REST API
 * {Representational State Transfer}
 * 두 컴퓨터 시스템이 인터넷을 통해서 정보 교환하기 위해 사용하는 인터페이스
 * HTTP Method : GET , POST , PUT , DELETE
 */
const MyImg = styled.img`
  width: 50px;
  border-radius: 50%;

`


function App() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    axios({
      method:'get',
      url : 'https://jsonplaceholder.typicode.com/photos/',
    }).then((response) =>{
      setPosts(response.data)
    }).catch((e)=>{console.log(e)})
  
  }
  ,[]);
  
  

  return (
    <div className="App">
      <header className="App-header">
        {/* <MainPage/> */}
        <div className='d-flex' style={{ alignItems: 'center' }}>
          <img src='https://cdn.pixabay.com/photo/2017/08/25/18/48/watercolor-2681039__340.jpg' alt='' style={{ width: 100, height: 100, borderRadius: 100 }} />
          <div className='d-flex'>
            <input className='form-control ml-6' />
            <button className='btn btn-primary ml-1'>search</button>
          </div>
        </div>
        <div className='container'>
          <span style={{ color: '#999' }}>total : {posts.length}</span>
          <hr />
          <table className='table text-light' style={{ fontSize: '1rem' }}>
            <thead>
              <tr>
                <th scope='col'>No</th>
                <th scope='col'>ID</th>
                <th scope='col'>TITLE</th>
                <th scope='col'>URL</th>
              </tr>
              </thead>
              <tbody>
                {
                  posts.map((posts, idx) => {
                    return (
                      <tr key={idx}>
                        <th scope='row'>{posts.id}</th>
                        <td ><MyImg src={posts.thumbnailUrl} alt='' /></td>
                        <td >{posts.title}</td>
                        <td>{posts.url}</td>
                      </tr>
                    );
                  })
                }


              </tbody>
            
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
