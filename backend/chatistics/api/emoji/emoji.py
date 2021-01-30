import emoji
from collections import Counter
import pandas as pd
from chatistics.api.user.user import usernameid
from chatistics.dataframe.dict import my_dictionary



def emojiuser(data, username, num): #add username
    Emojichar = []   
    for i in range(len(data)):
        if data['USERNAME'][i] == username:
            for character in data['MESSAGE'][i]:
                if character in emoji.UNICODE_EMOJI:   #emoji search
                    Emojichar.append(character)
        elif 'All' == username:
            for character in data['MESSAGE'][i]:
                if character in emoji.UNICODE_EMOJI:   #emoji search
                    Emojichar.append(character)
    emojistats={'Different_Emojis_used':len(Counter(Emojichar).most_common()),'Number_of_emojis':len(Emojichar)}                
    emojidata=pd.DataFrame((Counter(Emojichar).most_common()[:num]),columns=['EMOJI','VALUE']).to_dict(orient='records')
    return { 
            'Emoji_usage' :emojidata,
            'Emoji_stats':emojistats
        } 

def emojicontent(data):
    emoji = my_dictionary() 
    for i in usernameid(data):
         emoji.add(i,emojiuser(data,i,20))
    return emoji
