import { useBusinessCard } from "./BusinessCardContext";

export const BusinessCardLocation = () => {
  const { user } = useBusinessCard();
  return <p className="text-sm opacity-70">{user.location}</p>;
};
