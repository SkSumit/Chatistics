import re


def correct(listnew):
    try:
        r=re.compile(r"[\d]{1,2}/[\d]{1,2}/[\d]{1,2}, [\d]{1,2}:[\d]{1,2} (?:AM|PM|am|pm) - ")
        CORPUS = list(listnew)
        updated = list()
        for i in CORPUS:
            x=re.search(r , i)
            if x:
                updated.append(i)
            else:
                updated[-1] = str(updated[-1] + " " + i)    
        return updated    
    except(IndexError):
        raise Exception("Not a What's App txt file")                    

def preprocess(content):
        CORPUS = list(content)
        stopwords = [".*^$",".*security code changed.",".* and calls are end-to-end encrypted",".*changed their phone number",".*changed this group's icon",".*turned on disappearing messages",".*turned on disappearing messages",".*turned off disappearing messages",".*added you",".*left",".*new added you"
        ,'.*changed the subject from','.*changed the group description','.*deleted this group','.*added','.*settings to allow all participants to send messages'
        ,'.*settings to allow only admins to send messages to this group','.*deleted the group description','.*removed','.*no longer an admin','.*now an admin','.*chat is with a business account','.*to this chat and calls are now secured with',".*created group"]
        r=re.compile('|'.join(stopwords))
        for i in list(filter(r.match, CORPUS)):
            CORPUS.remove(i)
        correct(CORPUS)
        try:    
            CORPUS=correct(CORPUS)
            return CORPUS
        except(ValueError):
            raise Exception("Not a What's App txt file")