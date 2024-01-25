
import './App.css';
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css"
import "fontawesome"
function App() {
  const data = [
    {
      plan: "FREE",
      price: "$0/month",
      user: "Single User",
      highlight: false,
      userEnabler: true,
      storage: "5GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: false,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: false,
      subDomain: "Free Subdomain",
      subDomainEnabler: false,
      subDomainHighlight: false,
      statusPlan: "Monthly Status Reports",
      statusPlanEnabler: false,
    },
    {
      plan: "PLUS",
      price: "$9/month",
      user: "5 User",
      highlight: false,
      userEnabler: true,
      storage: "50GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: true,
      subDomain: "Free Subdomain",
      subDomainEnabler: true,
      subDomainHighlight: false,
      statusPlan: "Monthly Status Reports",
      statusPlanEnabler: false,
    },
    {
      plan: "PRO",
      price: "$49/month",
      user: "Unlimited User",
      highlight: false,
      userEnabler: true,
      storage: "150GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: true,
      subDomain: "Unlimited Free Subdomain",
      subDomainEnabler: false,
      subDomainHighlight: true,
      statusPlan: "Monthly Status Reports",
      statusPlanEnabler: true,
    },
  ];
  return (
    
    <>
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
        {/* Approach1  */}
          <Card value={data[0]} />
          <Card value={data[1]} />
          <Card value={data[2]} />

        
        </div>
      </div>
    </section>
  </>
);
}

export default App;