import re
from collections import Counter
import pandas as pd
from chatistics.api.user.user import usernameid
from chatistics.dataframe.dict import my_dictionary
from chatistics.api.summary.summary import word_list


def wordsListNestedUser(data,username):
    if username != 'All':
        word = [x.split() for x in data[data['USERNAME'] == username]['MESSAGE']]
        return word
    elif 'All' == username:
        word = [x.split() for x in data['MESSAGE'].tolist()]
        return word
        
def wordCountUser(data,username):
    words=wordsListNestedUser(data,username)
    word, letter, link = word_list(words)
    return word, letter, link;

def wordcloudUser(data,username,num):  
    words, letters, links = wordCountUser(data,username)
    worddata=pd.DataFrame(Counter(words).most_common()[:num], columns=['text','value']).to_dict(orient='records')                
    wordstats={'Avg_word_per_text':len(words)/len(data),'Total_Words':len(words),'Total_links':len(links),'Total_letters':len(letters),'Total_lettrs_per_word':len(letters)/len(words)}                
    return {
                'word_usage':worddata, 
                'word_stat':wordstats
        }

def wordcloud(data):
    wordcloud = my_dictionary() 
    for i in usernameid(data):
        wordcloud.add( i, wordcloudUser(data,i,50) )
    return wordcloud