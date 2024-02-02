import axios from 'axios';

import { Person } from './entities';

export class GetRemoteUser {
  private readonly id: string;

  constructor(id: string) {
    this.id = id;
  }

  public async execute(): Promise<Person> {
    try {
      const response = await axios.get(this.id);
      // TODO: save person in local database
      return response.data as Person;
    } catch (error) {
      throw new Error(`Error sending activity: ${error}`);
    }
  }
}
