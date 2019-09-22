module.exports = appInfo => {
  const config = {};

  config.keys = 'secret@farmer_eggjs-dev';

  config.logger = {
    consoleLevel: 'DEBUG',
    level: 'DEBUG'
  }

  // PostgresSQL
  config.sequelize = {
    "username": "postgres",
    "password": "postgres",
    "database": "farmer_eggjs_dev",
    "host": "127.0.0.1",
    "port": "5432",
    "dialect": "postgres",
    "operatorsAliases": false
  };

  return config;
};
