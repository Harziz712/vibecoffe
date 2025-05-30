import { LuDownload } from "react-icons/lu"
import { Button } from "./ui/button"
import { images } from "../assets/images"


const Download = () => {
  return (
   <div className=" p-3 md:p-10 py-20 my-20" data-aos="fade-up"
   data-aos-anchor-placement="top-center">
     <div className="h-[400px] w-full bg-chart-3 rounded-4xl flex items-center justify-center " style={{backgroundImage: `url(${images.coffeback})`, backgroundRepeat:"no-repeat" , backgroundPosition: "center", backgroundSize: "cover"}}>
        <div className="justify-center text-center space-y-10">
        <p className="text-chart-1 " data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni corporis quae, at fuga doloribus .</p>
            <h2 className="text-4xl md:text-[70px] leading-18 font-bold text-secondary-foreground" data-aos="zoom-in-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000">
             Download my App
            </h2>
            <Button className="text-1xl  text-accent font-bold border-2 border-accent rounded-4xl py-5 px-10" data-aos="zoom-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3500">Download here <LuDownload/> </Button>
        </div>
     </div>
   </div>
  )
}

export default Download