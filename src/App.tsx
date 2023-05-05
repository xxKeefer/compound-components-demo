import {
  Container,
  InitialBusinessCard,
  BloatedBusinessCard,
} from "./components";
import { UserProfile } from "./types";

const user: UserProfile = {
  image: "/wizard.jpeg",
  bgImage: "/background.jpeg",
  name: "Daniel Keefer",
  location: "Redbank Plains, Queensland, Australia",
  tagline: "Web Wizard 🧙‍♂️ ✨ and Certified Software Sorcerer",
  pronouns: "he/him",
  socials: {
    github: "https://github.com/xxKeefer",
    twitter: "https://twitter.com/xxKeefer",
    linkedin: "https://www.linkedin.com/in/xxkeefer/",
    website: "https://keefer.au/",
  },
};

function App() {
  return (
    <Container>
      {/* <InitialBusinessCard
        bgImage={user.bgImage}
        image={user.image}
        location={user.location}
        name={user.name}
        pronouns={user.pronouns}
        tagline={user.tagline}
        socials={user.socials}
      /> */}
      <BloatedBusinessCard
        bgImage={user.bgImage}
        image={user.image}
        location={user.location}
        name={user.name}
        pronouns={user.pronouns}
        tagline={user.tagline}
        socials={user.socials}
        hideSocials
        hideImages
      />
    </Container>
  );
}

export default App;
