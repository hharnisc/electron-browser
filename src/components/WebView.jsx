import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WebView extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    onStartLoading: PropTypes.func.isRequired,
    onStopLoading: PropTypes.func.isRequired,
    onPageNavigate: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.webview.addEventListener('did-start-loading',
      this.props.onStartLoading);
    this.webview.addEventListener('did-stop-loading',
      () => this.props.onStopLoading());
    this.webview.addEventListener('did-navigate',
      ({ url }) => this.props.onPageNavigate({ url }));
    this.webview.addEventListener('did-navigate-in-page',
      ({ url }) => this.props.onPageNavigate({ url }));
    this.webview.setAttribute('src', this.props.url);
  }

  shouldComponentUpdate(nextProps) {
    return this.webview.getAttribute('src') !== nextProps.url
      || nextProps.reload;
  }

  componentDidUpdate() {
    this.webview.setAttribute('src', this.props.url);
  }

  render() {
    return (
      <webview
        ref={ref => (this.webview = ref)}
        style={{
          flexGrow: 1,
        }}
      />
    );
  }
}

export default WebView;
