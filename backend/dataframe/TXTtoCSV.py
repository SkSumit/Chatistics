import pandas as pd
import datetime

def dataframe(content):
    column_names = ["DATE","TIME","USERNAME","MESSAGE","DAY"]
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
    df["TIME"] = time
    df["USERNAME"] = username
    df["MESSAGE"] = messages            
    try:
        days=[]
        for i in df['DATE']:
            day , month , year = i.split("/")        
            ans = datetime.date(int(year), int(month), int(day))
            days.append(ans.strftime("%A"))
    except :
        days=[]
        for i in df['DATE']:
            month , day , year = i.split("/")
            ans = datetime.date(int(year), int(month), int(day))
            days.append(ans.strftime("%A"))
    df['DAY'] = days               
    return df
