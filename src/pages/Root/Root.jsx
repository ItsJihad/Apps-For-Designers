
import NavBar from '../../components/header/NavBar'
import FooterBar from '../../components/footer/FooterBar'
import { Outlet } from 'react-router'

function Root() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <FooterBar></FooterBar>
    </div>
  )
}

export default Root
