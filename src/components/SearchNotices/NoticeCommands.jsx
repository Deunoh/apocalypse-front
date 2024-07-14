import PropTypes from 'prop-types';
import './NoticeCommands.scss';
import { MdClose } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';
import { FaEye } from 'react-icons/fa';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  hideSearchNotice,
  modifyStatusSearchNotice,
  openSearchFormNotice,
} from '../../actions/searchAction';

const NoticeCommands = ({ id, user }) => {
  const userID = useSelector((state) => state.authentication.userId);
  // console.log(user.id);
  const dispatch = useDispatch();

  return (
    <div className="commands-container">
      <button
        type="button"
        className="commands-button commands-button--red"
        onClick={() => {
          dispatch(hideSearchNotice(id));
        }}
      >
        <MdClose className="commands-button--icon" />
      </button>
      {userID === user.id && (
        <button
          type="button"
          className="commands-button commands-button--blue"
          onClick={() => dispatch(modifyStatusSearchNotice(id))}
        >
          <FaCheck className="commands-button--icon" />
        </button>
      )}
      <button
        type="button"
        className="commands-button commands-button--green"
        onClick={() => {
          dispatch(openSearchFormNotice(id));
        }}
      >
        <FaEye className="commands-button--icon" />
      </button>
    </div>
  );
};

NoticeCommands.propTypes = {
  id: PropTypes.number.isRequired,

  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default NoticeCommands;
