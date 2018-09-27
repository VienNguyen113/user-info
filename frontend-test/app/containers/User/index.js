/**
 *
 * User
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import UserForm from 'components/UserForm/Loadable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectUser, makeSelectUsers } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { submit } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user.data || {};
    this.submitted = false;
  }

  componentWillMount() {}

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.user.data || {});
  }

  handleSubmit = () => {
    this.submitted = true;
    this.props.dispatch(submit(this.state));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const data = this.state;
    return (
      <div className="container">
        <UserForm
          data={data}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

User.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
