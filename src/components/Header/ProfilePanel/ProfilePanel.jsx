import './ProfilePanel.scss';
import { FaUser } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import { toggleLoginFormPanel } from '../../../actions/authAction';
import LogoutForm from './LogoutForm';
import LoginForm from './LoginForm';

const ProfilePanel = () => {
  const dispatch = useDispatch();
  const isConnected = useSelector((state) => state.authentication.isConnected);
  const loginFormVisible = useSelector(
    (state) => state.authentication.loginFormVisible
  );

  return (
    <div
      className={
        loginFormVisible
          ? 'header-loginform-container header-loginform-container--visible'
          : 'header-loginform-container'
      }
    >
      <div className="header-loginform-avatar">
        <button
          type="button"
          className={
            loginFormVisible
              ? 'header-loginform-button header-loginform-button--close'
              : 'header-loginform-button header-loginform-button--avatar'
          }
          onClick={() => {
            dispatch(toggleLoginFormPanel(loginFormVisible));
          }}
        >
          {loginFormVisible ? <MdClose /> : <FaUser />}
        </button>
      </div>

      <div className="header-loginform-form-container">
        {!isConnected && <LoginForm />}
        {isConnected && <LogoutForm />}
      </div>
    </div>
  );
};

export default ProfilePanel;
