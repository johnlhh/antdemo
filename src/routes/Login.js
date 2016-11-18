import React, { PropTypes } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import Login from '../components/Login/Login';


function LoginPage({ location, dispatch, login}) {
  const {
    flag,
    message,
  } = login;

  const loginProps = {
    onLogin(fieldsValue) {
      dispatch({
        type: 'login/login',
        payload: fieldsValue,
      });
    },
  };
  return (
    <Login {...loginProps} />
  );
}

LoginPage.propTypes = {
  login: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
};

function mapStateToProps({ login }) {
  return { login };
}

export default connect(mapStateToProps)(LoginPage);
