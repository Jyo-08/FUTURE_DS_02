import useAnalytics from "./hooks/useAnalytics";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/dashboard/HeroSection";

function App() {
  const { data, loading, error } = useAnalytics();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-7xl">
        <Navbar />
        <HeroSection kpis={data.kpis} />
      </div>
    </div>
  );
}

export default App;