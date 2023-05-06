import { ReactNode } from "react";
import { UserProfile } from "~/types";
import BusinessCardProvider from "./BusinessCardContext";
import { BusinessCardBanner } from "./BusinessCardBanner";
import { BusinessCardSocials } from "./BusinessCardSocials";
import { BusinessCardName } from "./BusinessCardName";
import { BusinessCardPronouns } from "./BusinessCardPronouns";
import { BusinessCardTagline } from "./BusinessCardTagline";
import { BusinessCardLocation } from "./BusinessCardLocation";

type Props = {
  user: UserProfile;
  children: ReactNode;
};

const BusinessCard = ({ user, children }: Props) => {
  return (
    <BusinessCardProvider value={{ user }}>
      <div className="card w-96 overflow-hidden bg-slate-50 shadow-xl">
        {children}
      </div>
    </BusinessCardProvider>
  );
};

BusinessCard.Banner = BusinessCardBanner;
BusinessCard.Socials = BusinessCardSocials;
BusinessCard.Name = BusinessCardName;
BusinessCard.Pronouns = BusinessCardPronouns;
BusinessCard.Tagline = BusinessCardTagline;
BusinessCard.Location = BusinessCardLocation;

export default BusinessCard;
