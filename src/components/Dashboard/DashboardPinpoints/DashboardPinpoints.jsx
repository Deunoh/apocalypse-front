import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPinpoints } from '../../../actions/mapAction';
import './DashboardPinpoints.scss';
import Pinpoints from './Pinpoints';
import ToastNotification from '../../Error/ToastNotification/ToastNotification';

const DashboardPinpoints = () => {
  // the pinpoint has been delete in the database?
  const isNotificationToast = useSelector(
    (state) => state.map.isToastSuccessRemoveMessage
  );
  // Was there an error when delete a pinpoint?
  const isErrorToast = useSelector(
    (state) => state.map.isToastErrorRemoveMessage
  );
  // import users from redux state
  const dispatch = useDispatch();
  // full list of users from state redux
  const pinpointsList = useSelector((state) => state.map.pinpoints);

  // call API to get all the users from the db
  useEffect(() => {
    dispatch(fetchPinpoints());
  }, [dispatch]);

  return (
    <div className="dashboard-subcomponent-container">
      <h3 className="dashboard-subcomponent-title">Gestion de la carte</h3>
      <div className="table-container">
        <table className="dashboard-table">
          <thead className="dashboard-table-head">
            <tr className="dashboard-table-row">
              <th className="dashboard-table-row-item dashboard-table-row-item--title dashboard-table-row-item--id">
                ID
              </th>
              <th className="dashboard-table-row-item dashboard-table-row-item--title dashboard-table-row-item--description">
                Description
              </th>
              <th className="dashboard-table-row-item dashboard-table-row-item--title dashboard-table-row-item--latitude">
                Latitude
              </th>
              <th className="dashboard-table-row-item dashboard-table-row-item--title dashboard-table-row-item--longitude">
                Longitude
              </th>
              <th className="dashboard-table-row-item dashboard-table-row-item--title dashboard-table-row-item--type">
                Type
              </th>
              <th className="dashboard-table-row-item dashboard-table-row-item--title dashboard-table-row-item--button">
                {' '}
              </th>
            </tr>
          </thead>
          <tbody>
            {pinpointsList.map((pinpoint) => (
              <Pinpoints key={pinpoint.id} {...pinpoint} />
            ))}
          </tbody>
        </table>
      </div>
      {isNotificationToast && (
        <ToastNotification message="Marqueur supprimé !" success />
      )}
      {isErrorToast && (
        <ToastNotification
          message="Une erreur s'est produite"
          success={false}
        />
      )}
    </div>
  );
};

export default DashboardPinpoints;
