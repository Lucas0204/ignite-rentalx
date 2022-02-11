import { Router } from 'express';
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.routes';
import { usersRoutes } from './users.routes';
import { carsRoutes } from './cars.routes';
import { authenticationRoutes } from './authentication.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use(authenticationRoutes);

router.use('/cars', carsRoutes);

router.use('/categories', categoriesRoutes);
router.use('/specification', specificationsRoutes);

export { router };
