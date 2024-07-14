import { Link, useLocation } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-container">
      <ul className="footer-ul">
        <li>
          {' '}
          <Link to="/mentions-legales">Mentions légales</Link>
        </li>
        <li>&#9679;</li>
        <Link to="/contact">
          <li>Fait avec passion par l&lsquo;équipe Apo&lsquo;calypse</li>
        </Link>
        <li>&#9679;</li>
        <li> {year}</li>
      </ul>
    </div>
  );
};

export default Footer;
