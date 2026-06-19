import TrusteesHero from "../components/Trustees/TrusteesHero";
import LeadershipMessage from "../components/Trustees/LeadershipMessage";
import ManagementBoard from "../components/Trustees/ManagementBoard";
import LeadershipPhilosophy from "../components/Trustees/LeadershipPhilosophy";
import LeadershipTimeline from "../components/Trustees/LeadershipTimeline";
import JoinMission from "../components/Home/JoinMission";

function Trustee() {
  return (
    <>
      <TrusteesHero />
      <LeadershipMessage />
      <LeadershipPhilosophy />
      <ManagementBoard />
      <LeadershipTimeline />
      <JoinMission />
    </>
  );
}

export default Trustee;