import pandas as pd


def username(data):
    user_name = data['USERNAME'].unique()
    useranme_df=pd.DataFrame(user_name,columns=['username'])
    return useranme_df.to_dict(orient='records')  

def usernameid(data):
    user_numid = list(data['USERNAME'].unique())
    user_numid.append("all")
    return user_numid