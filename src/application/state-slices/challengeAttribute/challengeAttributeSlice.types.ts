export interface ChallengeAttribute {
  id: string;
  name: string;
  points: number;
}

export type ChallengeAttributeState = {
  challengeAttributeToUpdate: ChallengeAttribute;
};
