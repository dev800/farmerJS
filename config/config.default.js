const path = require('path');

module.exports = appInfo => {
  return {
    keys: 'secret@farmer_eggjs',
    logrotator: {
      filesRotateBySize: [
        path.join(appInfo.root, 'logs', appInfo.name, 'egg-web.log'),
      ],
      maxFileSize: 2 * 1024 * 1024 * 1024,
    },
  };
};
