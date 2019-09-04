import { connect } from 'react-redux';
import Location from '../components/Location';
import { getLocationById } from '../selectors/locationSelectors';

const mapStateToProps = (state, props) => ({
  location: getLocationById(state, props.match.params._id)
});

export default connect(
  mapStateToProps
)(Location);
