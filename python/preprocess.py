import pandas as pd


def load_data(file_path):
    """
    Load the Telco Customer Churn dataset.
    """
    return pd.read_csv(file_path)


def clean_data(df):
    """
    Clean and prepare the dataset for churn analysis.
    """
    df = df.copy()

    df["TotalCharges"] = pd.to_numeric(df["TotalCharges"], errors="coerce")
    df = df.dropna(subset=["TotalCharges"])

    df["SeniorCitizen"] = df["SeniorCitizen"].map({
        0: "No",
        1: "Yes"
    })

    df["TenureGroup"] = pd.cut(
        df["tenure"],
        bins=[0, 12, 24, 48, 72],
        labels=[
            "0-12 Months",
            "13-24 Months",
            "25-48 Months",
            "49-72 Months"
        ],
        include_lowest=True
    )

    return df


def save_cleaned_data(df, output_path):
    """
    Save cleaned dataset.
    """
    df.to_csv(output_path, index=False)