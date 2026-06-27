import useAnalytics from "./hooks/useAnalytics";
import Navbar from "./components/layout/Navbar";

function App() {
  const { data, loading, error } = useAnalytics();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-7xl">
        <Navbar />

        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-5xl font-bold text-blue-600">
            {data.kpis.total_customers}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;