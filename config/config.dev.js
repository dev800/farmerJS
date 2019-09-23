const path = require('path');
const sequelizeConfig = require(__dirname + '/../database/config.json')['development'];

module.exports = appInfo => {
  const config = {};

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
  config.sequelize = sequelizeConfig;

  return config;
};
