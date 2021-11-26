import { Response, Router } from 'express';

const routes = Router();

routes.get('/', (_, response): Response => {
  return response.json({ message: 'rentalshop/server/admin' });
});

export default routes;
