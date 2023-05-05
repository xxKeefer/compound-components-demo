import { UserProfile } from "~/types";
import { FaGithub, FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";

type Props = {
  socials: UserProfile["socials"];
};

const SocialIconMap: Record<keyof UserProfile["socials"], JSX.Element> = {
  github: <FaGithub size={24} />,
  twitter: <FaTwitter size={24} />,
  linkedin: <FaLinkedin size={24} />,
  website: <FaGlobe size={24} />,
};

export const SocialButtons = ({ socials }: Props) => {
  return (
    <div className="flex w-full justify-center gap-1">
      {Object.entries(socials).map(([key, value]) => (
        <a
          href={value}
          target="_blank"
          rel="noopener"
          className="btn-ghost btn-circle btn"
          key={key}
        >
          {SocialIconMap[key as keyof UserProfile["socials"]]}
        </a>
      ))}
    </div>
  );
};
