import { Router } from 'express';
import productsRouter from '@modules/products/routes/products.routes';
import userRouter from '@modules/users/routes/users.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import passwordRouter from '@modules/users/routes/password.routes';

const routes = Router();

routes.use('/products', productsRouter);

routes.use('/users', userRouter);

routes.use('/sessions', sessionsRouter);

routes.use('/password', passwordRouter);

export default routes;
