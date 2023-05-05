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
};

export const InitialBusinessCard = ({
  bgImage,
  image,
  location,
  name,
  pronouns,
  socials,
  tagline,
}: Props) => {
  return (
    <div className="card w-96 overflow-hidden bg-slate-50 shadow-xl">
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
      <SocialButtons socials={socials} />
      <div className="card-body p-4">
        <h2 className="text-3xl font-black">
          {name}
          <span className="pl-2 text-base font-normal opacity-70">
            ({pronouns})
          </span>
        </h2>
        <p>{tagline}</p>
        <p className=" text-sm opacity-70">{location}</p>
        <div className="card-actions flex-nowrap pt-4">
          <button className="btn-primary btn grow">Connect</button>
          <button className="btn-secondary  btn grow">Message</button>
        </div>
      </div>
    </div>
  );
};
