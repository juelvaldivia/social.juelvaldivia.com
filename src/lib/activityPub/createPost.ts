import { Actor, Create, Note } from './entities';

export class CreatePost {
  private readonly serverUrl: string;
  private readonly localUser: Actor;
  private readonly content: string;
  private readonly to?: Array<Actor>;
  private readonly cc?: Array<Actor>;

  constructor(
    serverUrl: string,
    localUser: Actor,
    content: string,
    to?: Array<Actor>,
    cc?: Array<Actor>
  ) {
    this.serverUrl = serverUrl;
    this.localUser = localUser;
    this.content = content;
    this.to = to;
    this.cc = cc;
  }

  public execute(): Create {
    const note: Note = {
      id: `${this.serverUrl}/notes/${Date.now()}`,
      type: 'Note',
      content: this.content,
    };

    const createActivity: Create = {
      id: `${this.serverUrl}/activities/${Date.now()}`,
      type: 'Create',
      actor: this.localUser,
      object: note,
      published: new Date().toISOString(),
      to: this.to,
      cc: this.cc,
    };

    return createActivity;
  }
}
