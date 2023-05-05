import { UserProfile } from "~/types";
import { SocialButtons } from "../SocialButtons";

type Props = {
  image: string;
  bgImage: string;
  name: string;
  location: string;
  tagline: string;
  pronouns: string;
  socials: UserProfile["socials"];
  hideImages?: boolean;
  hideName?: boolean;
  hideLocation?: boolean;
  hideTagline?: boolean;
  hidePronouns?: boolean;
  hideSocials?: boolean;
};

export const BloatedBusinessCard = ({
  bgImage,
  image,
  location,
  name,
  pronouns,
  socials,
  tagline,
  hideImages = false,
  hideName = false,
  hideLocation = false,
  hideTagline = false,
  hidePronouns = false,
  hideSocials = false,
}: Props) => {
  return (
    <div className="card w-96 overflow-hidden bg-slate-50 shadow-xl">
      {!hideImages && (
        <div className="relative mb-[100px] h-36 w-full">
          <img
            className="h-full w-full object-cover"
            src={bgImage}
            alt="background image"
          />

          <img
            className="absolute left-1/4 top-1/4 h-[200px] rounded-full bg-slate-50 ring-8 ring-slate-50 ring-offset-slate-50"
            src={image}
            alt="profile picture"
          />
        </div>
      )}
      {!hideSocials && <SocialButtons socials={socials} />}
      <div className="card-body p-4">
        {!hideName && (
          <h2 className="text-3xl font-black">
            {name}
            {!hidePronouns && (
              <span className="pl-2 text-base font-normal opacity-70">
                ({pronouns})
              </span>
            )}
          </h2>
        )}
        {!hideTagline && <p>{tagline}</p>}
        {!hideLocation && <p className=" text-sm opacity-70">{location}</p>}

        <div className="card-actions flex-nowrap pt-4">
          <button className="btn-primary btn grow">Connect</button>
          <button className="btn-secondary  btn grow">Message</button>
        </div>
      </div>
    </div>
  );
};
