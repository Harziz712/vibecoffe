import { images } from "../../assets/images"
import { links, services } from "../../lib/data"
import { Button } from "./button"
import { LuArrowRight } from "react-icons/lu"

export const NavLinks = () => {
  return (
    <div  className="sm: grid md:flex justify-between items-center p-4 gap-12 ">
                 {/* position="relative"
                    _before={{
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "3px",
                      borderRadius: "5px",
                      bg: "primary.500", // Customize the color
                      transform: "scaleX(0)",
                      transformOrigin: "bottom right",
                      transition: "transform 0.3s ease-in-out",
                    }}
                    _hover={{
                      _before: {
                        transform: "scaleX(1)",
                        transformOrigin: "bottom left",
                      },
                    }} */}

    {links.map((link)=> (
        <a href={`${link.href}`} className="relative before:absolute before:-bottom-2 before:left-0 before:w-[100%] before:h-1 
        before:rounded-[5px] before:bg-accent before:scale-x-0 before:transform-origin-bottom-right before:transition-transform before:ease-in-out
        hover:before:scale-[1] hover:before:transform-origin-bottom-left   ">{link.name}</a>
    ))  }
    

    </div>
  )
}

export const HomeDetail = () =>{
    return (
        <div className="text-muted-foreground text-center md:text-left space-y-5 h-[100%]">
            <p>CAFEE</p>
            <h2 className="text-5xl md:text-[70px] md:leading-18 font-bold ">
                Homemade Coffee with Amazing Vibes
            </h2>
            <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni corporis quae, at fuga doloribus dolores a blanditiis quasi est, architecto repellendus incidunt nihil, nam rem amet? Nam atque dolorum fugiat.</p>
            <Button className="text-1xl font-medium rounded-2xl p-5 font-bold">Buy now!</Button>
        </div>
    )
}

export const AboutDetail = () =>{
    return (
        <div className="text-muted-foreground text-left space-y-5 px-4 md:px-20">
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
        <div className=" text-muted-foreground -right-20  md:-right-0 space-y-5 px-20 relative">
          <img src={images.coffebar1} className="h-[200px] w-[200px]  rounded-2xl `backdrop-blur-md shadow-md shadow-accent z-10 absolute -top-50 md:-left-22  -left-15 object-cover "/>
          <img src={images.coffee}  className="md:h-[300px] h-[250px] object-cover md:w-[300px] w-[250px] rounded-2xl `backdrop-blur-md shadow-md shadow-accent absolute -top-10 left-6 md:left-0"/>
        </div>
    )
}
export const ServiceDetail = () => {

    return(
     <>
           {services.map(({icon, title, description}) => (
            <div className="flex-col justify-center items-center md:text-left space-y-2.5 md:px-10 mb-8
            ">
          <div className=" justify-center md:justify-left  flex p-5"> {icon}</div>
            <h4 className="text-md uppercase font-bold">{title}</h4>
            <p className="text-chart-2 text-sm">{description} </p>
            </div>
           )) }
</>
      
    )
}

export const Logo = () => {
    return (
        // <h2 className='md:w-[30%]'>LOGO.</h2>
        <img src=" " alt="LOGO."/>
    )
}