import PropTypes from 'prop-types';

export const Notification = props => {
  return <h3>{props.message}</h3>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
