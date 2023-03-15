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
            "totalWords": configvars.totalwords,
            "totalMedia": len(data[data['MESSAGE'] == "<Media omitted>"]),
            "totalUsers": len(data['USERNAME'].unique()),
            "mostTexts" : data[data['MESSAGE'] != '']['USERNAME'].value_counts().idxmax(),
            "leastTexts" : data[data['MESSAGE'] != '']['USERNAME'].value_counts().idxmin(),
            "noOfLinks" : len(data[data['MESSAGE'].str.contains("https://")])
        }
        return summary

    def emojiall(data, name):
        emojidict = dict.my_dictionary()
        emoji_list = []
        for data1 in data['MESSAGE']:
            for word in data1:
                if word in emoji.UNICODE_EMOJI:  # emoji search
                    emoji_list.append(word)
        Emoji_stats = {"emojiStat": {'totalUniqueEmojis': len(
            Counter(emoji_list).most_common()), 'totalEmojis': len(emoji_list) , "emojiPerText": len(emoji_list)/len(data)}}
        Emoji_data = {"emojiUsage": pd.DataFrame((Counter(emoji_list).most_common()[
                                                  :20]), columns=['emoji', 'value']).to_dict(orient='records')}
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
            # 'Avg_msg_per_hour'        :     len(A['MESSAGE'])/(len(A['DATE'].unique())*24)
            'totalEmojis':     configvars.emojidata.get(username)['emojiStat']['totalEmojis']

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
                            ascending=False, inplace=True, ignore_index=True)
        data.sort_values(by='MESSAGE', ascending=False, inplace=True)
        for i in data['USERNAME'].unique():
            basedonDay.add(i, [data[data['USERNAME'] == i][['DAY', 'MESSAGE']].to_dict(orient='records'), {
                           "mostActiveDay": configvars.userdata.get(i)['mostActiveDay'], "averageTexts":configvars.userdata.get(i)['totalMessages']/configvars.no_of_days, "leastActiveDay":configvars.userdata.get(i)['leastActiveDay']}])
        basedonDay.add("All", [dataall.to_dict(orient='records'), {"averageTexts": sum(dataall['MESSAGE'])/configvars.no_of_days,
                                                                   "mostActiveDay": dataall['DAY'][dataall['MESSAGE'].idxmax()],
                                                                   "leastActiveDay":dataall['DAY'][dataall['MESSAGE'].idxmin()]}])
        return basedonDay

    def heatmap(data):
        heatmap = dict.my_dictionary()
        heatmapuser = data.groupby(
            ["USERNAME", "DATE"], as_index=False)['MESSAGE']
        heatmapall = data.groupby(["DATE"], as_index=False)['MESSAGE']
        heatmapuser = heatmapuser.count().sort_values(
            by=['MESSAGE'], ascending=False)
        heatmapuser.columns = ['USERNAME', 'date', 'count']
        configvars.no_of_days = len(heatmapall)
        heatmapall = heatmapall.count().sort_values(by='MESSAGE', ascending=False)
        heatmapall.columns = ['date', 'count']
        for i in heatmapuser['USERNAME'].unique():
            heatmap.add(i, heatmapuser[heatmapuser['USERNAME'] == i][[
                        'date', 'count']].to_dict(orient='records'))
        heatmap.add("All", heatmapall.to_dict(orient='records'))
        return heatmap

    def timeline(data):
        timeline = dict.my_dictionary()
        timelineuser = data.groupby(
            ["USERNAME", "DATETIME"], as_index=False)['MESSAGE']
        timelineall = data.groupby(["DATETIME"], as_index=False)['MESSAGE']
        timelineuserdf = timelineuser.count()
        timelinealldf = timelineall.count()
        timelineuserdf.columns = ['USERNAME', 'date', 'count']
        configvars.no_of_days = len(timelineall)
        timelinealldf.columns = ['date', 'count']
        for i in timelineuserdf['USERNAME'].unique():
            Timeline_stats = {"timelineStat": {"mostActiveDate": configvars.userdata.get(
                i)['mostActiveDate'], "value": str(data[data['USERNAME'] == i]['DATE'].value_counts()[0])}}
            Timeline_data = {"timelineUsage": timelineuserdf[timelineuserdf['USERNAME'] == i][[
                'date', 'count']].to_dict(orient='records')}
            Timeline_stats.update(Timeline_data)
            timeline.add(i, Timeline_stats)
        Timeline_statsall = {"timelineStat": {"mostActiveDate": data['DATE'].value_counts(
        ).idxmax(), "value": str(data['DATE'].value_counts()[0])}}
        Timeline_dataall = {
            "timelineUsage": timelinealldf.to_dict(orient='records')}
        Timeline_statsall.update(Timeline_dataall)
        timeline.add("All", Timeline_statsall)

        return timeline

    def radarmap(data):
        radarmap = dict.my_dictionary()
        radarmapuser = data.groupby(
            ["USERNAME", "HOURS"], as_index=False)['MESSAGE']
        radarmapall = data.groupby(["HOURS"], as_index=False)['MESSAGE']
        radarmapuserdf = radarmapuser.count()
        radarmapalldf = radarmapall.count()
        radarmapuserdf.columns = ['USERNAME', 'time', 'count']
        radarmapalldf.columns = ['time', 'count']
        for i in radarmapuserdf['USERNAME'].unique():
            user = radarmapuserdf[radarmapuserdf['USERNAME']
                                  == i][['time', 'count']]
            Radarmap_stats = {"radarmapStat": {"mostActiveHour": str(user.sort_values("count").iloc[-1]['time']), "leastActiveHour": str(
                user.sort_values("count").iloc[0]['time']), "averageTextsPerHour": sum(user['count'])/(configvars.no_of_days * 24)}}
            lefthours = list(set(
                [*range(0, 23, 1)]) - set(list(radarmapuserdf[radarmapuserdf['USERNAME'] == i]['time'])))
            if lefthours:
                d = {'time': lefthours}
                df = pd.DataFrame(data=d)
                df['count'] = 0
                user = user.append(df).sort_values("time", ignore_index=True)
            Radarmap_Usage = {"radarmapUsage": user.to_dict(orient="records")}
            Radarmap_Usage.update(Radarmap_stats)
            radarmap.add(i, Radarmap_Usage)
        lefthoursall = list(set([*range(0, 23, 1)]) -
                            set(list(radarmapalldf['time'])))
        if lefthoursall:
            d = {'time': lefthoursall}
            df = pd.DataFrame(data=d)
            df['count'] = 0
            radarmapalldf = radarmapalldf.append(
                df).sort_values("time", ignore_index=True)
        Radarmap_statsall = {"radarmapStat": {"mostActiveHour": str(radarmapalldf.sort_values("count").iloc[-1]['time']), "leastActiveHour": str(
            radarmapalldf.sort_values("count").iloc[0]['time']), "averageTextsPerHour": sum(radarmapalldf['count'])/(configvars.no_of_days * 24)}}
        Radarmap_Usageall = {
            "radarmapUsage": radarmapalldf.to_dict(orient="records")}
        Radarmap_Usageall.update(Radarmap_statsall)
        radarmap.add("All", Radarmap_Usageall)
        return radarmap

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
                "emoji": configvars.emojidata,
                "wordcloud": configvars.worddata,
                "timeline": getData.timeline(data),
                "radarMap": getData.radarmap(data),
                "summary": getData.summary(data),
                "basedOnDays": getData.basedonday(data),
                "userspecific": configvars.userdata,
            },
            "usernames": getData.usernameonlydict(data),
            "filename": filename[19:-4],
            "example": False
        }
        return analysis
