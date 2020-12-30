import nltk
import re
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
from nltk.stem import WordNetLemmatizer

nltk.download('punkt')

def tokenCreation(content):
    tokenContent = nltk.sent_tokenize(content)
    # for i in range(len(tokenContent)):
    #     words = nltk.word_tokenize(tokenContent[i])
    #     tokenContent[i] = ''.join(words)
    return tokenContent

def corpus(tokenConent):
    CORPUS = []
    for i in range(len(tokenConent)):
        review = re.sub('','',tokenConent[i])
        review = review.lower()
        review = review.split()
        review = ' '.join(review)
        CORPUS.append(review)
    return CORPUS

