import './Title.scss';
import { Link } from 'react-router-dom';

import logo from '../../../assets/circle-logo-apocalypse.png';

const Title = () => {
  return (
    <Link to="/">
      <div className="header-title-container">
        <img className="header-title-logo" src={logo} alt="" />
        <h1 className="header-title">Apo&apos;calypse</h1>
      </div>
    </Link>
  );
};

export default Title;
