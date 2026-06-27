import json
from pathlib import Path

from preprocess import (
    load_data,
    clean_data,
    save_cleaned_data,
)

from insights import (
    calculate_kpis,
    churn_distribution,
    churn_by_column,
    churn_rate_by_column,
    monthly_charges_by_churn,
    lifetime_by_churn,
    generate_executive_summary,
    generate_recommendations,
)


BASE_DIR = Path(__file__).resolve().parent
ROOT_DIR = BASE_DIR.parent

DATASET_PATH = ROOT_DIR / "Dataset" / "Telco-Customer-Churn.csv"
OUTPUT_DIR = ROOT_DIR / "output"
FRONTEND_PUBLIC = ROOT_DIR / "frontend" / "public"

CLEANED_DATA_PATH = OUTPUT_DIR / "cleaned_data.csv"
JSON_OUTPUT_PATH = FRONTEND_PUBLIC / "analysis.json"


def main():
    # Create output folders if they don't exist
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    FRONTEND_PUBLIC.mkdir(parents=True, exist_ok=True)

    # Load & clean dataset
    df = load_data(DATASET_PATH)
    cleaned_df = clean_data(df)

    # Save cleaned dataset
    save_cleaned_data(cleaned_df, CLEANED_DATA_PATH)

    # Build analysis JSON
    analysis_data = {
        "kpis": calculate_kpis(cleaned_df),

        "charts": {
            "churn_distribution": churn_distribution(cleaned_df),
            "contract_churn": churn_by_column(cleaned_df, "Contract"),
            "internet_churn": churn_by_column(cleaned_df, "InternetService"),
            "payment_churn": churn_by_column(cleaned_df, "PaymentMethod"),
            "tenure_churn": churn_by_column(cleaned_df, "TenureGroup"),
            "gender_churn": churn_by_column(cleaned_df, "gender"),
            "senior_citizen_churn": churn_by_column(
                cleaned_df,
                "SeniorCitizen",
            ),
            "monthly_charges_by_churn": monthly_charges_by_churn(cleaned_df),
            "lifetime_by_churn": lifetime_by_churn(cleaned_df),
        },

        "risk_segments": {
            "contract_risk": churn_rate_by_column(
                cleaned_df,
                "Contract",
            ),
            "internet_risk": churn_rate_by_column(
                cleaned_df,
                "InternetService",
            ),
            "payment_risk": churn_rate_by_column(
                cleaned_df,
                "PaymentMethod",
            ),
            "tenure_risk": churn_rate_by_column(
                cleaned_df,
                "TenureGroup",
            ),
        },

        "executive_summary": generate_executive_summary(),

        "recommendations": generate_recommendations(),

        "dataset_preview": cleaned_df.head(20).to_dict(
            orient="records"
        ),
    }

    with open(JSON_OUTPUT_PATH, "w") as file:
        json.dump(analysis_data, file, indent=4)

    print("\n✅ Analysis completed successfully!")
    print(f"Cleaned CSV : {CLEANED_DATA_PATH}")
    print(f"JSON Output : {JSON_OUTPUT_PATH}")


if __name__ == "__main__":
    main()