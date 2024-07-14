import './ToastNotification.scss';
import { CiCircleCheck } from 'react-icons/ci';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetToastArticleNotification } from '../../../actions/guideAction';
import { resetToastUserNotification } from '../../../actions/userAction';
import { resetToastPinpointNotification } from '../../../actions/mapAction';
import { resetToastSearchNoticeNotification } from '../../../actions/searchAction';

/**
 * message: string - The message to display
 * success: bool - If true, display a success message; if false, display an error message
 */
const ToastNotification = ({ message, success }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        dispatch(resetToastArticleNotification());
        dispatch(resetToastUserNotification());
        dispatch(resetToastPinpointNotification());
        dispatch(resetToastSearchNoticeNotification());
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [message, dispatch]);

  if (!visible) return null;

  return (
    <div className={success ? 'notification-success' : 'notification-error'}>
      <div className="notification__body">
        <CiCircleCheck
          className={
            success ? 'notification__icon-success' : 'notification__icon-error'
          }
          size={30}
        />
        {message}
      </div>
    </div>
  );
};

ToastNotification.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
};

export default ToastNotification;
