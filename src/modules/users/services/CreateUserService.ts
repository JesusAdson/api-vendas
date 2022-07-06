import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
  name: string;
  password: string;
  email: string;
}

class CreateUserService {
  public async execute({ name, password, email }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UsersRepository);

    const emailExists = await userRepository.getByEmail(email);
    if (emailExists) {
      throw new AppError('Email address already beeing used');
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      password: hashedPassword,
      email,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
