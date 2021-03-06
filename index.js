const express = require('express');
const bodyParser = require('body-parser');
const error = require('./middlewares/errorMiddleware');
const
{ userRouter,
  loginRouter,
  // getAllUsers,
  // getUser,
  // getCategorie,
  // getAllCategories,
  // post,
  categorieRouter,
  postRouter,
} = require('./router/router');

const app = express();
app.use(bodyParser.json());

require('dotenv').config();

app.use('/user', userRouter);

app.use('/login', loginRouter);

app.use('/categories', categorieRouter);

app.use('/post', postRouter);

app.use('/get', postRouter);

app.use(error);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
