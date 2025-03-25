import { AboutDetail, ImageStack } from "./ui/ui"

const About = () => {
  return (
    <div className="w-full h-full p-20 mb-12 mt-30 md:mt-0">
        <div className='md:flex max-h-full md:h-full w-full justify-center items-center gap-10  px-6'>
        <div className='md:w-[50%] p-10 justify-center items-center  relative pl-[12%]'>
        <ImageStack/>

        </div>
            <div className='md:w-[50%]'>
            <AboutDetail/>
            </div>
        </div>



    </div>
  )
}

export default About