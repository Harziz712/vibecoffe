import { images } from '../../assets/images'
import { HomeDetail } from './ui'

const Home = () => {
  return (
<div id="home" className='max-h-full md:h-[100vh] w-full mt-15 md:mt-0 p-5 md:p-20'>

<div className='  md:flex max-h-full md:h-full w-full bg-chart-3 rounded-4xl justify-center items-center gap-10 mt-8 px-6'>
  <div className='md:w-[50%] p-10 justify-center items-center ' data-aos="zoom-in-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
<HomeDetail/>
  </div>
  <div className='md:w-[50%]' data-aos="zoom-in-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000">
<img src={`${images.coffe}`} className='object-contain w-full' />

  </div>
</div>
</div>

  )
}

export default Home