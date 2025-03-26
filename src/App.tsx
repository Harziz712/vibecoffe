import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/about"
import Download from "./components/download"
import Navbar from "./components/navbar"
import Service from "./components/service"
import Footer from "./components/ui/footer"
import Home from "./components/ui/home"

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);
  return (
    <div className="w-full h-[100%] p-0 m-0 bg-chart-2 overflow-hidden">
      <Navbar/>
      <div className="bg-secondary-foreground h-[70px] absolute top-0 w-full"></div>
    <div className="rounded-b-4xl bg-secondary-foreground pb-15">
      <Home/>
      <About/>
      <Service/>
      <Download/>
    </div>
      <Footer/>
      </div>
  )
}

export default App