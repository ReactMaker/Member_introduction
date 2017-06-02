import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="inner">
        <h2 className="major">About & Contact</h2>
        <p>ReactMaker - 是一群在高雄對 React JS 有興趣的人們組成的一個小小社團，
          目前活躍於中南部的ReactJs教學分享讀書會；我們會不定期的分享範例(Open source)在粉絲團上，
          志立於分享教學讓新手可以比較有效率的上手，以提升中南部前端工程師的戰力，也歡迎各位高手來分享、教學、交流。</p>
        <ul className="contact">
          <li className="fa-github"><a href="https://github.com/ReactMaker">GitHub</a></li>
          <li className="fa-facebook"><a href="https://www.facebook.com/ReactMaker/">Facebook</a></li>
        </ul>
        <ul className="copyright">
          <li>&copy; ReactMaker. All rights reserved.</li>
          <li>ReactMaker &nbsp team</li>
        </ul>
      </div>
    );
  }
}
