import { UserProfile } from "~/types";

type Props = Pick<UserProfile, "name">;

export const Name = ({ name }: Props) => {
  return <span className="text-3xl font-black">{name}</span>;
};
