import { connect } from 'react-redux';
import Field from 'src/components/Form/Field';

const mapStateToProps = (state, ownProps) => ({
  value: state.user[ownProps.name],
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
