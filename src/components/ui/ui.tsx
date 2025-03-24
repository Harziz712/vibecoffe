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
        <div className="text-muted-foreground text-left space-y-5">
            <p>CAFEE</p>
            <h2 className="text-[70px] leading-18 font-bold ">
                Homemade Coffee with Amazing Vibes
            </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni corporis quae, at fuga doloribus dolores a blanditiis quasi est, architecto repellendus incidunt nihil, nam rem amet? Nam atque dolorum fugiat.</p>
            <Button className="text-1xl font-medium">Buy now!</Button>
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
            <p className="text-accent">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni corporis quae, at fuga doloribus dolores a blanditiis quasi est, architecto repellendus incidunt nihil, nam rem amet? Nam atque dolorum fugiat.</p>
            <Button className="text-1xl font-medium">Read more <LuArrowRight/> </Button>
        </div>
    )
}

export const AboutImage = () =>{
    return (
        <div className=" text-muted-foreground text-left space-y-5 px-20 relative">
          <div className="h-[200px] w-[200px] rounded-2xl border-2 border-amber-400 absolute -top-50 -left-22"></div>
          <div className="h-[300px] w-[300px] rounded-2xl border-2 border-amber-400 absolute -top-10"></div>
        </div>
    )
}
