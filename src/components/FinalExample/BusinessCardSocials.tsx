import { UserProfile } from "~/types";
import { SocialButton } from "./SocialButton";
import { useBusinessCard } from "./BusinessCardContext";

export const BusinessCardSocials = () => {
  const { user } = useBusinessCard();

  return (
    <div className="flex w-full justify-center gap-1">
      {Object.entries(user.socials).map(([service, href]) => (
        <SocialButton
          href={href}
          service={service as keyof UserProfile["socials"]}
          key={service}
        />
      ))}
    </div>
  );
};
