import { useLoaderData } from 'react-router'
import Cardsholder from '../../components/cardsholder/Cardsholder'
import HeroBanner from '../../components/hero/HeroBanner'
import HeroSection from '../../components/hero/HeroSection'


function Homepage() {
  const appdata=useLoaderData()
 

  
  return (
    <div>
      <HeroSection></HeroSection>
      <HeroBanner></HeroBanner>
      <Cardsholder appdata={appdata}></Cardsholder>
    </div>
  )
}

export default Homepage
