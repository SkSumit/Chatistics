import pandas as pd


def dataframe(content):
    column_names = ["DATE","TIME","USER NAME","MESSAGE"]
    df = pd.DataFrame(columns = column_names)
    for i in range(len(content)):
        df['DATE'][i] = str(content[i].split(","))
        # df['TIME'][i] = content[i][8:16]
        # df['NAME'][i] = content[i][20:":"]
        # df['MESSAGE'][i] = content[i][":":]
    return df
