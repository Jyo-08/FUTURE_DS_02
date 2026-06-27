function BusinessIntelligence({ summary, recommendations }) {
  return (
    <section className="mb-8 rounded-3xl bg-white p-8 shadow-lg">

      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        Business Intelligence
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-900">
        AI Executive Insights
      </h2>

      <p className="mt-3 text-slate-500">
        Key observations and recommended business actions generated from the
        customer churn analysis.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">

        {/* Executive Summary */}

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

          <h3 className="text-xl font-bold text-slate-900">
            Executive Summary
          </h3>

          <div className="mt-6 space-y-4">

            {summary.map((item, index) => (

              <div
                key={index}
                className="flex items-start gap-3 rounded-xl bg-white p-4"
              >

                <span className="text-2xl">
                  📊
                </span>

                <p className="leading-7 text-slate-700">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Recommendations */}

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

          <h3 className="text-xl font-bold text-slate-900">
            Business Recommendations
          </h3>

          <div className="mt-6 space-y-4">

            {recommendations.map((item, index) => (

              <div
                key={index}
                className="flex items-start gap-3 rounded-xl bg-white p-4"
              >

                <span className="text-2xl">
                  🚀
                </span>

                <p className="leading-7 text-slate-700">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default BusinessIntelligence;