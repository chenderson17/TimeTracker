import Header from './Components/Header.js';
import './App.css';
import Landing from './Components/Landing.js';
import Cards from './Components/Cards.js';
import About from './Components/About.js';

function App() {
  return (
    <>
    <Header signUpBtnDisplay={true} signInBtnDisplay={true} />
    <Landing />
    <Cards />
    <About />
    </>
  );
}

export default App;
