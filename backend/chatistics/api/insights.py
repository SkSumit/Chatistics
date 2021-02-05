# from chatistics.api.user.user import username
# from chatistics.api.stats.stats import stats
from chatistics.api.analysis import configvars
from chatistics.api.analysis import dict

import pandas as pd
import datetime
import emoji
from collections import Counter
import regex as re

class getData:

    def summary(data):
        summary = {
            "Total_no_days":configvars.no_of_days,
            "Msgs_exchanged":len(data[data['MESSAGE']!= '']),
            "Total_no_words":configvars.totalwords
        }
        return summary

    def emojiall(data , name):
        emojidict = dict.my_dictionary()
        emoji_list=[]
        for data in data['MESSAGE']:
            for word in data:
                if word in emoji.UNICODE_EMOJI:   #emoji search
                    emoji_list.append(word)
        emojistats={'Different_Emojis_used':len(Counter(emoji_list).most_common()),'Number_of_emojis':len(emoji_list)}                
        emojidata=pd.DataFrame((Counter(emoji_list).most_common()[:20]),columns=['EMOJI','VALUE']).to_dict(orient='records')
        emojiusage={ 
                'Emoji_usage' :emojidata,
                'Emoji_stats':emojistats
            }
        emojidict.add(name , emojiusage)
        configvars.emojidata.update(emojidict)    


    def emojidata(data):
        userspecificemoji = dict.my_dictionary() 
        for i in getData.usernameonly(data):
            userspecificemoji.add(i,getData.emojiall(data[data["USERNAME"]==i] , i))                 
 
    def userSpecificInfo(data,username):
        A = data[data['USERNAME']==username]
        X = A['DATE'].value_counts()
        Y = A['DAY'].value_counts()
        Z = len(A['MESSAGE'])
        word,link,wordcloud = getData.wordCountUser(A , username)
        wordlen = len(word)
        configvars.totalwords=configvars.totalwords+wordlen
        configvars.worddata.update(wordcloud)
        userSpecificInfo = {
            'no_of_link'              :     len(link),
            'total_num_words'         :     wordlen,
            'No_of_msgs'              :     len(A['MESSAGE']),
            'No_of_media'             :     len(A[A['MESSAGE'] == "<Media omitted>"]),
            'No_of_Days_had_Convo'    :     len(A['DATE'].unique()),
            'Dt_max_convo'            :     A['DATE'].value_counts().idxmax(),
            'Dt_min_convo'            :     str(A['DATE'].value_counts().idxmin()),
            'Dy_max_convo'            :     str(A['DAY'].value_counts().idxmax()),
            'Dy_min_convo'            :     str(A['DAY'].value_counts().idxmin()),
            'Avg_msg_per_day'         :     len(A['MESSAGE'])/len(A['DATE'].unique()),
            'Avg_words_per_msg'        :     wordlen/Z,
    #        'Avg_msg_per_hour'        :     len(A['MESSAGE'])/(len(A['DATE'].unique())*24) 
             'No_of_emoji_used'           :     configvars.emojidata.get(username)['Emoji_stats']['Number_of_emojis']
        }
        return userSpecificInfo

    def usernameonly(data):
        user_numid = data[data['MESSAGE'] != '']['USERNAME'].unique()
        return user_numid

    def wordcloudall(data):
        wordcloud = dict.my_dictionary()
        word = []
        for i in data['MESSAGE']:
            for j in i.split():
                if j != "<Media" and j != "omitted>":
                    word.append(j)
        wordcounter = Counter(word).most_common()                 
        wordcloud.add("All",[pd.DataFrame(wordcounter[:50], columns=['WORD','FREQUENCY']).to_dict(orient='records'),{'Most_used_word':wordcounter[0][0],'Least_used_word':wordcounter[-1][0]}])
        return wordcloud

    def wordsListNestedUser(data , username):
        word,links = [],[]
        for i in data['MESSAGE']:
            for j in i.split():
                if j != "<Media" and j != "omitted>":
                    word.append(j)            
        for sublist in word:           #Creating a SINGLE LIST from NESTED LIST
            r1 = re.search('.*http',sublist)
            if r1:
                links.append(sublist)            
        return word , links
        
    def wordCountUser(data , username):
        wordcloud = dict.my_dictionary()
        word , link=getData.wordsListNestedUser(data , username)
        wordcounter=Counter(word).most_common()
        wordcloud.add(username,[pd.DataFrame(wordcounter[:50], columns=['WORD','FREQUENCY']).to_dict(orient='records'),{'Most_used_word':wordcounter[0][0],'Least_used_word':wordcounter[-1][0]}])
        return word,link,wordcloud;

    def userspecific(data):
        userspecific = dict.my_dictionary() 
        for i in getData.usernameonly(data):
            userspecific.add(i,getData.userSpecificInfo(data,i))   
        return userspecific                
            
    def basedonday(data):
        basedonDay = dict.my_dictionary()
        datauser = data.groupby(["USERNAME","DAY"], as_index=False)["MESSAGE"]
        dataall = data.groupby(['DAY'] , as_index=False)['MESSAGE']
        data=datauser.count()
        dataall = dataall.count()
        dataall.sort_values(by=['DAY','MESSAGE'],ascending=False,inplace=True)
        data.sort_values(by='MESSAGE',ascending=False,inplace=True)
        for i in data['USERNAME'].unique():
            basedonDay.add(i,[data[data['USERNAME']==i][['DAY','MESSAGE']].to_dict(orient='records'),{"Dy_max_convo":configvars.userdata.get(i)['Dy_max_convo'],"Avg_msg_per_day":configvars.userdata.get(i)['Avg_msg_per_day']}])
        basedonDay.add("All",dataall.to_dict(orient='records'))    
        return basedonDay

    def heatmap(data):
        heatmap = dict.my_dictionary()
        heatmapuser=data.groupby(["USERNAME","DATE"], as_index=False)['MESSAGE']
        heatmapall=data.groupby(["DATE"],as_index=False)['MESSAGE']
        heatmapuser=heatmapuser.count().sort_values(by=['MESSAGE'],ascending=False)
        configvars.no_of_days = len(heatmapall)
        heatmapall=heatmapall.count().sort_values(by='MESSAGE',ascending=False)
        for i in heatmapuser['USERNAME'].unique():
            heatmap.add(i,heatmapuser[heatmapuser['USERNAME'] == i][['DATE','MESSAGE']].to_dict(orient='records'))
        heatmap.add("All",heatmapall.to_dict(orient='records'))
        return heatmap
        
    def analysis(self,data):
        configvars.totalwords = 0
        configvars.emojidata = {}
        configvars.worddata.update(getData.wordcloudall(data))
        getData.emojiall(data , "All")
        getData.emojidata(data)
        configvars.userdata.update(getData.userspecific(data))
        analysis = {
                        "userspecific" : configvars.userdata,
                        "basedOnDays" : getData.basedonday(data),
                        "wordcloud" : configvars.worddata,
                        "heatmap" : getData.heatmap(data),
                        "summary" : getData.summary(data),
                        "emoji" : configvars.emojidata
        } 
        return analysis