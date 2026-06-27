function CustomerBehaviour({ data }) {
  const sections = [
    {
      title: "Contract Types",
      dataset: data.contract_risk,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Internet Services",
      dataset: data.internet_risk,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Payment Methods",
      dataset: data.payment_risk,
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Customer Tenure",
      dataset: data.tenure_risk,
      color: "bg-orange-100 text-orange-700",
    },
  ];

  return (
    <section className="mb-8 rounded-3xl bg-white p-8 shadow-lg">

      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        Behaviour Analytics
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-900">
        Customer Behaviour Analytics
      </h2>

      <p className="mt-3 text-slate-500">
        Compare churn percentages across major customer segments.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">

        {sections.map((section) => (

          <div
            key={section.title}
            className="rounded-2xl border border-slate-200 p-6"
          >

            <h3 className="mb-5 text-xl font-bold text-slate-900">
              {section.title}
            </h3>

            <div className="space-y-4">

              {section.dataset.map((item, index) => {

                const label =
                  Object.keys(item).find(
                    (key) => key !== "churn_rate"
                  );

                return (

                  <div key={index}>

                    <div className="mb-2 flex justify-between">

                      <span className="font-medium text-slate-700">
                        {item[label]}
                      </span>

                      <span className="font-bold text-red-600">
                        {item.churn_rate}%
                      </span>

                    </div>

                    <div className="h-3 rounded-full bg-slate-200">

                      <div
                        className="h-3 rounded-full bg-blue-600"
                        style={{
                          width: `${item.churn_rate}%`,
                        }}
                      />

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default CustomerBehaviour;