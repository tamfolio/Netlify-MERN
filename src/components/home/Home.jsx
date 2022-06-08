import Featured from '../featured/Featured'
import Navbar from '../navbar/Navbar'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Featured/>
    </div>
  )
}

export default Home