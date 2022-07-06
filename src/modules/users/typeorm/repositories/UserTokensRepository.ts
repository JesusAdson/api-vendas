import { EntityRepository, Repository } from 'typeorm';
import UserToken from '../entities/UserToken';

@EntityRepository(UserToken)
class UserTokensRepository extends Repository<UserToken> {
  /**
   * getByToken
   */
  public async getByToken(token: string): Promise<UserToken | undefined> {
    const user_token = await this.findOne({
      where: {
        token,
      },
    });

    return user_token;
  }

  /**
   * getById
   */
  public async generate(user_id: string): Promise<UserToken | undefined> {
    const userToken = this.create({
      user_id,
    });

    await this.save(userToken);

    return userToken;
  }
}

export default UserTokensRepository;
