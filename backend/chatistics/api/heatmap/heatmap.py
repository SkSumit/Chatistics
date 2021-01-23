import re
from collections import Counter
import pandas as pd
from chatistics.api.user.user import usernameid


def heatMapAll(data):
    temp=[]
    for i in range(len(data)):
        review = re.sub('/','-',str(data['DATE'][i]))   #Exchanging "/" from "-"
        temp.append(review)
    heatMap_info=pd.DataFrame(Counter(temp).most_common(), columns=['DATE','VALUE'])
    return {
        "all" : heatMap_info.to_dict(orient='records')
    }
def heatMapUser(data,username):
    temp=[]
    for i in range(len(data)):
        if data['USERNAME'][i] == username:
            review = re.sub('/','-',str(data['DATE'][i]))   #Exchanging "/" from "-"
            temp.append(review)
    heatMap_info=pd.DataFrame(Counter(temp).most_common(), columns=['DATE','VALUE'])
    return {
        username : heatMap_info.to_dict(orient='records')
    } 


def heatmap(data):
    heatmap = []
    heatmap.append(heatMapAll(data))
    for i in usernameid(data):
        heatmap.append(heatMapUser(data,i))
    return heatmap