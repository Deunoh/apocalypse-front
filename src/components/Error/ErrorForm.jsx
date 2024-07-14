import PropTypes from 'prop-types';
import './ErrorForm.scss';

const ErrorForm = ({ message }) => {
  return <p className="form-error">{message}</p>;
};

ErrorForm.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorForm;
