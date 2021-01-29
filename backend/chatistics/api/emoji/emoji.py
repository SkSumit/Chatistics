import emoji
from collections import Counter
import pandas as pd
from chatistics.api.user.user import usernameid
from chatistics.dataframe.dict import my_dictionary


def emojiuser(data, username): #add username
    Emojichar = []
    if(username != "all"){
        for word in list(df[df['USERNAME'] == username]["MESSAGE"]):
            for letter in word:
                
    }
        if data['USERNAME'][i] == username:
            for character in data['MESSAGE'][i]:
                if character in emoji.UNICODE_EMOJI:   #emoji search
                    Emojichar.append(character)
    emojistats={'Different_Emojis_used':len(Counter(Emojichar).most_common()),'Number_of_emojis':len(Emojichar)}                
    emojidata=pd.DataFrame((Counter(Emojichar).most_common()[:20]),columns=['EMOJI','VALUE']).to_dict(orient='records')
    return { 
            'Emoji_usage' :emojidata,
            'Emoji_stats':emojistats
        } 

# def emojiall(data): #add username
#     Emojichar = []   
#     for i in range(len(data)):
#         for character in data['MESSAGE'][i]:
#             if character in emoji.UNICODE_EMOJI:   #emoji search
#                 Emojichar.append(character)
#     emojidata=pd.DataFrame((Counter(Emojichar).most_common()[:20]),columns=['EMOJI','VALUE']).to_dict(orient='records')
#     emojistats={'Different_Emojis_used':len(Counter(Emojichar).most_common()),'Number_of_emojis':len(Emojichar)}
#     return { 
#             'Emoji_usage' :emojidata,
#             'Emoji_stats':emojistats
#         } 

def emojicontent(data):
    emoji = my_dictionary() 
    #emoji.add("all",emojiall(data))
    names=usernameid(data) 
    for i in names:
         emoji.add(i,emojiuser(data,i))
    return emoji
