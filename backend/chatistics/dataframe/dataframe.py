import pandas as pd
import re
from datetime import datetime
import calendar


def dataframe(content):
    try:
        column_names = ["DATE","TIME","USERNAME","MESSAGE","DAY"]
        date, time, username, messages = ([] for i in range(4))
        df = pd.DataFrame(columns = column_names)
        CORPUS=list(content)
        for i in range(len(CORPUS)):
            date.append(re.sub('/','-',str(content[i].split(",")[0])))
            time.append(str((content[i].split(",")[1].split("-"))[0][1:-1]))
            username.append(str((content[i].split(",")[1].split("-")[1].split(":")[0][1:])))
            if len(content[i].split(":")[2:]) > 1:
                messages.append(" ".join(content[i].split(":")[2:])[1:])
            else:
                messages.append("^".join(content[i].split(":")[2:])[1:])  
        df["DATE"] = date       
        try:
            days=[]
            years=[]
            month=[]
            newdate=[]
            for i in df['DATE']:
                date_to_extract=datetime.strptime(i, "%d-%m-%y")
                days.append(date_to_extract.strftime("%A"))
                newdate.append(date_to_extract.strftime("%m-%d-%y"))
            df["DATE"]=newdate
            df['DATETIME'] = pd.to_datetime(df['DATEnew'])
        except :
            days=[]
            years=[]
            month=[]
            for i in df['DATE']:
                date_to_extract=datetime.strptime(i, "%m-%d-%y")
                days.append(date_to_extract.strftime("%A"))
            df['DATETIME'] = pd.to_datetime(df['DATE'])    
        df['DAY'] = days
        df["TIME"] = time
        df["HOURS"] = pd.to_datetime(df['TIME']).dt.hour
        df["USERNAME"] = username
        df["MESSAGE"] = messages
        return df
    except:
        raise Exception("Not a Whats App txt file")     
        
