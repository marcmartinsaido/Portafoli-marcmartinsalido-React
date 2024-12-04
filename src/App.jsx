import {Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Main from "./components/Main"
import Contact from "./page/Contact";
import Footer from "./components/Footer"
import Banner from "./components/Banner"
import Proyectos from "./page/proyectos";
import { BrowserRouter } from "react-router-dom";
import Newsletterpage from "./page/newsletterpage";

export default function App(){
  

  return(
   <BrowserRouter>
      <Header/>
      <Navbar/>
      <Banner/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/newsletterpage" element={<Newsletterpage />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
   </BrowserRouter>
  )
}