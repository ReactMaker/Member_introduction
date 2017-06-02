import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Main from 'containers/';
import Favicon from 'react-favicon';
import favico from './static/images/favicon-reactmaker.ico';


ReactDOM.render(
  <AppContainer>
    <div>
      <Favicon url={[favico]}/>
      <Main />
    </div>
  </AppContainer>,
  document.getElementById('app')
);

// migrate by this guide
// https://github.com/gaearon/react-hot-loader/tree/master/docs#migration-to-30
if (module.hot) {
  module.hot.accept('containers/', () => {
    const NewMain = require('containers/').default;
    ReactDOM.render(
      <AppContainer>
        <div>
          <Favicon url={[favico]}/>
          <NewMain />
        </div>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
