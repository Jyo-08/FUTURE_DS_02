import useAnalytics from "./hooks/useAnalytics";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/dashboard/HeroSection";
import KPICards from "./components/dashboard/KPICards";
import CustomerHealth from "./components/dashboard/CustomerHealth";
import CustomerBehaviour from "./components/dashboard/CustomerBehaviour";
import RevenueIntelligence from "./components/dashboard/RevenueIntelligence";
import BusinessIntelligence from "./components/dashboard/BusinessIntelligence";
import DatasetExplorer from "./components/dashboard/DatasetExplorer";
import Footer from "./components/Footer";

function App() {
  const { data, loading, error } = useAnalytics();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-7xl">
        <Navbar />
        <HeroSection kpis={data.kpis} />
        <KPICards kpis={data.kpis} />
        <CustomerHealth kpis={data.kpis} />
        <CustomerBehaviour
        data={data.risk_segments}
        />
        <RevenueIntelligence kpis={data.kpis} />
        <BusinessIntelligence
          summary={data.executive_summary}
          recommendations={data.recommendations}
        />
        <DatasetExplorer rows={data.dataset_preview} />
        <Footer />
      </div>
    </div>
  );
}

export default App;