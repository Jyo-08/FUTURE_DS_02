def calculate_percentage(part, whole):
    """
    Calculate percentage safely.
    """
    if whole == 0:
        return 0.0
    return round((part / whole) * 100, 2)


def round_value(value, decimals=2):
    """
    Round numeric values safely.
    """
    try:
        return round(float(value), decimals)
    except (TypeError, ValueError):
        return value


def to_records(df):
    """
    Convert dataframe to JSON-friendly records.
    """
    return df.to_dict(orient="records")