function CustomerHealth({ kpis }) {
  const retained = kpis.retention_rate;
  const churn = kpis.churn_rate;

  return (
    <section className="mb-8 rounded-3xl bg-white p-8 shadow-lg">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        Customer Health
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-900">
        Retention vs Churn Overview
      </h2>

      <p className="mt-3 text-slate-500">
        A simple breakdown of retained and churned customers.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="flex items-center justify-center rounded-3xl bg-slate-50 p-8">
          <div
            className="relative h-64 w-64 rounded-full"
            style={{
              background: `conic-gradient(#22c55e 0% ${retained}%, #ef4444 ${retained}% 100%)`,
            }}
          >
            <div className="absolute inset-10 flex flex-col items-center justify-center rounded-full bg-white">
              <h3 className="text-4xl font-bold text-slate-900">
                {retained}%
              </h3>
              <p className="text-sm font-medium text-slate-500">
                Retained
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-50 p-8">
          <div className="mb-6">
            <div className="mb-2 flex justify-between">
              <span className="font-semibold text-slate-700">Retention</span>
              <span className="font-bold text-green-600">{retained}%</span>
            </div>

            <div className="h-4 rounded-full bg-slate-200">
              <div
                className="h-4 rounded-full bg-green-500"
                style={{ width: `${retained}%` }}
              />
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between">
              <span className="font-semibold text-slate-700">Churn</span>
              <span className="font-bold text-red-600">{churn}%</span>
            </div>

            <div className="h-4 rounded-full bg-slate-200">
              <div
                className="h-4 rounded-full bg-red-500"
                style={{ width: `${churn}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">

  <div className="rounded-2xl bg-white p-5 shadow-sm">
    <p className="text-sm font-medium text-slate-500">
      Total Customers
    </p>
    <h3 className="mt-2 text-4xl font-bold text-slate-900">
      {kpis.total_customers}
    </h3>
  </div>

  <div className="rounded-2xl bg-white p-5 shadow-sm">
    <p className="text-sm font-medium text-slate-500">
      Retained
    </p>
    <h3 className="mt-2 text-4xl font-bold text-green-600">
      {kpis.retained_customers}
    </h3>
  </div>

  <div className="rounded-2xl bg-white p-5 shadow-sm">
    <p className="text-sm font-medium text-slate-500">
      Churned
    </p>
    <h3 className="mt-2 text-4xl font-bold text-red-600">
      {kpis.churned_customers}
    </h3>
  </div>

  <div className="rounded-2xl bg-white p-5 shadow-sm">
    <p className="text-sm font-medium text-slate-500">
      Retention
    </p>
    <h3 className="mt-2 text-4xl font-bold text-green-600">
      {kpis.retention_rate}%
    </h3>
  </div>

  <div className="rounded-2xl bg-white p-5 shadow-sm">
    <p className="text-sm font-medium text-slate-500">
      Churn Rate
    </p>
    <h3 className="mt-2 text-4xl font-bold text-red-600">
      {kpis.churn_rate}%
    </h3>
  </div>

  <div className="rounded-2xl bg-white p-5 shadow-sm">
    <p className="text-sm font-medium text-slate-500">
      Avg Monthly Charges
    </p>
    <h3 className="mt-2 text-4xl font-bold text-blue-600">
      ${kpis.average_monthly_charges}
    </h3>
  </div>

</div>
        </div>
      </div>
    </section>
  );
}

export default CustomerHealth;