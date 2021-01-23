import re
from collections import Counter
import pandas as pd
from chatistics.api.user.user import usernameid


def word_list(word):
    words,letters,links = [],[],[]
    for sublist in word:           #Creating a SINGLE LIST from NESTED LIST
        for item in sublist:
            r1 = re.search('.*http',item)
            if r1:
                links.append(item)
            if item != "<media" and item != "omitted>":   #have to add stops words
                words.append(item)
            for letter in item:
                letters.append(letter)
    return words, letters, links;

def wordsListNestedall(data):
    word = [x.split() for x in data['MESSAGE'].tolist()]
    return word

def wordCountAll(data):
    words=wordsListNestedall(data)
    word, letter, link = word_list(words)
    return word, letter, link;

def wordcloudAll(data):  
    words, letters, links = wordCountAll(data)
    worddata=pd.DataFrame(Counter(words).most_common()[:50], columns=['WORD','FREQUENCY']).to_dict(orient='records')                
    wordstats={'Avg_word_per_text':len(words)/len(data),'Total_Words':len(words),'Total_links':len(links),'Total_letters':len(letters),'Total_lettrs_per_word':len(letters)/len(words)}                
    return {  "all":
                {
                'word_usage':worddata ,
                'word_stat':wordstats
           }
    } 
    
def wordsListNestedUser(data,username):
    word = [x.split() for x in data[data['USERNAME'] == username]['MESSAGE']]
    return word
 
def wordCountUser(data,username):
    words=wordsListNestedUser(data,username)
    word, letter, link = word_list(words)
    return word, letter, link;

def wordcloudUser(data,username):  
    words, letters, links = wordCountUser(data,username)
    worddata=pd.DataFrame(Counter(words).most_common()[:50], columns=['WORD','FREQUENCY']).to_dict(orient='records')                
    wordstats={'Avg_word_per_text':len(words)/len(data),'Total_Words':len(words),'Total_links':len(links),'Total_letters':len(letters),'Total_lettrs_per_word':len(letters)/len(words)}                
    return {   username :
                {
                    'word_usage':worddata , 
                    'word_stat':wordstats
            }
        }

def wordcloud(data):
    wordcloud = []
    wordcloud.append(wordcloudAll(data))
    for i in usernameid(data):
        wordcloud.append(wordcloudUser(data,i))
    return wordcloud