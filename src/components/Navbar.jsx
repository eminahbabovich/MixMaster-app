import { nanoid } from 'nanoid'
import { NavLink } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Navbar'

const navlinks = [
  { url: '/', text: 'Home', id: nanoid() },
  { url: '/about', text: 'About', id: nanoid() },
  { url: '/newsletter', text: 'Newsletter', id: nanoid() },
]
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          {navlinks.map((navlink) => {
            const { url, text, id } = navlink
            return (
              <NavLink to={url} className="nav-link" key={id}>
                {text}
              </NavLink>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar
