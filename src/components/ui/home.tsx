import { images } from '../../assets/images'
import { HomeDetail } from './ui'

const Home = () => {
  return (
<div className='max-h-full md:h-[100vh] w-full p-20'>

<div className='flex max-h-full md:h-full w-full bg-secondary rounded-4xl justify-center items-center gap-10 mt-6 px-6'>
  <div className='w-[50%] p-10 justify-center items-center '>
<HomeDetail/>
  </div>
  <div className='w-[50%]'>
<img src={`${images.coffe}`} className='object-contain w-full' />

  </div>
</div>
</div>

  )
}

export default Home