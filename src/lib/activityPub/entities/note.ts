import { ActivityPubObject } from './activityPubObject';

export interface Note extends ActivityPubObject {
  content: string;
  type: 'Note'
}
