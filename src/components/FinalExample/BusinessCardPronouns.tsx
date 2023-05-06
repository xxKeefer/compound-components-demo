import { useBusinessCard } from "./BusinessCardContext";

export const BusinessCardPronouns = () => {
  const { user } = useBusinessCard();

  return (
    <span className="pl-2 text-base font-normal opacity-70">
      ({user.pronouns})
    </span>
  );
};
