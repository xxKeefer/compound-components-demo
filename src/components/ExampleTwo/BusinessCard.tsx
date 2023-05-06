import { UserProfile } from "~/types";

import { Banner, Location, Name, Pronouns, Socials, Tagline } from "../shared";

import { useUserActions } from "~/hooks/useUserActions";

type Props = {
  image: string;
  bgImage: string;
  name: string;
  location: string;
  tagline: string;
  pronouns: string;
  socials: UserProfile["socials"];
  onConnect?: ReturnType<typeof useUserActions>["onConnect"];
  onMessage?: ReturnType<typeof useUserActions>["onMessage"];
  hideImages?: boolean;
  hideName?: boolean;
  hideLocation?: boolean;
  hideTagline?: boolean;
  hidePronouns?: boolean;
  hideSocials?: boolean;
  hideActions?: boolean;
};

export const BusinessCard = ({
  bgImage,
  image,
  location,
  name,
  pronouns,
  socials,
  tagline,
  onConnect,
  onMessage,
  hideImages = false,
  hideName = false,
  hideLocation = false,
  hideTagline = false,
  hidePronouns = false,
  hideSocials = false,
  hideActions = false,
}: Props) => {
  return (
    <div className="card w-96 overflow-hidden bg-slate-50 shadow-xl">
      {!hideImages && <Banner bgImage={bgImage} image={image} />}
      {!hideSocials && <Socials socials={socials} />}
      <div className="card-body p-4">
        {!hideName && (
          <h2>
            <Name name={name} />
            {!hidePronouns && <Pronouns pronouns={pronouns} />}
          </h2>
        )}
        {!hideTagline && <Tagline tagline={tagline} />}
        {!hideLocation && <Location location={location} />}
        {!hideActions && (
          <div className="card-actions flex-nowrap pt-4">
            <button className="btn-primary btn grow" onClick={onConnect}>
              Connect
            </button>
            <button className="btn-secondary  btn grow" onClick={onMessage}>
              Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
