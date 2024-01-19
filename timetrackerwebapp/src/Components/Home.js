import Header from './Header.js';
import Landing from './Landing.js';
import Cards from './Cards.js';
import About from './About.js';
import Footer from './Footer.js';
import Contact from './Contact.js';
export default function Home(){
 return(
   <>
    <Header signUpBtnDisplay={true} signInBtnDisplay={true} />
    <Landing />
    <Cards />
    <About />
    <Contact />
    <Footer />
   </>
 )
}