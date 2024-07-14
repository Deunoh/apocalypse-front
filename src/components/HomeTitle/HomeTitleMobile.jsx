import PropTypes from 'prop-types';
import './HomeTitleMobile.scss';
import { MdClose } from 'react-icons/md';

const HomeTitleMobile = ({ setIsPopUpVisible }) => {
  return (
    <div className="home-title-container-mobile">
      <h1 className="home-title-mobile">APO&apos;CALYPSE</h1>
      <p className="home-paragraph-mobile">
        Bienvenue sur <strong>Apo&apos;calypse</strong> ! Dans un monde où les
        zombies ont envahi nos rues, notre site est votre <strong>guide</strong>{' '}
        ultime pour rester en vie. Consultez les{' '}
        <strong>points d&apos;intérêt</strong> près de chez vous (zombies,
        abris, eau, et plus encore), ajoutez vos propres trouvailles, et{' '}
        <strong>retrouvez des proches</strong> perdus. Parce que même en pleine
        apocalypse, il y a toujours du Wi-Fi et de l&apos;espoir !
      </p>
      <button
        type="button"
        className="home-title-closebutton-mobile"
        onClick={() => {
          setIsPopUpVisible(false);
        }}
      >
        <MdClose />
      </button>
    </div>
  );
};

HomeTitleMobile.propTypes = {
  setIsPopUpVisible: PropTypes.func.isRequired,
};

export default HomeTitleMobile;
