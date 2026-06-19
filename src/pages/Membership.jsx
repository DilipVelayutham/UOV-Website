import MembershipHero from "../components/Membership/MembershipHero";
import WhyBecomeMember from "../components/Membership/WhyBecomeMember";
import MembershipCategories from "../components/Membership/MembershipCategories";
import MemberBenefits from "../components/Membership/MembershipBenefits";
import MembershipProcess from "../components/Membership/MembershipProcess";
import ApplyMembership from "../components/Membership/ApplyMembership";

function Membership() {
  return (
    <>
      <MembershipHero />
      <WhyBecomeMember />
      <MembershipCategories />
      <MemberBenefits />
      <MembershipProcess />
      <ApplyMembership />
    </>
  );
}

export default Membership;