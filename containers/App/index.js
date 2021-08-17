import { connect } from 'react-redux';
import App from 'src/components/App';
import { getDataRecipes } from 'src/actions/recipes';
import { checkToken } from 'src/actions/user';
import store from '../../store';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  getDataRecipes: () => {
    dispatch(getDataRecipes());
  },
  checkIsLogged: () => {
    dispatch(checkToken());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
