import logo from './logo.svg';
import './App.css';

function App() {
  let now = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();




  return (
    <div className="App">
      <header className="App-header">
        <img src="https://mblogthumb-phinf.pstatic.net/MjAyMDAzMzBfMTg5/MDAxNTg1NTc3MTk5Mjgw.fRCC4ALgwWdbTgQrM_ID4w93hrAAwoVXOhd1rSgxSJgg.BmfL8uIO49Hs4eFTQnc0ydzFf0MjS5FieqsXtKIzrswg.GIF.pikiro/IMG_2090.GIF?type=w800" className="App-logo" alt="logo" />
    <span>
      {now}{time}
    </span>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
