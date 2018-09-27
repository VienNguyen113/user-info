/**
 *
 * Form
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const button = styled.button`
  box-shadow: none;
  background-color: #4285f4;
  background-image: none;
  cursor: pointer;
  border-color: transparent !important;
  border-radius: 2px;
  border-width: 1px;
  border-style: inset;
  color: #fff;
  height: 30px;
  text-transform: uppercase;
  font-size: var(--docs-material-font-size-normal, 13px);
  margin-right: 12px;
  padding: 0 7px;
  min-width: 0;
`;

function UserForm(props) {
  return (
    <div className="container">
      <div className="group">
        <div>
          <span>First Name</span>
          <input
            type="text"
            name="firstName"
            value={props.data.firstName || ''}
            onChange={props.onChange}
          />
        </div>
        <div>
          <span>Last Name</span>
          <input
            type="text"
            name="lastName"
            value={props.data.lastName || ''}
            onChange={props.onChange}
          />
        </div>
      </div>
      <div className="group">
        <div>
          <span>Company</span>
          <input
            type="text"
            name="company"
            value={props.data.company || ''}
            onChange={props.onChange}
          />
        </div>
        <div>
          <span>Department</span>
          <input
            type="text"
            name="department"
            value={props.data.department || ''}
            onChange={props.onChange}
          />
        </div>
        <div>
          <span>Position</span>
          <input
            type="text"
            name="position"
            value={props.data.position || ''}
            onChange={props.onChange}
          />
        </div>
      </div>
      <div className="group">
        <div>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={props.data.email || ''}
            onChange={props.onChange}
          />
        </div>
      </div>
      <button onClick={props.onSubmit}>Submit</button>
    </div>
  );
}

UserForm.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    company: PropTypes.string,
    department: PropTypes.string,
    position: PropTypes.string,
    email: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

UserForm.defaultProps = {
  data: {
    firstName: '',
    lastName: '',
    company: '',
    department: '',
    position: '',
    email: '',
  },
};

export default UserForm;
