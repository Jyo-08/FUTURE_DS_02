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

          <p className="mt-8 leading-7 text-slate-600">
            The business retains most customers, but the churn percentage still
            shows a meaningful risk. Retention strategies should focus on
            customers with short tenure, month-to-month contracts, and higher
            monthly charges.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CustomerHealth;