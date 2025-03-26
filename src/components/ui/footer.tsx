import { LuFacebook, LuInstagram, LuPhone } from "react-icons/lu"
import { Logo } from "./ui"


const Footer = () => {
  return (
    <div className='md:h-[350px] bg-accent p-2 md:px-10 space-y-10 flex flex-col justify-end ' data-aos="zoom-in">
        <div className="flex justify-around items-start text-sm md:text-md">
            <div ><Logo className="md:scale-[1.5] invert-[10]"/></div>
            <div className="space-y-3" data-aos="flip-up" data-aos-duration ="2000">
                <h4 className="text-chart-1 font-bold">Service</h4>
                <div className="text-chart-4 space-y-2">
                <p>Hot coffe</p>
                <p>Cafffine</p>
                <p>Latte</p>
                <p>Caramel</p>
                </div>
            </div>
            <div className="space-y-3" data-aos="flip-up" data-aos-duration ="2500">
            <h4 className="text-chart-1 font-bold">Recipe</h4>
            <div className="text-chart-4 space-y-2">
                <p>Cocoa</p>
                <p>Cafffine</p>
                <p>Lukewarm</p>
                <p>Caramel</p>
                </div>
            </div>
            <div className="space-y-3" data-aos="flip-up" data-aos-duration ="3000">
                <h4 className="text-chart-1 font-bold">Get in touch</h4>
                <div className="text-chart-4 space-y-2">
                <div className="flex flex-row justify-around items-center gap-5 text-chart-5 "> <div className="rounded-full bg-chart-1 p-2 flex justify-center items-center"><LuFacebook/> </div>  <div className="rounded-full bg-chart-1 p-2 flex justify-center items-center"><LuInstagram/> </div> <div className="rounded-full bg-chart-1 p-2 flex justify-center items-center"><LuPhone/></div>
                </div></div>
            </div>
        </div>
        <div className="flex justify-between items-center md:px-10 py-5 text-chart-4  text-sm md:text-md" >
           <p> &copy; 2025 HarzizDesigns. All rights reserved.</p>
           <p>Terms & conditions Apply</p>
        </div>
    </div>
  )
}

export default Footer