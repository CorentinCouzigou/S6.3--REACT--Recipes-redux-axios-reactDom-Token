import { connect } from 'react-redux';
import Form from 'src/components/Form';
import { changeInputValue, toggleConnected, toggleDisconnected, changePseudo, login } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.logged,
  loggedMessage: `Bienvenue ${state.user.pseudo}`,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, nature) => {
    const action = changeInputValue(value, nature);
    dispatch(action);
  },
  handleLogin: () => {
    const action = login();
    dispatch(action);
  },
  handleLogout: () => {
    const action = toggleDisconnected();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
