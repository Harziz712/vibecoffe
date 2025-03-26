import { AboutDetail, ImageStack } from "./ui/ui"

const About = () => {
  return (
    <div id="about" className="w-full h-full md:p-20 mb-12 my-50 md:my-30 ">
        <div className='  md:flex max-h-full md:h-full w-full justify-center items-center gap-10  px-6'>
        <div className='md:w-[50%] py-60 md:p-10  relative md:pl-[12%] ' data-aos="zoom-in-right">
        <ImageStack/>

        </div>
            <div className='md:w-[50%] mt-20' data-aos="zoom-in-left">
            <AboutDetail/>
            </div>
        </div>



    </div>
  )
}

export default About