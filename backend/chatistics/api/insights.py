from chatistics.api.user.user import username
from chatistics.api.stats.stats import stats

import pandas as pd
import datetime
import emoji
from collections import Counter
import re


# def generalstats(data):
#     generalstats={
#         'No_of_msgs':len(data[data['MESSAGE'] != ""]),
#         'No_of_media':len(data[data['MESSAGE'] == '<media omitted>']),
#         'No_of_users':len(data[data['MESSAGE'] != '']['USERNAME'].unique()),
#         'No_of_Days_had_Convo':len(data['DATE'].unique()),
#         'Dt_max_convo':data['DATE'].value_counts().idxmax(),
#         'Dt_min_convo':data['DATE'].value_counts().idxmin(),
#         'Most_msg_by':data['USERNAME'].value_counts().index[0],
#         'Dy_max_convo':data['DAY'].value_counts().index[0],
#         'Avg_msg_per_user':len(data[data['MESSAGE'] != ""])/len(data[data['MESSAGE'] != '']['USERNAME'].unique()),
#         'Deleted_msgs':len(data[data["MESSAGE"]=='this message was deleted']),
#         'Avg_msg_per_day':len(data[data['MESSAGE'] != ""])/len(data['DATE'].unique()),
#         'Text_per_hour':len(data)/(24*len(data['DATE'].unique()))
#     }
#     return generalstats

# def activity_by_day(data):
#     days=list(data['DAY'])
#     value=Counter(days).most_common()
#     df=pd.DataFrame(value,columns=['DAY','NO_OF_MSGS'])
#     return df.to_dict(orient='records')

# def activity_by_year(data):
#     year=list(data['YEAR'])
#     value=Counter(year).most_common()
#     df=pd.DataFrame(value,columns=['YEAR','NO_OF_MSGS'])
#     return df.to_dict(orient='records')     

# def numOfText(data):
#     names=list(data['USERNAME'])
#     value=Counter(names).most_common()
#     df=pd.DataFrame(value,columns=['NAME','NO_OF_MSGS'])
#     return df.to_dict(orient='records')

# def heatMap(data):
#     temp=[]
#     for i in range(len(data)):
#         review = re.sub('/','-',str(data['DATE'][i]))   #Exchanging "/" from "-"
#         temp.append(review)
#     X = Counter(temp).most_common()
#     heatMap_info=pd.DataFrame(X, columns=['DATE','VALUE'])
#     return heatMap_info.to_dict(orient='records')

# def activity_by_time(data):
#     time=[]
#     for i in data['TIME']:
#         time.append(i.split(":")[0]+i.split(":")[1].split(" ")[1])
#     value=Counter(time).most_common()
#     df=pd.DataFrame(value,columns=['DATE','VALUE'])
#     return df.to_dict(orient='records')               
     
# def searchEmoji(data):
#     Emojichar = []   
#     for i in range(len(data)):
#         for character in data['MESSAGE'][i]:
#             if character in emoji.UNICODE_EMOJI:   #emoji search
#                 Emojichar.append(character)
#     emojidata=pd.DataFrame((Counter(Emojichar).most_common()[:20]),columns=['EMOJI','VALUE']).to_dict(orient='records')
#     emojistats={'Different_Emojis_used':len(Counter(Emojichar).most_common()),'Number_of_emojis':len(Emojichar)}
#     return {'Emoji_usage':emojidata,'Emoji_stats':emojistats}
                
# def wordcloud(data):

#     tokens,Word,Words,NO_OF_Word,links,letters = [],[],[],[],[],[]
#     for character in data['MESSAGE']:  
#         character = str(character)
#         tokens = character.split() #SPLITING EACH CHARACTER  
#         Word.append(tokens)  
#     flat_list = []

#     for sublist in Word:           #Creating a SINGLE LIST from NESTED LIST
#         for item in sublist:
#             r1 = re.search('.*http',item)
#             if r1:
#                 links.append(item)
#             if item != "<media" and item != "omitted>":
#                 Words.append(item)
#             for letter in item:
#                 letters.append(letter)    
    
#     worddata=pd.DataFrame(Counter(Words).most_common()[:50], columns=['WORD','FREQUENCY']).to_dict(orient='records')                
#     wordstats={'Avg_word_per_text':len(Words)/len(data),'Total_Words':len(Words),'Total_links':len(links),'Total_letters':len(letters),'Total_lettrs_per_word':len(letters)/len(Words)}                
#     return {'word_usage':worddata , 'word_stat':wordstats}

# def insights(data):  
#     data=pd.DataFrame(data)
#     insights={'wordcloud':wordcloud(data),'Heatmap':heatMap(data),'Emoji':searchEmoji(data),'user_message_count':numOfText(data),'general_stats':generalstats(data),'activity_by_day':activity_by_day(data),'activity_by_year':activity_by_year(data),'activity_by_time':activity_by_time(data)}
#     return insights

def insights(data):  
    data=pd.DataFrame(data)
    insights={
        'username' : username(data),
        'stats' : stats(data)
    }
    return insights

