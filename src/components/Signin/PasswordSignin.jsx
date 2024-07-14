import PropTypes from 'prop-types';
import './Signin.scss';

import ReactPasswordChecklist from 'react-password-checklist';
import { useDispatch, useSelector } from 'react-redux';
import { changePasswordValueSignin } from '../../actions/authAction';

const PasswordSignin = ({ setIsValid }) => {
  const dispatch = useDispatch();

  const passwordInput = useSelector(
    (state) => state.authentication.inputPasswordSignin
  );

  return (
    <>
      <input
        className="signinform-block-input"
        placeholder="Mot de passe"
        type="password"
        onChange={(e) =>
          dispatch(changePasswordValueSignin(e.currentTarget.value))
        }
      />

      <ReactPasswordChecklist
        rules={['minLength', 'specialChar', 'number', 'capital']}
        minLength={9}
        value={passwordInput}
        messages={{
          minLength: 'Le mot de passe doit faire 9 caractères minimum',
          specialChar: 'Le mot de passe doit contenir des caractères spéciaux',
          number: 'Le mot de passe doit contenir un chiffre',
          capital:
            'Le mot de passe doit contenir une capitale (Paris, Londres, Berlin...)',
        }}
        onChange={(isValid) => setIsValid(isValid)}
      />
    </>
  );
};
// Bloquer le submit si un des 4 champs est avec l'icone rouge

PasswordSignin.propTypes = {
  setIsValid: PropTypes.func.isRequired,
};

export default PasswordSignin;
