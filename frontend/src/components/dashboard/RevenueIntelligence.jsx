function RevenueIntelligence({ kpis }) {
  const estimatedRevenue = (
    kpis.total_customers * kpis.average_monthly_charges
  ).toFixed(2);

  const revenueAtRisk = (
    kpis.churned_customers * kpis.average_monthly_charges
  ).toFixed(2);

  return (
    <section className="mb-8 rounded-3xl bg-white p-8 shadow-lg">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        Revenue Intelligence
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-900">
        Financial Impact Overview
      </h2>

      <p className="mt-3 text-slate-500">
        Estimate revenue performance and potential revenue loss caused by churn.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Card
          title="Avg Monthly Charge"
          value={`$${kpis.average_monthly_charges}`}
          color="text-blue-600"
        />

        <Card
          title="Avg Total Charges"
          value={`$${kpis.average_total_charges}`}
          color="text-purple-600"
        />

        <Card
          title="Estimated Monthly Revenue"
          value={`$${estimatedRevenue}`}
          color="text-green-600"
        />

        <Card
          title="Revenue at Risk"
          value={`$${revenueAtRisk}`}
          color="text-red-600"
        />
      </div>
    </section>
  );
}

function Card({ title, value, color }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <p className="text-sm font-semibold text-slate-500">{title}</p>
      <h3 className={`mt-3 text-3xl font-bold ${color}`}>{value}</h3>
    </div>
  );
}

export default RevenueIntelligence;