import { Actor, Announce } from './entities';

export class CreateAnnounce {
  private readonly serverUrl: string;
  private readonly localUser: Actor;
  private readonly objectUrl: string;

  constructor(serverUrl: string, localUser: Actor, objectUrl: string) {
    this.serverUrl = serverUrl;
    this.localUser = localUser;
    this.objectUrl = objectUrl;
  }

  public execute(): Announce {
    const announceActivity: Announce = {
      id: `${this.serverUrl}/activities/${Date.now()}`,
      type: 'Announce',
      actor: this.localUser,
      object: {
        id: this.objectUrl,
        type: 'Note'
      },
      published: new Date().toISOString(),
    };

    return announceActivity;
  }
}
