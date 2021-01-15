import pandas as pd
import datetime
import emoji
from collections import Counter

def generalstats(data):
    generalstats={
        'No_of_msgs':len(data[data['MESSAGE'] != ""]),
        'No_of_media':len(data[data['MESSAGE'] == '<media omitted>']),
        'No_of_users':len(data[data['MESSAGE'] != '']['USERNAME'].unique()),
        'No_of_Days_had_Convo':len(data['DATE'].unique()),
        'Dt_max_convo':str(data['DATE'].value_counts().idxmax()),
        'Dt_min_convo':str(data['DATE'].value_counts().idxmin()),
        'Most_msg_by':data['USERNAME'].value_counts().index[0],
        'Dy_max_convo':data['DAY'].value_counts().index[0],
        'Avg_msg_per_user':len(data[data['MESSAGE'] != ""])/len(data[data['MESSAGE'] != '']['USERNAME'].unique()),
        'Deleted_msgs':len(data[data["MESSAGE"]=='this message was deleted']),
        'Avg_msg_per_day':len(data[data['MESSAGE'] != ""])/len(data['DATE'].unique())
    }
    return generalstats

def searchEmoji(data):
    Emojichar = []   
    for i in range(len(data)):
        for character in data['MESSAGE'][i]:
            if character in emoji.UNICODE_EMOJI:   #emoji search
                Emojichar.append(character)
    emojidata=dict(Counter(Emojichar).most_common()[:20])
    emojistats={'Different_Emojis_used':len(Counter(Emojichar).most_common()),'Number_of_emojis':len(Emojichar)}
    return {'Emoji_usage':emojidata,'Emoji_stats':emojistats}
                
def insights(data):  
    data=pd.DataFrame(data)
    insights={'Emoji':searchEmoji(data),'user_message_count':dict(Counter(list(data['USERNAME'])).most_common()),'general_stats':generalstats(data),'activity_by_day':dict(Counter(list(data['DAY'])).most_common()),'activity_by_year':dict(Counter(list(data['YEAR'])).most_common())}
    return insights