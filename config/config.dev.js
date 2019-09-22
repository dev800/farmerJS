const path = require('path');

module.exports = appInfo => {
  return {
    keys: 'secret@farmer_eggjs-dev',
    logger: {
      consoleLevel: 'DEBUG',
      level: 'DEBUG'
    },
  };
};
