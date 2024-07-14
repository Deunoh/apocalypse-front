import { Link, useNavigate, useParams } from 'react-router-dom';
import './FormDashboardUser.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateUser } from '../../../../actions/userAction';

const FormDashboardUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // id of the user clicked
  // Warning useParams give id in string !
  const { id } = useParams();
  console.log('type of id', typeof id);
  // list of all users from the redux state
  const usersList = useSelector((state) => state.user.usersList);

  const [inputLastName, setInputLastName] = useState('');
  const [inputFirstName, setInputFirstName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  // search user by his id and fill in the form
  useEffect(() => {
    // 2 parameters for parseInt, the second is 10 by default
    const userInfo = usersList.find((user) => user.id === parseInt(id, 10));
    if (userInfo) {
      setInputLastName(userInfo.lastname);
      setInputFirstName(userInfo.firstname);
      setInputEmail(userInfo.email);
      setSelectedRole(userInfo.roles[0]);
    }
  }, [id, usersList]);

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  return (
    <div className="userform-component-container">
      <h2 className="userform-title">Modifier un utilisateur</h2>
      <div className="userform-container">
        <form action="" className="userform">
          <div className="userform-block">
            <label htmlFor="lastname" className="userform-block-label">
              Nom
            </label>
            <input
              type="text"
              name="lastname"
              id="lastnamesignin"
              placeholder="Nom"
              className="userform-block-input"
              value={inputLastName}
              onChange={(event) => setInputLastName(event.currentTarget.value)}
            />
          </div>

          <div className="userform-block">
            <label htmlFor="firstname" className="userform-block-label">
              Prénom
            </label>
            <input
              type="text"
              name="firstname"
              id="firstnamesignin"
              placeholder="Prénom"
              className="userform-block-input"
              value={inputFirstName}
              onChange={(event) => setInputFirstName(event.currentTarget.value)}
            />
          </div>
          <div className="userform-block">
            <label htmlFor="email" className="userform-block-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="userform-block-input"
              value={inputEmail}
              onChange={(event) => setInputEmail(event.currentTarget.value)}
            />
          </div>
          <div className="userform-block">
            <label htmlFor="role" className="userform-block-label">
              Sélectionnez un rôle
            </label>
            <select
              className="userform-block-input"
              value={selectedRole}
              onChange={handleRoleChange}
            >
              <option value="ROLE_USER">User</option>
              <option value="ROLE_ADMIN">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="userform-button"
            onClick={(event) => {
              event.preventDefault();

              // Dispatch the action to update the user
              dispatch(
                updateUser(id, {
                  lastname: inputLastName,
                  firstname: inputFirstName,
                  email: inputEmail,
                  roles: [selectedRole],
                })
              );
              navigate('/dashboard/users');
            }}
          >
            Modifier l&apos;utilisateur
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormDashboardUser;
