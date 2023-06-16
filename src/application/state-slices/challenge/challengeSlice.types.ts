export interface Challenge {
  id: string;
  title: string;
  description: string;
}

export type ChallengeState = {
  challengeToUpdate: Challenge;
};
