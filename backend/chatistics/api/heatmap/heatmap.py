import re
from collections import Counter
import pandas as pd
from chatistics.api.user.user import usernameid
from chatistics.dataframe.dict import my_dictionary

def heatMapAll(data):
    temp=[]
    for i in range(len(data)):
        review = re.sub('/','-',str(data['DATE'][i]))   #Exchanging "/" from "-"
        temp.append(review)
    heatMap_info=pd.DataFrame(Counter(temp).most_common(), columns=['date','count'])
    return heatMap_info.to_dict(orient='records')

def heatMapUser(data,username):
    temp=[]
    for i in range(len(data)):
        if data['USERNAME'][i] == username:
            review = re.sub('/','-',str(data['DATE'][i]))   #Exchanging "/" from "-"
            temp.append(review)
    heatMap_info=pd.DataFrame(Counter(temp).most_common(), columns=['date','count'])
    return heatMap_info.to_dict(orient='records')

def heatmap(data):
    # heatmap = {}
    heatmap = my_dictionary() 
    # heatmap.append(heatMapAll(data))
    heatmap.add("all",heatMapAll(data)) 
    for i in usernameid(data):
         heatmap.add(i,heatMapUser(data,i))
    return heatmap