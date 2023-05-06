import { UserProfile } from "~/types";

type Props = Pick<UserProfile, "tagline">;

export const Tagline = ({ tagline }: Props) => {
  return <p>{tagline}</p>;
};
