const cards = [
  {
    title: "Total Customers",
    valueKey: "total_customers",
    emoji: "👥",
    bg: "bg-blue-50",
    text: "text-blue-700",
  },
  {
    title: "Retained Customers",
    valueKey: "retained_customers",
    emoji: "✅",
    bg: "bg-green-50",
    text: "text-green-700",
  },
  {
    title: "Churned Customers",
    valueKey: "churned_customers",
    emoji: "❌",
    bg: "bg-red-50",
    text: "text-red-700",
  },
  {
    title: "Churn Rate",
    valueKey: "churn_rate",
    suffix: "%",
    emoji: "📉",
    bg: "bg-red-50",
    text: "text-red-700",
  },
  {
    title: "Avg Tenure",
    valueKey: "average_tenure",
    suffix: " mo",
    emoji: "⏳",
    bg: "bg-yellow-50",
    text: "text-yellow-700",
  },
  {
    title: "Avg Monthly Charge",
    valueKey: "average_monthly_charges",
    prefix: "$",
    emoji: "💰",
    bg: "bg-purple-50",
    text: "text-purple-700",
  },
];

function KPICards({ kpis }) {
  return (
    <section className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className={`mb-5 inline-flex rounded-2xl ${card.bg} p-4 text-3xl`}>
            {card.emoji}
          </div>

          <p className="text-sm font-semibold text-slate-500">
            {card.title}
          </p>

          <h3 className={`mt-3 text-3xl font-bold ${card.text}`}>
            {card.prefix || ""}
            {kpis[card.valueKey]}
            {card.suffix || ""}
          </h3>
        </div>
      ))}
    </section>
  );
}

export default KPICards;