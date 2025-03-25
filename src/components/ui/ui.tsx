import { services } from "../../lib/data"
import { Button } from "./button"
import { LuArrowRight } from "react-icons/lu"

export const NavLinks = () => {
  return (
    <div  className="sm: grid md:flex justify-between items-center p-4 gap-12 ">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#service">Service</a>

    </div>
  )
}

export const HomeDetail = () =>{
    return (
        <div className="text-muted-foreground text-left space-y-5 h-[100%]">
            <p>CAFEE</p>
            <h2 className="text-[70px] leading-18 font-bold ">
                Homemade Coffee with Amazing Vibes
            </h2>
            <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni corporis quae, at fuga doloribus dolores a blanditiis quasi est, architecto repellendus incidunt nihil, nam rem amet? Nam atque dolorum fugiat.</p>
            <Button className="text-1xl font-medium rounded-2xl p-5 font-bold">Buy now!</Button>
        </div>
    )
}

export const AboutDetail = () =>{
    return (
        <div className="text-muted-foreground text-left space-y-5 px-20">
            <p className="text-primary">About us</p>
            <h2 className="text-[70px] leading-18 font-bold text-accent-foreground">
                About Cafee
            </h2>
            <p className="" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni corporis quae, at fuga doloribus .</p>
            <p className="text-accent text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni corporis quae, at fuga doloribus dolores a blanditiis quasi est, architecto repellendus incidunt nihil, nam rem amet? Nam atque dolorum fugiat.</p>
            <Button className="text-1xl font-medium">Read more <LuArrowRight/> </Button>
        </div>
    )
}

export const ImageStack = () =>{
    return (
        <div className=" text-muted-foreground -right-40 md:-right-0 space-y-5 px-20 relative">
          <img src="" className="h-[200px] w-[200px] rounded-2xl border-2 border-amber-400 absolute -top-50 -left-22"/>
          <img className="h-[300px] w-[300px] rounded-2xl border-2 border-amber-400 absolute -top-10"/>
        </div>
    )
}
export const ServiceDetail = () => {

    return(
     <>
           {services.map(({icon, title, description}) => (
            <div className="grid justify-center items-center text-left space-y-2.5 px-10  mb-8
            ">
          <div className=" justify-left items-left flex p-5"> {icon}</div>
            <h4 className="text-md uppercase font-bold">{title}</h4>
            <p className="text-chart-2 text-sm">{description} </p>
            </div>
           )) }
</>
      
    )
}