import { UserProfile } from "~/types";

export const useUserActions = (user: UserProfile) => {
  const onConnect = () => console.log(`${user.name} added to network`);
  const onMessage = () => console.log(`opening chat window with ${user.name}`);

  return { onConnect, onMessage };
};
