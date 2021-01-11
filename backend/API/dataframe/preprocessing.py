import re

def correct(listnew):
    r=re.compile(r"[\d]{1,2}/[\d]{1,2}/[\d]{1,2}, [\d]{1,2}:[\d]{1,2} ")
    CORPUS = list(listnew)
    updated = list()
    for i in CORPUS:
        x=re.search(r , i)
        if x:
            updated.append(i)
        else:
            updated[-1] = str(updated[-1] + " " + i)
    return updated                        

def preProcess(content):
    CORPUS = list(content)
    stopwords = [".*^$",".*security code changed. tap for more info.",".*messages and calls are end-to-end encrypted",".*changed their phone number",".*changed this group's icon"]
    r=re.compile('|'.join(stopwords))
    for i in list(filter(r.match, CORPUS)):
        CORPUS.remove(i)
    CORPUS=correct(CORPUS)        
    return CORPUS