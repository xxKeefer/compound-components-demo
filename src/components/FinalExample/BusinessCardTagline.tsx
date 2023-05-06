import { useBusinessCard } from "./BusinessCardContext";

export const BusinessCardTagline = () => {
  const { user } = useBusinessCard();

  return <p>{user.tagline}</p>;
};
