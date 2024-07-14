import './ProfilePanel.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  changeEmailValue,
  changePasswordValue,
  resetLoginStatus,
  // handleSuccessfulLogin,
  submitLogin,
  toggleLoginFormPanel,
} from '../../../actions/authAction';

import ErrorForm from '../../Error/ErrorForm';

const LoginForm2 = () => {
  const dispatch = useDispatch();
  const [ErrorInputEmail, setErrorInputEmail] = useState('');
  const [ErrorInputPassword, setErrorInputPassword] = useState('');
  const [ErrorMessageCredentials, setErrorMessageCredentials] = useState('');

  const inputEmailValue = useSelector(
    (state) => state.authentication.inputEmail
  );
  const inputPasswordValue = useSelector(
    (state) => state.authentication.inputPassword
  );
  const loginStatusResponse = useSelector(
    (state) => state.authentication.httpStatus
  );

  // useEffect allows the app to react to the async changes et displays the errors when needed
  useEffect(() => {
    if (
      inputEmailValue !== '' &&
      inputPasswordValue !== '' &&
      loginStatusResponse === 401
    ) {
      setErrorMessageCredentials('Identifiants invalides');
      setTimeout(() => {
        setErrorMessageCredentials('');
        dispatch(resetLoginStatus());
      }, 2500);
    }
  }, [loginStatusResponse, inputEmailValue, inputPasswordValue, dispatch]);

  return (
    <form action="" method="post" className="header-loginform-form">
      <label htmlFor="email" className="header-loginform-form-label">
        Email
      </label>
      <input
        className="header-loginform-form-input"
        type="email"
        name="email"
        id="emaillogin"
        placeholder="email@apo-calypse.com"
        value={inputEmailValue}
        onChange={(event) => {
          dispatch(changeEmailValue(event.currentTarget.value));
        }}
      />
      {ErrorInputEmail && (
        <ErrorForm
          message={ErrorInputEmail}
          className="header-loginform-form-input form-error"
        />
      )}
      <label htmlFor="password" className="header-loginform-form-label">
        Mot de passe
      </label>
      <input
        className="header-loginform-form-input"
        type="password"
        name="password"
        id="passwordlogin"
        placeholder="Votre mot de passe"
        value={inputPasswordValue}
        onChange={(event) => {
          dispatch(changePasswordValue(event.currentTarget.value));
        }}
      />
      {ErrorInputPassword && (
        <ErrorForm
          message={ErrorInputPassword}
          className="header-loginform-form-input form-error"
        />
      )}
      {ErrorMessageCredentials && (
        <ErrorForm
          message={ErrorMessageCredentials}
          className="header-loginform-form-input form-error"
        />
      )}

      <div className="header-loginform-form-button-container">
        <button
          className="header-loginform-form-button"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            let hasError = false;

            if (inputEmailValue === '') {
              hasError = true;
              setErrorInputEmail('Entrer un email');
              setTimeout(() => {
                setErrorInputEmail('');
              }, 3000);
            }

            if (inputPasswordValue === '') {
              hasError = true;

              setErrorInputPassword('Entrer un mot de passe');
              setTimeout(() => {
                setErrorInputPassword('');
              }, 3000);
            }

            if (
              inputEmailValue !== '' &&
              inputPasswordValue !== '' &&
              loginStatusResponse === 401
            ) {
              hasError = true;
              setErrorMessageCredentials('Identifiants invalides');
              setTimeout(() => {
                hasError = false;
                setErrorMessageCredentials('');
              }, 3000);
            }

            if (!hasError) {
              dispatch(submitLogin());
            }
          }}
        >
          Connexion
        </button>
        <Link
          to="/creation-de-compte"
          // className="header-loginform-form-button"
        >
          <button
            className="header-loginform-form-button"
            type="button"
            onClick={() => {
              dispatch(toggleLoginFormPanel(false));
            }}
          >
            Inscription
          </button>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm2;
