import { UserProfile } from "~/types";
import { FaGithub, FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";

type Props = {
  service: keyof UserProfile["socials"];
  href: string;
};

export const SocialButton = ({ service, href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="btn-ghost btn-circle btn"
    >
      {SocialIconMap[service]}
    </a>
  );
};

const SocialIconMap: Record<keyof UserProfile["socials"], JSX.Element> = {
  github: <FaGithub size={24} />,
  twitter: <FaTwitter size={24} />,
  linkedin: <FaLinkedin size={24} />,
  website: <FaGlobe size={24} />,
};
