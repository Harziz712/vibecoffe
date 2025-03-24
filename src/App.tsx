import About from "./components/about"
import Navbar from "./components/navbar"
import Home from "./components/ui/home"

const App = () => {
  return (
    <div className="w-full h-[100%] p-0 m-0">
      <Navbar/>
      <Home/>
      <About/>
      </div>
  )
}

export default App