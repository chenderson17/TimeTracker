import Header from './Components/Header.js';
import './App.css';
import Landing from './Components/Landing.js';

function App() {
  return (
    <>
    <Header signUpBtnDisplay={true} signInBtnDisplay={true} />
    <Landing />
    </>
  );
}

export default App;
