import pandas as pd
import datetime

def generalstats(data , insights):
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
    insights.append(general_stats.to_dict(orient="records"))
    return insights

def activity_by_day(data , insights):
    act_by_day=pd.DataFrame(columns=['DAY','NO_OF_MSGS'])
    days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    msgs=[]
    for i in days:
        msgs.append(len(data[(data['DAY'] == i) & (data['MESSAGE']!="")]))
    act_by_day['DAY']=days
    act_by_day['NO_OF_MSGS']=msgs
    insights.append(act_by_day.to_dict(orient="records"))
    return insights    

def insights(data):  
    data=pd.DataFrame(data)
    insights=[]
    insights=generalstats(data , insights)
    activity_by_day(data , insights)
    return insights