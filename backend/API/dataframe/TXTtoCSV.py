import pandas as pd
import re
from datetime import datetime
import calendar

def dataframe(content):
    column_names = ["DATE","TIME","USERNAME","MESSAGE","DAY","YEAR"]
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
        for i in df['DATE']:
            date_to_extract=datetime.strptime(i, "%d-%m-%y")
            days.append(date_to_extract.strftime("%A"))
            years.append(date_to_extract.year)
            month.append(calendar.month_name[date_to_extract.month]+" "+str(date_to_extract.year))
    except :
        days=[]
        years=[]
        month=[]
        for i in df['DATE']:
            date_to_extract=datetime.strptime(i, "%m-%d-%y")
            days.append(date_to_extract.strftime("%A"))
            years.append(date_to_extract.year)
            month.append(calendar.month_name[date_to_extract.month]+" "+str(date_to_extract.year))
    df['DAY'] = days
    df['YEAR']=years
    df["TIME"] = time
    df["USERNAME"] = username
    df["MESSAGE"] = messages
    df['MONTH']=month               
    return df
