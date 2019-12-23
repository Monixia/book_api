npm install
npm i nodemon -g
npm install -g sequelize-cli
sequelize db:migrate:undo:all 
sequelize db:migrate
npm run dev
