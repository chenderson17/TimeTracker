import Header from './Header.js';
import Landing from './Landing.js';
import Cards from './Cards.js';
import About from './About.js';
import Footer from './Footer.js';
import Contact from './Contact.js';
import Pricing from './Pricing.js';
export default function Home(){
 return(
   <>
    <Header signUpBtnDisplay={true} signInBtnDisplay={true} isHome={true} />
    <Landing />
    <Cards />
    <About />
    <Pricing />
    <Contact />
    <Footer />
   </>
 )
}