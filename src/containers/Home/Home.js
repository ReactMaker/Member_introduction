import React, { Component } from 'react';
import Banner from '../Banner';
import Member from '../Member';
import Footer from '../Footer';
import './Home.less';

const logo = require('static/images/logo.png');

const members = [
  {
    name: 'Hyman',
    title: 'RD',
    photo: require('static/images/hyman.jpg'),
    intro: [
      'Expertise: React, Cordova, nodejs',
      '前端工程師，喜歡研究新的技術，也喜歡用程式玩出更多有趣的UI跟效果，想要帶領更多的人進入ReactJS的世界，最近在研究Mobx.js！'
    ],
    gitLink: 'https://github.com/chnbohwr',
  },
  {
    name: 'Andy',
    title: 'RD',
    photo: require('static/images/andy.jpg'),
    intro: [
      'Expertise: JavaScript, React, NodeJS',
      '一頭栽進前端世界的小小工程師，喜歡玩各種前端新鮮事物。 目前專注於ReactJS，使用過Flux、Redux、Mobx等單向資料流進行專案開發。'
    ],
    gitLink: 'https://github.com/bbandydd',
  },
  {
    name: 'Giant',
    title: 'PM',
    photo: require('static/images/giant.jpg'),
    intro: [
      '在團隊中擔任聯絡窗口，目前是高應大碩生，由於對前端開發有興趣，因此就跟大大',
      '們一起組成讀書會，專注於學習ReactJs。'
    ],
    gitLink: 'https://github.com/TKDchampion',
  },
  {
    name: 'Winsome',
    title: 'RD',
    photo: require('static/images/winsome.jpg'),
    intro: [
      'Expertise: React.js, Python, Django',
      '因為python開始學會寫程式，接觸前端一年，目前在使用React.js + Redux。'
    ],
  },
  {
    name: 'Jimmy',
    title: 'RD',
    photo: require('static/images/jimmy.jpg'),
    intro: [
      'Expertise: JavaScript, ,React.js, NodeJS',
      '前端工程師，對前端多樣的技術感到興趣，希望可以將前端技術分享給更多人。',
      '目前在使用React.js + Redux。',
    ],
  }
];

export default class Home extends Component {
  render() {

    return (
      <div id="page-wrapper">
        { /* Banner */ }
        <section id="banner">
          {
            <Banner logo={logo} />
          }
        </section>

        { /* Wrapper */ }
        <section id="wrapper">
          {
            members.map((member, index) => <Member member={member} index={index} />)
          }
        </section>

        { /* Footer */ }
        <section id="footer">
          <Footer />
        </section>
      </div>
    );
  }
}
