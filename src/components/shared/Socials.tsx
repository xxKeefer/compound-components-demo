import { UserProfile } from "~/types";
import { SocialButton } from "./SocialButton";

type Props = {
  socials: UserProfile["socials"];
};

export const Socials = ({ socials }: Props) => {
  return (
    <div className="flex w-full justify-center gap-1">
      {Object.entries(socials).map(([service, href]) => (
        <SocialButton
          href={href}
          service={service as keyof UserProfile["socials"]}
          key={service}
        />
      ))}
    </div>
  );
};
