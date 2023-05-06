import { UserProfile } from "~/types";

type Props = Pick<UserProfile, "pronouns">;

export const Pronouns = ({ pronouns }: Props) => {
  return (
    <span className="pl-2 text-base font-normal opacity-70">({pronouns})</span>
  );
};
