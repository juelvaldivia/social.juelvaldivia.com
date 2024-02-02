import { Response, Request } from 'express';

import { Person } from '../../lib/activityPub/entities';
import { CreatePost, GetLocalUser, GetRemoteUser, SendActivity } from '../../lib/activityPub';

export const createPost = (baseUrl: string) => async (req: Request, res: Response): Promise<Response> => {
  const username: string = 'juel'; // TODO: implement user of session
  const content: string = req.body.content;

  // TODO: implement get followers from database
  const juel = new GetLocalUser(baseUrl, username).execute();
  const jose = new GetLocalUser(baseUrl, 'jose').execute();
  const juan = new GetLocalUser(baseUrl, 'juan').execute();
  const juan3001 = await new GetRemoteUser('http://localhost:3001/@juan').execute();

  const followers: Array<Person> = [jose, juan, juan3001];

  const createPost = new CreatePost(baseUrl, juel, content, followers);
  const newPost = createPost.execute();

  const sendActivity = new SendActivity(baseUrl, newPost)
  sendActivity.execute();

  return res.status(201).json({ message: 'Activity sent successfully'});
};

