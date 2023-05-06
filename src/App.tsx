import { Container } from "./components";
import { useUserActions } from "./hooks/useUserActions";
import { UserProfile } from "./types";
import { BusinessCard } from "./components/ExampleOne/BusinessCard";
// import { BusinessCard } from "./components/ExampleTwo/BusinessCard";
// import { default as BusinessCard } from "./components/FinalExample/BusinessCard";

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
  const { onConnect, onMessage } = useUserActions(user);
  return (
    <Container>
      <BusinessCard
        bgImage={user.bgImage}
        image={user.image}
        location={user.location}
        name={user.name}
        pronouns={user.pronouns}
        tagline={user.tagline}
        socials={user.socials}
        onConnect={onConnect}
        onMessage={onMessage}
      />
    </Container>
  );
}

export default App;
