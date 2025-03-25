import { LuDownload } from "react-icons/lu"
import { Button } from "./ui/button"


const Download = () => {
  return (
   <div className="p-10 py-20 my-20">
     <div className="h-[400px] w-full bg-chart-3 rounded-4xl flex items-center justify-center">
        <div className="justify-center text-center space-y-10">
        <p className="text-chart-1" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni corporis quae, at fuga doloribus .</p>
            <h2 className="text-[70px] leading-18 font-bold text-secondary-foreground">
             Download my App
            </h2>
            <Button className="text-1xl  text-accent font-bold border-2 border-accent rounded-4xl py-5 px-10">Download here <LuDownload/> </Button>
        </div>
     </div>
   </div>
  )
}

export default Download