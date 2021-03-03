import pandas as pd
import re
from datetime import datetime
import calendar

def guessdateformat(date):
    date1=[]
    month=[]
    for i in list(date):
        temp = re.findall(r'\d+', i)
        date1.append(int(temp[0]))
        month.append(int(temp[1]))
    date1 = list(set(date1))
    month = list(set(month))
    if month[-1] >= 13:
        dayFirst = False
    elif date1[-1] >= 13:
        dayFirst = True
    else:
        dayFirst = True
    return dayFirst        #low chat dates of m/d/y format will get converted to d/m/y

def dataframe(date , time , username , messages):
    try:
        column_names = ["DATE","TIME","USERNAME","MESSAGE"]
        df = pd.DataFrame(columns = column_names)
        dayFirst=guessdateformat(date)
        df['DATE'] = date
        df["TIME"] = time
        df["USERNAME"] = username
        df["MESSAGE"] = messages
        index_name = df[df['MESSAGE']==""].index
        df.drop(index_name, inplace = True)
        df['DATETIME']=pd.to_datetime(df['DATE'],dayfirst=dayFirst)
        df['DAY'] = df['DATETIME'].dt.day_name()
        df['HOURS'] = pd.to_datetime(df['TIME']).dt.hour
        return df
    except:
        raise Exception("Not a Whats App txt file")     
        
