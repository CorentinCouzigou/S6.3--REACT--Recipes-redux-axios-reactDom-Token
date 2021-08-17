import { connect } from 'react-redux';
import Home from 'src/components/Home';
import store from '../../store';

const mapStateToProps = (state) => ({
  recipes: state.recipes.list,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
