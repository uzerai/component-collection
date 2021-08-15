import PropTypes from 'prop-types';
import React from 'react';
import { Alert } from '../Alert';

/**
 *  ######################################################
 *  #                  Component logic                   #
 *  ######################################################
 */

/**
 * Very simple error boundary which will display the
 * error message in an Alert component instead of rendering the children.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error.message
    }
  }

  componentDidCatch(error, errorInfo) {
    // Maybe log to sentry here.
    console.warn('Error', error);
    console.warn('ErrorInfo', errorInfo);
  }

  render() {
    const { hasError, errorMessage } = this.state;

    if(hasError) {
      return <div>
        <Alert variation='danger'>
          <p>{errorMessage}</p>
        </Alert>
      </div>
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};

ErrorBoundary.defaultProps = {};

export { ErrorBoundary };
