import { useDispatch, useSelector } from 'react-redux';
import './ProfilePanel.scss';
import { Link, useNavigate } from 'react-router-dom';
import {
  deleteUserAccount,
  submitLogout,
  toggleLoginFormPanel,
} from '../../../actions/authAction';

const AccessProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Is the user is connected ?
  const isConnected = useSelector((state) => state.authentication.isConnected);
  // firstname to display
  const firstnameLogOut = useSelector(
    (state) => state.authentication.firstname
  );
  // role of user for display or not dashboard
  const role = useSelector((state) => state.authentication.role);
  const userID = useSelector((state) => state.authentication.userId);
  const handleDeleteAccount = () => {
    if (
      window.confirm(
        'Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.'
      )
    ) {
      dispatch(deleteUserAccount(userID));
    }
  };
  return (
    <div className="header-loginform-form">
      <p className="header-loginform-greeting">
        {isConnected ? `Bonjour ${firstnameLogOut} !` : ''}
      </p>
      <button
        type="button"
        className="header-loginform-form-button"
        onClick={() => {
          dispatch(submitLogout());
          navigate('/');
        }}
      >
        Déconnexion
      </button>
      {role === 'ROLE_ADMIN' && (
        <Link to="/dashboard/articles">
          <button
            type="button"
            className="header-loginform-form-button header-loginform-form-button--dashboard"
            onClick={() => dispatch(toggleLoginFormPanel(false))}
          >
            Tableau de bord
          </button>
        </Link>
      )}
      <button
        type="button"
        className=" header-loginform-form-button header-loginform-form-button-delete"
        onClick={handleDeleteAccount}
      >
        Supprimer mon compte
      </button>
    </div>
  );
};

export default AccessProfile;
