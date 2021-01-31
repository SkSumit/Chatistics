from chatistics.api.user.user import usernameonly
from chatistics.dataframe.dict import my_dictionary
from chatistics.api.emoji.emoji import emojiuser
from chatistics.api.wordcloud.wordcloud import wordcloudUser, wordCountUser
import numpy as np

def userSpecificInfo(data,username):
    word, letter, link = wordCountUser(data,username)
    userSpecificInfo = {
        #'averageMessage'          :     len(data[data['USERNAME'] == username]['MESSAGE'])/data[data['USERNAME'] == username]['DATE'].value_counts().count(),
        'no_of_link'              :     len(link),
        'totalMessageExchanged'   :     int(data[data['USERNAME']== username]['MESSAGE'].value_counts().sum()),
        'total_num_words'         :     len(word),
        'total_num_letter'        :     len(letter),
        'No_of_msgs'              :     len(data[data['MESSAGE'] != ""]['USERNAME']==username),
        'No_of_media'             :     len(data[data['MESSAGE'] == '<Media omitted>']['USERNAME']==username),
        'No_of_Days_had_Convo'    :     len(data[data['USERNAME']==username]['DATE'].unique()),
        'Dt_max_convo'            :     str(data[data['USERNAME']==username]['DATE'].value_counts().agg( lambda x : np.nan if x.count() == 0 else x.idxmax())),
        'Dt_min_convo'            :     str(data[data['USERNAME']==username]['DATE'].value_counts().agg( lambda x : np.nan if x.count() == 0 else x.idxmin())),
        'Dy_max_convo'            :     str(data[data['USERNAME']==username]['DAY'].value_counts().agg( lambda x : np.nan if x.count() == 0 else x.idxmax())),
        'Dy_min_convo'            :     str(data[data['USERNAME']==username]['DAY'].value_counts().agg( lambda x : np.nan if x.count() == 0 else x.idxmin())),
        'Deleted_msgs'            :     len(data[data["MESSAGE"]=='This message was deleted']['USERNAME']==username),
        'Avg_msg_per_day'         :     len(data[data['USERNAME']==username]['MESSAGE'] != "")/len(data[data['USERNAME']==username]['DATE'].unique()),
        'Text_per_hour'           :     len(data[data['USERNAME']==username]['MESSAGE'] != "")/24*len(data[data['USERNAME']==username]['DATE'].unique()),
        # 'mostUsedEmoji'           :     emojiuser(data, username, 1),
        # 'wordcloud'               :     wordcloudUser(data,username,1)
    }
    return userSpecificInfo


def userspecific(data):
    userspecific = my_dictionary() 
    for i in usernameonly(data):
        userspecific.add(i,userSpecificInfo(data,i))   
    return userspecific