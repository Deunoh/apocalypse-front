import { NavLink, useLocation } from 'react-router-dom';

import './NavbarDesktop.scss';
import { useSelector } from 'react-redux';

const NavbarDesktop = () => {
  const role = useSelector((state) => state.authentication.role);
  const isConnected = useSelector((state) => state.authentication.isConnected);
  const location = useLocation();
  // is the url begin by /dashboard for display class css
  const isDashboardActive = location.pathname.startsWith('/dashboard');
  // console.log(location.pathname);
  return (
    <div className="header-navbarDesktop-container">
      <nav className="navbar-desktop">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'navbar-desktop-label--active' : 'navbar-desktop-label'
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/guide-de-survie"
          className={({ isActive }) =>
            isActive ? 'navbar-desktop-label--active' : 'navbar-desktop-label'
          }
        >
          Guide de survie
        </NavLink>
        <NavLink
          to="/avis-de-recherche"
          className={({ isActive }) =>
            isActive ? 'navbar-desktop-label--active' : 'navbar-desktop-label'
          }
        >
          Avis de recherche
        </NavLink>
        <p className="navbar-desktop-label--soon">Q&A</p>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'navbar-desktop-label--active' : 'navbar-desktop-label'
          }
        >
          Contact
        </NavLink>
        {role === 'ROLE_ADMIN' && isConnected && (
          <NavLink
            to="/dashboard/articles"
            className={
              isDashboardActive
                ? 'navbar-desktop-label--active'
                : 'navbar-desktop-label'
            }
          >
            Tableau de bord
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default NavbarDesktop;
