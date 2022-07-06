import { Request, Response } from 'express';
import CreateSessionsService from '../services/CreateSessionService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const service = new CreateSessionsService();
    const { email, password } = request.body;

    const user = await service.execute({ email, password });

    return response.json(user);
  }
}
