import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import routes from './routes';
import render, { setRoutes } from '@sketchpixy/rubix/lib/others/router';
import { isBrowser } from '@sketchpixy/rubix';
import { defaults } from 'react-chartjs-2'

// import "react-select/dist/react-select.css"

defaults.global.defaultColor = 'rgba(0, 0, 0, 0.5)'
moment.locale('zh_CN')
window.API_HOST = ''
if (!__PRODUCTION__) {
  const env = require('../.env')
  const matched = /APP_URL=([^\n]+)\n/.exec(env)
  if (matched) {
    window.API_HOST = `http://${matched[1]}`;
  }
}

if (isBrowser()) {
  render(routes, () => {
  });

  if (module.hot) {
    module.hot.accept('./routes', () => {
      // reload routes again
      require('./routes').default;
      render(routes);
    });
  }
} else {
  // set routes for server-side rendering
  setRoutes(routes);
}


