const path = require('path');

module.exports = appInfo => {
  const config = require(__dirname + '/config.default.js');

  config.keys = 'secret@farmer_eggjs-dev';

  config.logrotator = {
    filesRotateBySize: [
      path.join(appInfo.root, 'logs', appInfo.name, 'egg-web.log'),
    ],
    maxFileSize: 2 * 1024 * 1024 * 1024,
  }

  config.logger = {
    consoleLevel: 'DEBUG',
    level: 'DEBUG'
  }

  // PostgresSQL
  config.sequelize = require(__dirname + '/../database/config.json')['development'];

  config.passportGithub = {
    ...require(__dirname + '/secret.json')['passportGithub'],
    callbackURL: '/passport/github/callback',
    // proxy: false,
  };

  return config;
};
