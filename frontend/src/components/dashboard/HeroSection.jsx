function HeroSection({ kpis }) {
  return (
    <section className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-10 text-white shadow-xl">

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
        Customer Intelligence Dashboard
      </p>

      <h2 className="mt-4 text-5xl font-bold">
        Customer Retention Intelligence
      </h2>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
        Understand customer churn, identify business risks, and make
        data-driven decisions using Python-powered analytics and an
        interactive React dashboard.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
          <p className="text-sm text-blue-100">Customers</p>
          <h3 className="mt-2 text-4xl font-bold">
            {kpis.total_customers}
          </h3>
        </div>

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
          <p className="text-sm text-blue-100">Retention</p>
          <h3 className="mt-2 text-4xl font-bold">
            {kpis.retention_rate}%
          </h3>
        </div>

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
          <p className="text-sm text-blue-100">Churn Rate</p>
          <h3 className="mt-2 text-4xl font-bold">
            {kpis.churn_rate}%
          </h3>
        </div>

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
          <p className="text-sm text-blue-100">Avg Tenure</p>
          <h3 className="mt-2 text-4xl font-bold">
            {kpis.average_tenure}
          </h3>
        </div>

      </div>

    </section>
  );
}

export default HeroSection;