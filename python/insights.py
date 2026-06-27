from utils import calculate_percentage, round_value, to_records


def calculate_kpis(df):
    total_customers = len(df)
    churned_customers = len(df[df["Churn"] == "Yes"])
    retained_customers = len(df[df["Churn"] == "No"])

    return {
        "total_customers": total_customers,
        "churned_customers": churned_customers,
        "retained_customers": retained_customers,
        "churn_rate": calculate_percentage(churned_customers, total_customers),
        "retention_rate": calculate_percentage(retained_customers, total_customers),
        "average_tenure": round_value(df["tenure"].mean()),
        "average_monthly_charges": round_value(df["MonthlyCharges"].mean()),
        "average_total_charges": round_value(df["TotalCharges"].mean()),
    }


def churn_distribution(df):
    result = df["Churn"].value_counts().reset_index()
    result.columns = ["status", "count"]
    return to_records(result)


def churn_by_column(df, column):
    result = (
        df.groupby([column, "Churn"], observed=True)
        .size()
        .reset_index(name="count")
    )
    return to_records(result)


def churn_rate_by_column(df, column):
    result = (
        df.groupby(column, observed=True)["Churn"]
        .apply(lambda x: (x == "Yes").mean() * 100)
        .reset_index(name="churn_rate")
    )
    result["churn_rate"] = result["churn_rate"].round(2)
    return to_records(result)


def monthly_charges_by_churn(df):
    result = df.groupby("Churn")["MonthlyCharges"].mean().reset_index()
    result["MonthlyCharges"] = result["MonthlyCharges"].round(2)
    return to_records(result)


def lifetime_by_churn(df):
    result = df.groupby("Churn")["tenure"].mean().reset_index()
    result["tenure"] = result["tenure"].round(2)
    return to_records(result)


def generate_executive_summary():
    return [
        "Customer churn analysis helps identify customers who are likely to leave the business.",
        "Month-to-month contract customers show higher churn risk compared to long-term contract customers.",
        "Short-tenure customers need stronger onboarding and early retention support.",
        "Payment method and monthly charges are important indicators of churn behavior.",
        "Retention strategies should focus on high-risk customer segments to reduce revenue loss.",
    ]


def generate_recommendations():
    return [
        "Encourage month-to-month customers to move to one-year or two-year contracts.",
        "Offer onboarding support and loyalty benefits to customers in their first 12 months.",
        "Investigate electronic check payment friction and improve payment experience.",
        "Create targeted retention offers for customers with high monthly charges.",
        "Promote bundled services and long-term plans to increase customer lifetime value.",
    ]