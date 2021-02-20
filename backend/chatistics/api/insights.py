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
            "totalDays": configvars.no_of_days,
            "totalMessageExchanged": len(data[data['MESSAGE'] != '']),
            "totalWords": configvars.totalwords
        }
        return summary

    def emojiall(data, name):
        emojidict = dict.my_dictionary()
        emoji_list = []
        for data in data['MESSAGE']:
            for word in data:
                if word in emoji.UNICODE_EMOJI:  # emoji search
                    emoji_list.append(word)
        Emoji_stats = {"Emoji_stats": {'Different_Emojis_used': len(
            Counter(emoji_list).most_common()), 'Number_of_emojis': len(emoji_list)}}
        Emoji_data = {"Emoji_usage": pd.DataFrame((Counter(emoji_list).most_common()[
                                                  :20]), columns=['EMOJI', 'VALUE']).to_dict(orient='records')}
        Emoji_stats.update(Emoji_data)
        emojidict.add(name, Emoji_stats)
        configvars.emojidata.update(emojidict)

    def emojidata(data):
        userspecificemoji = dict.my_dictionary()
        for i in getData.usernameonly(data):
            userspecificemoji.add(i, getData.emojiall(
                data[data["USERNAME"] == i], i))

    def userSpecificInfo(data, username):
        A = data[data['USERNAME'] == username]
        X = A['DATE'].value_counts()
        Y = A['DAY'].value_counts()
        Z = len(A['MESSAGE'])
        word, link, wordcloud = getData.wordCountUser(A, username)
        wordlen = len(word)
        configvars.totalwords = configvars.totalwords+wordlen
        configvars.worddata.update(wordcloud)
        userSpecificInfo = {
            'totalLinks':     len(link),
            'totalWords':     wordlen,
            'totalMessages':     len(A['MESSAGE']),
            'totalMedia':     len(A[A['MESSAGE'] == "<Media omitted>"]),
            'totalDays':     len(A['DATE'].unique()),
            'mostActiveDate':     A['DATE'].value_counts().idxmax(),
            'leastActiveDate':     str(A['DATE'].value_counts().idxmin()),
            'mostActiveDay':     str(A['DAY'].value_counts().idxmax()),
            'leastActiveDay':     str(A['DAY'].value_counts().idxmin()),
            'averageMessagePerDay':     len(A['MESSAGE'])/len(A['DATE'].unique()),
            'averageWordsPerMessage':     wordlen/Z,
            #        'Avg_msg_per_hour'        :     len(A['MESSAGE'])/(len(A['DATE'].unique())*24)
            'totalEmojis':     configvars.emojidata.get(username)['Emoji_stats']['Number_of_emojis']

        }
        return userSpecificInfo

    def usernameonly(data):
        user_numid = data[data['MESSAGE'] != '']['USERNAME'].unique()
        return user_numid

    def usernameonlydict(data):
        user_numid = data[data['MESSAGE'] != '']['USERNAME'].unique()
        useranme_df = pd.DataFrame(user_numid, columns=['username'])
        return useranme_df.to_dict(orient='records')

    def wordcloudall(data):
        wordcloud = dict.my_dictionary()
        word = []
        for i in data['MESSAGE']:
            for j in i.split():
                if j != "<Media" and j != "omitted>":
                    word.append(j)
        wordcounter = Counter(word).most_common()
        if wordcounter:
            word_usage = {"wordUsage": pd.DataFrame(
                wordcounter[:50], columns=['text', 'value']).to_dict(orient='records')}
            word_stat = {"wordStat": {
                'mostUsedWord': wordcounter[0][0], 'leastUsedWord': wordcounter[-1][0]}}
            word_usage.update(word_stat)
            wordcloud.add("All", word_usage)
        return wordcloud

    def wordsListNestedUser(data, username):
        word, links = [], []
        for i in data['MESSAGE']:
            for j in i.split():
                if j != "<Media" and j != "omitted>":
                    word.append(j)
        for sublist in word:  # Creating a SINGLE LIST from NESTED LIST
            r1 = re.search('.*http', sublist)
            if r1:
                links.append(sublist)
        return word, links

    def wordCountUser(data, username):
        wordcloud = dict.my_dictionary()
        word, link = getData.wordsListNestedUser(data, username)
        wordcounter = Counter(word).most_common()
        if wordcounter:
            word_usage = {"wordUsage": pd.DataFrame(
                wordcounter[:50], columns=['text', 'value']).to_dict(orient='records')}
            word_stat = {"wordStat": {
                'mostUsedWord': wordcounter[0][0], 'leastUsedWord': wordcounter[-1][0]}}
            word_usage.update(word_stat)
            wordcloud.add(username, word_usage)
        return word, link, wordcloud

    def userspecific(data):
        userspecific = dict.my_dictionary()
        for i in getData.usernameonly(data):
            userspecific.add(i, getData.userSpecificInfo(data, i))
        return userspecific

    def basedonday(data):
        basedonDay = dict.my_dictionary()
        datauser = data.groupby(["USERNAME", "DAY"], as_index=False)["MESSAGE"]
        dataall = data.groupby(['DAY'], as_index=False)['MESSAGE']
        data = datauser.count()
        dataall = dataall.count()
        dataall.sort_values(by=['DAY', 'MESSAGE'],
                            ascending=False, inplace=True)
        data.sort_values(by='MESSAGE', ascending=False, inplace=True)
        for i in data['USERNAME'].unique():
            basedonDay.add(i, [data[data['USERNAME'] == i][['DAY', 'MESSAGE']].to_dict(orient='records'), {
                           "mostActiveDay": configvars.userdata.get(i)['mostActiveDay'], "averageTexts":configvars.userdata.get(i)['averageMessagePerDay']}])
        basedonDay.add("All", [dataall.to_dict(orient='records'), {"averageTexts": 169.02197802197801,
                                                                   "mostActiveDay": "Thursday"}])
        return basedonDay

    def heatmap(data):
        heatmap = dict.my_dictionary()
        heatmapuser=data.groupby(["USERNAME","DATE"], as_index=False)['MESSAGE']
        heatmapall=data.groupby(["DATE"],as_index=False)['MESSAGE']
        heatmapuser=heatmapuser.count().sort_values(by=['MESSAGE'],ascending=False)
        heatmapuser.columns = ['USERNAME' , 'date' , 'count']
        configvars.no_of_days = len(heatmapall)
        heatmapall=heatmapall.count().sort_values(by='MESSAGE',ascending=False)
        heatmapall.columns = ['date' , 'count']
        for i in heatmapuser['USERNAME'].unique():
            heatmap.add(i,heatmapuser[heatmapuser['USERNAME'] == i][['date','count']].to_dict(orient='records'))
        heatmap.add("All",heatmapall.to_dict(orient='records'))
        return heatmap

    def analysis(self, data, filename):
        configvars.totalwords = 0
        configvars.no_of_days = 0
        configvars.emojidata = {}
        configvars.userdata = {}
        configvars.worddata = {}
        configvars.worddata.update(getData.wordcloudall(data))
        getData.emojiall(data, "All")
        getData.emojidata(data)
        configvars.userdata.update(getData.userspecific(data))
        analysis = {
            "stats": {

                "basedOnDays": getData.basedonday(data),

                "emoji": configvars.emojidata,
                "wordcloud": configvars.worddata,
                "heatmap": getData.heatmap(data),
                "summary": getData.summary(data),
                "userspecific": configvars.userdata
            },
            "usernames" : getData.usernameonlydict(data),
            "filename" : filename
        }
        return analysis
