import About from "./components/about"
import Download from "./components/download"
import Navbar from "./components/navbar"
import Service from "./components/service"
import Footer from "./components/ui/footer"
import Home from "./components/ui/home"

const App = () => {
  return (
    <div className="w-full h-[100%] p-0 m-0 bg-chart-2">
    <div className="rounded-b-4xl bg-secondary-foreground">
    <Navbar/>
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