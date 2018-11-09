const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');
const models = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

const init = async () => {
  await models.User.sync();
  await models.Page.sync();
  app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`);
  })
}

const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use('/wiki', wikiRouter);
//app.use('/user', userRouter);

app.get('/', (req, res, next) => {
  //res.send('Hello World!');
  res.redirect('/wiki');
  //res.send(layout(''));

})

const PORT = 3000;
init();
