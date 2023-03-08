import About from "./component/about";
import Contact from "./component/contact";
import Experience from "./component/experience";
import Footer from "./component/footer";
import Header from "./component/header";
import Nav from "./component/nav";
import Dv from "./component/service";
import Portfolio from "./component/portfolio";
import Testimonals from "./component/testimonals";


function App() {
  return (

    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    {/* <Dv/> */}
    <Portfolio/>
    <Testimonals/>
    <Contact/>
    {/* <Footer/> */}
    
    </>
  );
}

export default App;
