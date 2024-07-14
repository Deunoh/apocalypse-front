import PropTypes from 'prop-types';
import { VscGithubAlt } from 'react-icons/vsc';
import { FaLinkedinIn } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
// import logoProfil from '../../assets/profil.jpg';

const ContactDetail = ({
  name,
  dev,
  rôle,
  email,
  linkedin,
  github,
  picture,
}) => {
  return (
    <div className="contact-detail--container">
      <img className="contact-detail--img" src={picture} alt="" />
      <h3 className="contact-detail--title">{name}</h3>
      <p className="contact-detail--skills">{dev}</p>
      <p className="contact-detail--skills contact-detail--skills--secondary">
        {rôle}
      </p>
      <div className="red-line" />
      <ul className="contact-detail--ul">
        <li className="contact-list">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="contact-list-link"
          >
            <VscGithubAlt className="contact-list-icon" size={30} />
            <span className="filling" />
          </a>
        </li>
        <li className="contact-list">
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-list-link"
          >
            <FaLinkedinIn className="contact-list-icon" size={30} />
            <span className="filling" />
          </a>
        </li>
        <li className="contact-list">
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noreferrer"
            className="contact-list-link"
          >
            <MdOutlineEmail className="contact-list-icon" size={30} />
            <span className="filling" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactDetail;

ContactDetail.propTypes = {
  name: PropTypes.string.isRequired,
  rôle: PropTypes.string.isRequired,
  dev: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
