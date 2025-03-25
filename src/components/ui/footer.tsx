import { LuFacebook, LuInstagram, LuPhone } from "react-icons/lu"


const Footer = () => {
  return (
    <div className='h-[350px] bg-accent px-10 space-y-10 flex flex-col justify-end  '>
        <div className="flex justify-around items-start">
            <div><h2 className='md:w-[30%]'>LOGO.</h2></div>
            <div className="space-y-3">
                <h4 className="text-chart-1 font-bold">Service</h4>
                <div className="text-chart-4 space-y-2">
                <p>Hot coffe</p>
                <p>Cafffine</p>
                <p>Latte</p>
                <p>Caramel</p>
                </div>
            </div>
            <div className="space-y-3">
            <h4 className="text-chart-1 font-bold">Recipe</h4>
            <div className="text-chart-4 space-y-2">
                <p>Cocoa</p>
                <p>Cafffine</p>
                <p>Lukewarm</p>
                <p>Caramel</p>
                </div>
            </div>
            <div className="space-y-3">
                <h4 className="text-chart-1 font-bold">Get in touch</h4>
                <div className="text-chart-4 space-y-2">
                <div className="flex flex-row justify-around items-center gap-5 text-chart-5 "> <div className="rounded-full bg-chart-1 p-2 flex justify-center items-center"><LuFacebook/> </div>  <div className="rounded-full bg-chart-1 p-2 flex justify-center items-center"><LuInstagram/> </div> <div className="rounded-full bg-chart-1 p-2 flex justify-center items-center"><LuPhone/></div>
                </div></div>
            </div>
        </div>
        <div className="flex justify-between items-center px-10 py-5 text-chart-4">
           <p> &copy; 2025 HarzizDesigns. All rights reserved.</p>
           <p>Terms & conditions Apply</p>
        </div>
    </div>
  )
}

export default Footer