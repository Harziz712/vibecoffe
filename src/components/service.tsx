import { ImageStack, ServiceDetail } from "./ui/ui"

const Service = () => {
  return (
    <div className="justify-center items-center w-full text-center my-20 py-20 "> 
        <p className="uppercase">Features</p>
           <h2 className="text-[30px] leading-18 font-bold text-accent-foreground uppercase">
               Our Services
            </h2>
            <div className="flex justify-around px-10 pt-[5%] ">
            <div className="grid w-[25%]  py-20">    <ServiceDetail/>
            </div>
    <div className="relative py-[18%] px-[5%] md:w-[30%] "><ImageStack/></div>

             <div className="grid w-[25%]  py-20 space-y-3">   <ServiceDetail/>
             </div>
                
            </div>
    </div>
  )
}

export default Service