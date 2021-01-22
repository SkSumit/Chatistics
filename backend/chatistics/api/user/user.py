import pandas as pd


def username(data):
    user_name = data['USERNAME'].unique()
    useranme_df=pd.DataFrame(user_name,columns=['username'])
    return useranme_df.to_dict(orient='records')  