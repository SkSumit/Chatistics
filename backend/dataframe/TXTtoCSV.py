import pandas as pd

def dataframe(content):
    column_names = ["DATE","TIME","USERNAME","MESSAGE"]
    date, time, username, messages = ([] for i in range(4))
    df = pd.DataFrame(columns = column_names)
    CORPUS=list(content)
    for i in range(len(CORPUS)):
        date.append(str(content[i].split(",")[0]))
        time.append(str((content[i].split(",")[1].split("-"))[0]))
        username.append(str((content[i].split(",")[1].split("-")[1].split(":")[0])))
        if len(content[i].split(":")[2:]) > 1:
            messages.append(" ".join(content[i].split(":")[2:]))
        else:
            messages.append("^".join(content[i].split(":")[2:]))   
    df["DATE"] = date
    df["TIME"] = time
    df["USERNAME"] = username
    df["MESSAGE"] = messages
    print(messages) 
    return df
