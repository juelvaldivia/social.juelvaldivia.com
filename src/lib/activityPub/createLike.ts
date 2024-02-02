import { Actor, Like } from './entities';

export class CreateLike {
  private readonly serverUrl: string;
  private readonly localUser: Actor;
  private readonly objectUrl: string;

  constructor(serverUrl: string, localUser: Actor, objectUrl: string) {
    this.serverUrl = serverUrl;
    this.localUser = localUser;
    this.objectUrl = objectUrl;
  }

  public execute(): Like {
    const likeActivity: Like = {
      id: `${this.serverUrl}/activities/${Date.now()}`,
      type: 'Like',
      actor: this.localUser,
      object: {
        id: this.objectUrl,
        type: 'Note'
      },
      published: new Date().toISOString(),
    };

    return likeActivity;
  }
}
