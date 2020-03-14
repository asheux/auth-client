import { connect } from 'react-redux';
import registerActions from '../../redux/actions.js';
import Signup from './Signup';

const mapStateToProps = ({register}) => ({
    userdata: register.data
});

export default connect(
    mapStateToProps, {
    registerActions
})(Signup);
