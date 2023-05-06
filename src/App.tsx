import { Container } from "./components";
import { useUserActions } from "./hooks/useUserActions";
import { UserProfile } from "./types";
// import { BusinessCard } from "./components/ExampleOne/BusinessCard";
// import { BusinessCard } from "./components/ExampleTwo/BusinessCard";
import { default as BusinessCard } from "./components/FinalExample/BusinessCard";

const { Banner, Location, Name, Pronouns, Socials, Tagline } = BusinessCard;

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
      <BusinessCard user={user}>
        <Banner />
        <Socials />
        <div className="card-body p-4">
          <h2>
            <Name />
            <Pronouns />
          </h2>
          <Tagline />
          <Location />
          <div className="card-actions flex-nowrap pt-4">
            <button className="btn-primary btn grow" onClick={onConnect}>
              Connect
            </button>
            <button className="btn-secondary  btn grow" onClick={onMessage}>
              Message
            </button>
          </div>
        </div>
      </BusinessCard>
    </Container>
  );
}

export default App;
