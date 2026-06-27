import useAnalytics from "./hooks/useAnalytics";

function App() {
  const { data, loading, error } = useAnalytics();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">
          Loading analysis...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-xl">

        <h1 className="text-4xl font-bold text-slate-900">
          Customer Retention Intelligence
        </h1>

        <p className="mt-3 text-slate-500">
          Backend successfully connected to React.
        </p>

        <div className="mt-10 rounded-2xl bg-blue-50 p-8">

          <p className="text-lg font-semibold text-blue-700">
            Total Customers
          </p>

          <h2 className="mt-3 text-6xl font-bold text-slate-900">
            {data.kpis.total_customers}
          </h2>

        </div>

      </div>
    </div>
  );
}

export default App;