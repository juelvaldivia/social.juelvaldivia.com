import { Response, Request } from 'express';
import { GetLocalUser } from '../../lib/activityPub';

export const getUser = (baseUrl: string) => (req: Request, res: Response): Response => {
  // TODO: implement find user with local database
  const localUsers = [
    { username: 'juel' },
    { username: 'jose' },
    { username: 'juan' }
  ];

  const user = localUsers.find(item => item.username === req.params.username) || { username: 'unknown' };

  if (user.username === 'unknown') {
    return res.status(404).json({ message: 'User not found' })
  }

  const getLocalUser = new GetLocalUser(baseUrl, user.username);
  const localUser = getLocalUser.execute();

  return res.status(200).json(localUser);
};
