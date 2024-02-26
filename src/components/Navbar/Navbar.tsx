import cls from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className={cls.nav}>
      <ul className="menu">
        {['profile', 'schedule', 'subjects', 'news'].map((link) => (
          <li className={`${cls.menu_item} `} key={link}>
            <NavLink to={link} className={({ isActive }) => (isActive ? cls.active : '')}>
              <svg>
                <use href={`/sprites/navbar.svg#${link}`}></use>
              </svg>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
