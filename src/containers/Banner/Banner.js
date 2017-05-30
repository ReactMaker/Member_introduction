import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Banner extends Component {
  static propTypes = {
    logo: PropTypes.string,
  }

  render() {
    const { logo } = this.props;

    return (
      <div className="inner">
        <div className="logo"><span><img alt="" src={logo} width="25%" /></span></div>
        <h2>ReactMaker</h2>
        <p>是一群在高雄對 React JS 有興趣的人們組成的一個小小社團</p>
      </div>
    );
  }
}
