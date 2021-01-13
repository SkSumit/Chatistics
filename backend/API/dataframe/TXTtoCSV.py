from datetime import datetime
from API.dataframe.insights import insights

def dataframe(content):
    date, time, username, messages = ([] for i in range(4))
    CORPUS=list(content)
    for i in range(len(CORPUS)):
        date.append(str(content[i].split(",")[0]))
        time.append(str((content[i].split(",")[1].split("-"))[0][1:-1]))
        username.append(str((content[i].split(",")[1].split("-")[1].split(":")[0][1:])))
        if len(content[i].split(":")[2:]) > 1:
            messages.append(" ".join(content[i].split(":")[2:])[1:])
        else:
            messages.append("^".join(content[i].split(":")[2:])[1:])           
    try:
        days=[]
        years=[]
        for i in date:
            days.append(datetime.strptime(i, "%d/%m/%y").strftime("%A"))
            years.append(datetime.strptime(i, "%d/%m/%y").year)
    except :
        days=[]
        years=[]
        for i in date:
            days.append(datetime.strptime(i, "%m/%d/%y").strftime("%A"))
            years.append(datetime.strptime(i, "%m/%d/%y").year)                      
    return insights(days , date , username , messages , time , years)
