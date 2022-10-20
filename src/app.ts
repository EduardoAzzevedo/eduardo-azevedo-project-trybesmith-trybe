import express from 'express';
import products from './router/PeoductRouter';
import user from './router/UserRouter';
import order from './router/OrderRouter';
import loginRouter from './router/LoginRouter';

const app = express();

app.use(express.json());

app.use('/products', products);
app.use('/users', user);
app.use('/orders', order);
app.use('/login', loginRouter);

export default app;
