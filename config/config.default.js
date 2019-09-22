const path = require('path');

module.exports = appInfo => {
  const config = {};

  config.keys = 'secret@farmer_eggjs';

  config.logrotator = {
    filesRotateBySize: [
      path.join(appInfo.root, 'logs', appInfo.name, 'egg-web.log'),
    ],
    maxFileSize: 2 * 1024 * 1024 * 1024,
  }

  return config;
};
