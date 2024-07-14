import { useEffect } from 'react';
import errorBackground from '../../../assets/404.png';
import './NotFound.scss';

const NotFound = () => {
  return (
    // <div
    //   className="notfound-container"
    //   style={{ backgroundImage: `url(${errorBackground})` }}
    // >
    //   <p className="notfound-text">Erreur 404</p>
    // </div>
    <div className="notfound-container">
      <img
        className="notfound-illustration"
        draggable={false}
        src={errorBackground}
        alt=""
      />

      <p className="notfound-text--under">Erreur 404</p>
    </div>
  );
};

export default NotFound;
