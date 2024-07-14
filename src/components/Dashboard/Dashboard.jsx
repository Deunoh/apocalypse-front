import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './Dashboard.scss';
// import DashboardArticles from './DashboardArticles/DashboardArticles';
// import DashboardComments from './DashboardPinpoints/DashboardPinpoints';
// import DashboardQuestions from './DashboardQuestions/DashboardQuestions';
// import DashboardUsers from './DashboardUsers/DashboardUsers';

const Dashboard = () => {
  const firstNameToDisplay = useSelector(
    (state) => state.authentication.firstname
  );
  const [boardVisibility, setBoardVisibility] = useState([
    true,
    false,
    false,
    false,
  ]);

  const toggleBoard = (index) => {
    setBoardVisibility((prevState) =>
      prevState.map((value, i) => (i === index ? !value : false))
    );
  };

  // const [isArticleShown, setIsArticleShown] = useState(false);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">
        Bienvenue sur le backoffice de {firstNameToDisplay}
      </h2>
      <ul className="dashboard-tiles">
        {/* <Link
          to="/dashboard/articles"
          className={
            boardVisibility[0]
              ? 'dashboard-tiles-button dashboard-tiles-button--active'
              : 'dashboard-tiles-button'
          }
          onClick={() => {
            toggleBoard(0);
          }}
        >
          Articles
        </Link> */}
        <NavLink
          to="/dashboard/articles"
          className={({ isActive }) =>
            isActive
              ? 'dashboard-tiles-button dashboard-tiles-button--active'
              : 'dashboard-tiles-button'
          }
        >
          Articles
        </NavLink>

        <NavLink
          to="/dashboard/pinpoints"
          className={({ isActive }) =>
            isActive
              ? 'dashboard-tiles-button dashboard-tiles-button--active'
              : 'dashboard-tiles-button'
          }
        >
          Gestion carte
        </NavLink>

        <NavLink
          to="/dashboard/searchnotices"
          className={({ isActive }) =>
            isActive
              ? 'dashboard-tiles-button dashboard-tiles-button--active'
              : 'dashboard-tiles-button'
          }
        >
          Avis de recherche
        </NavLink>

        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            isActive
              ? 'dashboard-tiles-button dashboard-tiles-button--active'
              : 'dashboard-tiles-button'
          }
        >
          Gestion utilisateurs
        </NavLink>
      </ul>
    </div>
  );
};

export default Dashboard;
