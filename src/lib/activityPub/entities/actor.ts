import { ActivityPubObject } from './activityPubObject';

export interface Actor extends ActivityPubObject {
  name?: string;
  preferredUsername: string;
  summary?: string;
  inbox: string;
  outbox: string;
  followers: string;
  following: string;
}
