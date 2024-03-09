import logo from '../src/images/Delta.png';
import './App.css';

import { BrowserRouter} from 'react-router-dom';
import Navigation from './NavBar';
import styled from '@emotion/styled';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          &nbsp;&nbsp;
          <h3>Student Course Management System</h3>
        </header>
        <Navigation/>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
