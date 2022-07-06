import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListUserService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const service = new ListUserService();

    const users = await service.execute();

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const service = new CreateUserService();

    const { name, email, password } = request.body;

    const user = await service.execute({
      name,
      email,
      password,
    });

    return response.json(user);
  }
}
