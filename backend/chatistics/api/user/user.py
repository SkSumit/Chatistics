import pandas as pd
import numpy as np


def username(data):
    user_name = data[data['MESSAGE'] != '']['USERNAME'].unique()
    useranme_df=pd.DataFrame(user_name,columns=['username'])
    return useranme_df.to_dict(orient='records')  

def usernameid(data):
    user_numid = data[data['MESSAGE'] != '']['USERNAME'].unique()
    lst = list(user_numid)
    lst.append('All')
    user_numid = np.asarray(lst)
    return user_numid

def usernameonly(data):
    user_numid = data[data['MESSAGE'] != '']['USERNAME'].unique()
    return user_numid