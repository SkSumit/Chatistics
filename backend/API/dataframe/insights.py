import emoji
from collections import Counter

def generalstats(messages , username , date , days , years , time):
    generalstats={
        'No_of_msgs': len(messages),
        'No_of_media': dict(Counter(messages).most_common())['<media omitted>'],
        'No_of_users': len(Counter(username)),
        'Days_on_WhatsApp':len(Counter(date)),
        'Dt_max_convo':Counter(date).most_common()[0][0],
        'Dt_min_convo':Counter(date).most_common()[-1][0],
        'Most_msg_by':Counter(username).most_common()[0][0],
        'Dy_max_convo':Counter(days).most_common()[0][0] 
    }
    return generalstats

def searchEmoji(data):
    Emojichar = []   
    for i in data:
        for character in i:
            if character in emoji.UNICODE_EMOJI:   #emoji search
                Emojichar.append(character)
    emojidata=Counter(Emojichar).most_common() 
    emojiinfo=dict(emojidata[:20])
    return emojiinfo
                
def insights(days , date , username , messages , time , year):  
    #data=pd.DataFrame(data)
    insights={'Emoji':searchEmoji(messages),'user_message_count':dict(Counter(username).most_common()),'general_stats':generalstats(messages , username , date , days , year , time),'activity_by_day':dict(Counter(days).most_common()),'activity_by_year':dict(Counter(year))}
    return insights