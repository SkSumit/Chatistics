import pandas as pd
import datetime
import emoji
from collections import Counter

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

def numOfText(data):
    user_info = pd.DataFrame(columns=['USER_NAME','NO_OF_MSGS'])
    name,msgs = [],[]
    res=data[data['MESSAGE'] != '']['USERNAME'].value_counts()
    for i in data[data['MESSAGE'] != '']['USERNAME'].unique():
        name.append(i)
        msgs.append(res[i])
    user_info['USER_NAME']=name
    user_info['NO_OF_MSGS']=msgs
    return user_info.to_dict(orient="records")
     

def searchEmoji(data):
    emoji_info=pd.DataFrame(columns=['Emoji','NO_OF_Emoji'])
    
    Emojichar = []
    Emoji = []
    NO_OF_Emoji = []
    
    for i in range(len(data)):
        for character in data['MESSAGE'][i]:
            if character in emoji.UNICODE_EMOJI:   #emoji search
                Emojichar.append(character)
    Emojichar.sort()

    for team in [ele for ind, ele in enumerate(Emojichar,1) if ele not in Emojichar[ind:]]:
        Emoji.append(team)
        NO_OF_Emoji.append(Emojichar.count(team)) 

    emoji_info['Emoji'] = Emoji
    emoji_info['NO_OF_Emoji'] = NO_OF_Emoji
    
    return emoji_info.to_dict(orient='records')
                
def insights(data):  
    data=pd.DataFrame(data)
    insights={'Emoji':searchEmoji(data),'user_message_count':numOfText(data),'general_stats':generalstats(data),'activity_by_day':activity_by_day(data),'activity_by_year':activity_by_year(data)}
    return insights