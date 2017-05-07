import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WebView extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    onStartLoading: PropTypes.func.isRequired,
    onStopLoading: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const webview = document.querySelector('webview');

    webview.addEventListener('did-start-loading',
      this.props.onStartLoading);
    webview.addEventListener('did-stop-loading',
      () => this.props.onStopLoading({ url: webview.getURL() }));
    webview.setAttribute('src', this.props.url);
  }

  shouldComponentUpdate(nextProps) {
    const webview = document.querySelector('webview');
    return webview.getAttribute('src') !== nextProps.url || nextProps.reload;
  }

  componentDidUpdate() {
    const webview = document.querySelector('webview');
    webview.setAttribute('src', this.props.url);
  }

  render() {
    return (
      <webview
        style={{
          flexGrow: 1,
        }}
      />
    );
  }
}

export default WebView;
