import { useBusinessCard } from "./BusinessCardContext";

export const BusinessCardName = () => {
  const { user } = useBusinessCard();
  return <span className="text-3xl font-black">{user.name}</span>;
};
