import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import multer from 'multer';
import upload_config from '@config/upload';
import UsersController from '../controllers/UsersController';
import Authenticated from '@shared/http/middlewares/Authenticated';
import UserAvatarController from '../controllers/UserAvatarController';

const userRouter = Router();

const usersController = new UsersController();

const userAvatarController = new UserAvatarController();

const upload = multer(upload_config);

userRouter.get('/', Authenticated, usersController.index);

userRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

userRouter.patch(
  '/avatar',
  Authenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default userRouter;
