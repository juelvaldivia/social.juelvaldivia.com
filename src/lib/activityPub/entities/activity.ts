import { ActivityPubObject } from './activityPubObject';
import { Actor } from './actor';

export interface Activity extends ActivityPubObject {
  actor: Actor;
  object: ActivityPubObject;
  published: string;
  to?: Actor[];
  cc?: Actor[];
}
