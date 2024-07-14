import './Header.scss';
import ProfilePanel from './ProfilePanel/ProfilePanel';
import NavbarDesktop from './NavbarDesktop/NavbarDesktop';
import Title from './Title/Title';

const Header = () => {
  return (
    <header className="header-container">
      <Title />
      <NavbarDesktop />
      <ProfilePanel />
    </header>
  );
};

export default Header;
