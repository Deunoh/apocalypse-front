import './NavbarMobile.scss';

import { GoHomeFill } from 'react-icons/go';
import { FaBook, FaMagnifyingGlass, FaCircleUser } from 'react-icons/fa6';
import { GiInjustice } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { AiFillQuestionCircle } from 'react-icons/ai';

const NavbarMobile = () => {
  return (
    <nav className="navbar navbar-mobile">
      <div className="navbar-item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? ' navbar-mobile-item-icon--active '
              : 'navbar-mobile-item-icon'
          }
        >
          <div className="navbar-mobile-item-icon">
            <GoHomeFill />
          </div>
          <div className="navbar-mobile-item-label">Accueil</div>
        </NavLink>
      </div>
      <div className="navbar-item">
        <NavLink
          to="/guide-de-survie"
          className={({ isActive }) =>
            isActive
              ? 'navbar-mobile-item-icon--active'
              : 'navbar-mobile-item-icon'
          }
        >
          <div className="navbar-mobile-item-icon">
            <FaBook />
          </div>
          <div className="navbar-mobile-item-label">Guide</div>
        </NavLink>
      </div>
      <div className="navbar-item">
        <NavLink
          to="/avis-de-recherche"
          className={({ isActive }) =>
            isActive
              ? 'navbar-mobile-item-icon--active'
              : 'navbar-mobile-item-icon'
          }
        >
          <div className="navbar-mobile-item-icon">
            <FaMagnifyingGlass />
          </div>
          <div className="navbar-mobile-item-label">Avis de recherche</div>
        </NavLink>
      </div>
      <div className="navbar-item">
        <div className="navbar-mobile-icon--soon">
          <div className="navbar-mobile-item-icon">
            <AiFillQuestionCircle />
          </div>
          <div className="navbar-mobile-item-label">Q&A</div>
        </div>
      </div>
      <div className="navbar-item">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'navbar-mobile-item-icon--active'
              : 'navbar-mobile-item-icon'
          }
        >
          <div className="navbar-mobile-item-icon">
            <FaCircleUser />
          </div>
          <div className="navbar-mobile-item-label">Contact</div>
        </NavLink>
      </div>
      <div className="navbar-item">
        <NavLink
          to="/mentions-legales"
          className={({ isActive }) =>
            isActive
              ? 'navbar-mobile-item-icon--active'
              : 'navbar-mobile-item-icon'
          }
        >
          <div className="navbar-mobile-item-icon">
            <GiInjustice />
          </div>
          <div className="navbar-mobile-item-label">RGPD</div>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavbarMobile;
