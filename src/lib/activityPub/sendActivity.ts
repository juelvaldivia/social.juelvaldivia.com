import axios from 'axios';

import { Activity, Actor } from './entities';

export class SendActivity {
  private readonly serverUrl: string;
  private readonly activity: Activity;
  private readonly receivers: Array<Actor>;

  constructor(serverUrl: string, activity: Activity) {
    this.serverUrl = serverUrl;
    this.activity = activity;
    this.receivers = this.getRemoteReceivers();
  }

  public execute() {
    this.receivers.map(async (recipient: Actor) => {
      if (!recipient.inbox.includes(this.serverUrl)) {
        try {
          // TODO: save activity to send in local database

          await axios.post(recipient.inbox, this.activity);
        } catch (error) {
          throw new Error(`Error sending activity: ${error}`);
        }
      }
    });
  }

  private getRemoteReceivers(): Array<Actor> {
    const recipients: Array<Actor> = this.activity.to || [];
    const copies: Array<Actor> = this.activity.cc || [];

    return recipients.concat(copies);
  }
}
