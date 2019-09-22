``` bash
# init project
mkdir formerJS && cd formerJS
yarn init egg --type=simple

curl https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore > .gitignore

yarn add egg
yarn add cross-env --dev
yarn add egg-bin --dev

# https://sequelize.org/master/manual/getting-started.html
yarn add sequelize-cli --dev
yarn add egg-sequelize
yarn add pg pg-hstore

npx sequelize init:config
npx sequelize --help # 可以查看帮助

# 创建数据库
NODE_ENV=dev yarn run sequelize db:create
# 创建migration
NODE_ENV=dev yarn run sequelize migration:generate --name=create-users

```
