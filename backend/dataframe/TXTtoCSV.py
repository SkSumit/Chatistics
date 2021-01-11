import pandas as pd
from datetime import datetime

def dataframe(content):
    column_names = ["DATE","TIME","USERNAME","MESSAGE","DAY","YEAR"]
    date, time, username, messages = ([] for i in range(4))
    df = pd.DataFrame(columns = column_names)
    CORPUS=list(content)
    for i in range(len(CORPUS)):
        date.append(str(content[i].split(",")[0]))
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
        for i in df['DATE']:
            days.append(datetime.strptime(i, "%d/%m/%y").strftime("%A"))
            years.append(datetime.strptime(i, "%d/%m/%y").year)
    except :
        days=[]
        years=[]
        for i in df['DATE']:
            days.append(datetime.strptime(i, "%m/%d/%y").strftime("%A"))
            years.append(datetime.strptime(i, "%m/%d/%y").year)
    df['DAY'] = days
    df['YEAR']=years
    df["TIME"] = time
    df["USERNAME"] = username
    df["MESSAGE"] = messages               
    return df
