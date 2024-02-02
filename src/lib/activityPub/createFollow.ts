import { Actor, Follow } from './entities';

export class CreateFollow {
  private readonly serverUrl: string;
  private readonly localUser: Actor;
  private readonly followingUrl: string;

  constructor(serverUrl: string, localUser: Actor, followingUrl: string) {
    this.serverUrl = serverUrl;
    this.localUser = localUser;
    this.followingUrl = followingUrl;
  }

  public execute(): Follow {
    const followActivity: Follow = {
      id: `${this.serverUrl}/activities/${Date.now()}`,
      type: 'Follow',
      actor: this.localUser,
      object: {
        id: this.followingUrl,
        type: 'Person',
      },
      published: new Date().toISOString(),
    };

    return followActivity;
  }
}
