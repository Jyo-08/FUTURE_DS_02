function DatasetExplorer({ rows }) {
  const columns = [
    "customerID",
    "gender",
    "SeniorCitizen",
    "tenure",
    "Contract",
    "PaymentMethod",
    "MonthlyCharges",
    "Churn",
  ];

  function DatasetExplorer({ rows = [] }) {
  if (!rows.length) return null;

  const columns = Object.keys(rows[0]).slice(0, 8);

  return (
    <section className="mb-8 rounded-3xl bg-white p-8 shadow-lg">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        Dataset Explorer
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-900">
        Source Customer Records
      </h2>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full text-left">
          <thead className="bg-slate-100">
            <tr>
              {columns.map((col) => (
                <th key={col} className="px-5 py-4 text-sm font-bold text-slate-700">
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.slice(0, 10).map((row, index) => (
              <tr key={index} className="border-t border-slate-200 hover:bg-blue-50">
                {columns.map((col) => (
                  <td key={col} className="px-5 py-4 text-sm text-slate-600">
                    {String(row[col] ?? "-")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default DatasetExplorer;
}
