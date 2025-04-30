import menuItems from '../../constants/menuItems'
import NavItem from './NavItem'
import './Navbar.scss'

const Navbar = () => {


  return (
    <nav className="nav-bar">
        <ul className="nav-bar__nav-list">

          {
            menuItems.map((item) => (
              <NavItem className="nav-bar__nav-item" item={item} key={item.id} />
            ))
          }

        </ul>
      </nav>
  )
}

export default Navbar