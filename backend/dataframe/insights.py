import pandas as pd
import datetime

def generalstats(data):
    parameter=['No_of_msgs','No_of_media','No_of_users','Days_on_WhatsApp','Dt_max_convo','Dt_min_convo','Most_msg_by','Dy_max_convo']
    result=[]
    general_stats=pd.DataFrame(columns=['PARAMETER','RESULT'])
    general_stats['PARAMETER']=parameter
    result.append(len(data[data['MESSAGE'] != ""]))
    result.append(len(data[data['MESSAGE'] == '<media omitted>']))
    result.append(len(data[data['MESSAGE'] != '']['USERNAME'].unique()))
    result.append(len(data['DATE'].unique()))
    result.append(str(data['DATE'].value_counts().idxmax()))
    result.append(str(data['DATE'].value_counts().idxmin()))
    result.append(data['USERNAME'].value_counts().index[0])
    result.append(data['DAY'].value_counts().index[0])
    general_stats['RESULT']=result
    return general_stats.to_dict(orient="records")

def activity_by_day(data):
    act_by_day=pd.DataFrame(columns=['DAY','NO_OF_MSGS'])
    days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    msgs=[]
    for i in days:
        msgs.append(len(data[(data['DAY'] == i) & (data['MESSAGE']!="")]))
    act_by_day['DAY']=days
    act_by_day['NO_OF_MSGS']=msgs
    return act_by_day.to_dict(orient="records")

def activity_by_year(data):
    act_by_year=pd.DataFrame(columns=['YEAR','NO_OF_MSGS'])
    year,msgs=[],[]
    for i in data['YEAR'].unique():
        year.append(i)
        msgs.append(len(data[data['YEAR']==i]))
    act_by_year['YEAR']=year
    act_by_year['NO_OF_MSGS']=msgs
    return act_by_year.to_dict(orient='records')        

def insights(data):  
    data=pd.DataFrame(data)
    insights={'general_stats':generalstats(data),'activity_by_day':activity_by_day(data),'activity_by_year':activity_by_year(data)}
    return insights