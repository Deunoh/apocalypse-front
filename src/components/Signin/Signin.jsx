import { Link, useNavigate } from 'react-router-dom';
import './Signin.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  changeEmailValueSignin,
  changeFirstNameValueSignin,
  changeLastNameValueSignin,
  handleSuccessfulSignin,
  submitSignin,
  toggleLoginFormPanel,
} from '../../actions/authAction';

import PasswordSignin from './PasswordSignin';
import ErrorForm from '../Error/ErrorForm';

const Signin = () => {
  const navigate = useNavigate();
  const inputLastNameSignin = useSelector(
    (state) => state.authentication.inputLastNameSignin
  );
  const inputFirstNameSignin = useSelector(
    (state) => state.authentication.inputFirstNameSignin
  );
  const dispatch = useDispatch();

  const inputEmailValue = useSelector(
    (state) => state.authentication.inputEmailSignin
  );

  const [errorInputFirstname, setErrorInputFirstname] = useState('');
  const [errorInputLastname, setErrorInputLastname] = useState('');
  const [errorInputEmail, setErrorInputEmail] = useState('');
  const [errorConsent, setErrorConsent] = useState('');
  const [isConsentChecked, setIsConsentChecked] = useState(false);

  const [isPasswordValid, setIsPasswordValid] = useState(false);

  // console.log('password valid ?', isPasswordValid);

  return (
    <div className="signinform-component-container">
      <h2 className="signinform-title">Créer un compte</h2>
      <div className="signinform-container">
        <form action="" className="signinform">
          <div className="signinform-block">
            <label htmlFor="lastname" className="signinform-block-label">
              Nom
            </label>
            <input
              type="text"
              name="lastname"
              id="lastnamesignin"
              placeholder="Nom"
              className="signinform-block-input"
              value={inputLastNameSignin}
              onChange={(event) =>
                dispatch(changeLastNameValueSignin(event.currentTarget.value))
              }
            />
            {errorInputLastname && <ErrorForm message={errorInputLastname} />}
          </div>

          <div className="signinform-block">
            <label htmlFor="firstname" className="signinform-block-label">
              Prénom
            </label>
            <input
              type="text"
              name="firstname"
              id="firstnamesignin"
              placeholder="Prénom"
              className="signinform-block-input"
              value={inputFirstNameSignin}
              onChange={(event) =>
                dispatch(changeFirstNameValueSignin(event.currentTarget.value))
              }
            />
            {errorInputFirstname && <ErrorForm message={errorInputFirstname} />}
          </div>
          <div className="signinform-block">
            <label htmlFor="email" className="signinform-block-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="signinform-block-input"
              value={inputEmailValue}
              onChange={(event) => {
                dispatch(changeEmailValueSignin(event.currentTarget.value));
              }}
            />
            {errorInputEmail && <ErrorForm message={errorInputEmail} />}
          </div>
          <div className="signinform-block">
            <label htmlFor="password" className="signinform-block-label">
              Mot de passe
            </label>

            <PasswordSignin setIsValid={setIsPasswordValid} />
          </div>
          <div className="signinform-block consent-account-container">
            <label htmlFor="consent_account">
              J&apos;accepte que mes données soient utilisées pour la création
              et la gestion de mon compte.
            </label>
            <input
              type="checkbox"
              id="consent_account"
              name="consent_account"
              checked={isConsentChecked}
              onChange={(event) =>
                setIsConsentChecked(event.currentTarget.checked)
              }
            />
          </div>
          {errorConsent && <ErrorForm message={errorConsent} />}
          <button
            type="submit"
            className="signinform-button"
            onClick={(event) => {
              event.preventDefault();

              let hasError = false;

              if (inputLastNameSignin === '') {
                setErrorInputLastname("Merci d'indiquer votre nom");
                hasError = true;
                setTimeout(() => {
                  setErrorInputLastname('');
                }, 3000);
              }
              if (inputFirstNameSignin === '') {
                setErrorInputFirstname("Merci d'indiquer votre prénom");
                hasError = true;

                setTimeout(() => {
                  setErrorInputFirstname('');
                }, 3000);
              }
              if (inputEmailValue === '') {
                hasError = true;

                setErrorInputEmail('Merci de saisir un email');
                setTimeout(() => {
                  setErrorInputEmail('');
                }, 3000);
                // return;
              }
              if (!isPasswordValid) {
                hasError = true;
              }
              if (!isConsentChecked) {
                hasError = true;
                setErrorConsent(
                  'Vous devez accepter les conditions pour créer un compte'
                );
                setTimeout(() => {
                  setErrorConsent('');
                }, 3000);
              }
              if (!hasError) {
                dispatch(submitSignin());
                navigate('/');
              }
            }}
          >
            Créer un compte
          </button>
          <p className="signinform-bottomline">Vous avez déjà un compte ?</p>
          <Link
            to="/"
            className="signinform-redirect"
            onClick={() => {
              dispatch(toggleLoginFormPanel(true));
              navigate('/');
            }}
          >
            Se connecter
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signin;
