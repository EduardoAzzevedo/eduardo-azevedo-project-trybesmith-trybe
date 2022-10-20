import express from 'express';
import products from './router/PeoductRouter';
import user from './router/UserRouter';

const app = express();

app.use(express.json());

app.use('/products', products);
app.use('/users', user);

export default app;
