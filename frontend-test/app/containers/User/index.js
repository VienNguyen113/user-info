/**
 *
 * User
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import UserForm from 'components/UserForm/Loadable';
import { INVALID_EMAIL_ADDRESS } from 'utils/constants';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectUser, makeSelectUsers } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { submit, getAll } from './actions';

export class User extends React.Component {
  constructor(props) {
    super(props);

    this.submitted = false;
    this.isGotLastOldUserData = false;

    this.state = {
      data: {
        firstName: '',
        lastName: '',
        company: '',
        department: '',
        position: '',
        email: '',
      },
      formErrors: {
        email: '',
      },
    };
  }

  componentWillMount() {
    this.props.dispatch(getAll());
    this.getLastOldUserData(this.props.users.data);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEmpty(nextProps.users.data) && !this.isGotLastOldUserData) {
      this.getLastOldUserData(nextProps.users.data);
    }
  }

  getLastOldUserData(usersData) {
    if (isEmpty(usersData)) return false;

    this.isGotLastOldUserData = true;
    return this.setState({
      data: {
        firstName: usersData[0].firstName,
        lastName: usersData[0].lastName,
        company: usersData[0].company,
        department: usersData[0].department,
        position: usersData[0].position,
        email: usersData[0].email,
      },
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { isValid, formErrors } = this.validate();

    if (!isValid) {
      return this.setState({ formErrors });
    }

    this.setState({ formErrors });
    this.isSubmitted = true;
    return this.props.dispatch(submit(this.state.data));
  };

  validate = () => {
    const formErrors = {};
    const { email } = this.state.data;
    if (validator.isEmpty(email) || !validator.isEmail(email)) {
      formErrors.email = INVALID_EMAIL_ADDRESS;
    }
    return {
      isValid: isEmpty(formErrors),
      formErrors,
    };
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  };

  render() {
    const newUserData = this.props.user;
    return (
      <div className="container userForm">
        <UserForm
          data={this.state.data}
          formErrors={this.state.formErrors}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          isLoading={newUserData.loading}
          isCreatedUser={newUserData.success}
        />
      </div>
    );
  }
}

User.propTypes = {
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  users: makeSelectUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'user', reducer });
const withSaga = injectSaga({ key: 'user', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(User);
