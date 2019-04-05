import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  resetError = () => this.setState({ hasError: false, error: null });

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      // You can render our custom fallback UI
      return (
        <div className="ui tertiary inverted red segment">
          <p>Something went wrong :(</p>
          <p>{error.message}</p>
          <button onClick={this.resetError}>Okay</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
