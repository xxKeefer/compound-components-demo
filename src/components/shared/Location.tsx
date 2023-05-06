import { UserProfile } from "~/types";

type Props = Pick<UserProfile, "location">;

export const Location = ({ location }: Props) => {
  return <p className=" text-sm opacity-70">{location}</p>;
};
