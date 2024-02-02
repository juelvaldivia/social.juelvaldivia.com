import { Person } from './entities';

export class GetLocalUser {
  private readonly serverUrl: string;
  private readonly prefix: string;
  private readonly username: string;

  constructor(serverUrl: string, username: string, prefix: string = '@') {
    this.serverUrl = serverUrl;
    this.prefix = prefix;
    this.username = username;
  }

  public execute(): Person {
    const person: Person = {
      id: `${this.serverUrl}/${this.prefix}${this.username}`,
      type: 'Person',
      preferredUsername: `${this.username}`,
      inbox: `${this.serverUrl}/${this.prefix}${this.username}/inbox`,
      outbox: `${this.serverUrl}/${this.prefix}${this.username}/outbox`,
      followers: `${this.serverUrl}/${this.prefix}${this.username}/followers`,
      following: `${this.serverUrl}/${this.prefix}${this.username}/following`,
    };

    return person;
  }
}
