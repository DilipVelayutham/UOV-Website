
import Hero from "../components/Home/Hero";
import AboutSnapshot from "../components/Home/AboutSnapshot";
import AnnouncementBanner from "../components/Home/AnnouncementBanner";
import WhyJoinUOV from "../components/Home/WhyJoinUOV";
import MembershipCategories from "../components/Home/MembershipCategories";
import JoinMission from "../components/Home/JoinMission";
import ImpactStats from "../components/Home/ImpactStats";
import OurPlannedInitiatives from "../components/Home/OurPlannedInitiatives";


function Home() {
  return (
    <>
        <Hero />
        <AnnouncementBanner />
        <AboutSnapshot /> 
        <ImpactStats />
        <OurPlannedInitiatives />
        <WhyJoinUOV />
        <MembershipCategories />
        <JoinMission />
    </>
  );
}

export default Home;