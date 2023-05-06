import { UserProfile } from "~/types";

import { Banner, Location, Tagline, Name, Pronouns, Socials } from "../shared";

import { useUserActions } from "~/hooks/useUserActions";

type Props = {
  image: string;
  bgImage: string;
  name: string;
  location: string;
  tagline: string;
  pronouns: string;
  socials: UserProfile["socials"];
  onConnect: ReturnType<typeof useUserActions>["onConnect"];
  onMessage: ReturnType<typeof useUserActions>["onMessage"];
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
}: Props) => {
  return (
    <div className="card w-96 overflow-hidden bg-slate-50 shadow-xl">
      <Banner bgImage={bgImage} image={image} />
      <Socials socials={socials} />
      <div className="card-body p-4">
        <h2>
          <Name name={name} />
          <Pronouns pronouns={pronouns} />
        </h2>
        <Tagline tagline={tagline} />
        <Location location={location} />
        <div className="card-actions flex-nowrap pt-4">
          <button className="btn-primary btn grow" onClick={onConnect}>
            Connect
          </button>
          <button className="btn-secondary  btn grow" onClick={onMessage}>
            Message
          </button>
        </div>
      </div>
    </div>
  );
};
