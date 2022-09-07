import re

def sep(i):
    return i.split(": ")

def replace(str1):
    listtorep = ["[","-",","]
    for i in listtorep:
        str1 = str1.replace(i,"")
    str1 = str1.replace("]"," ")
    return str1.split("  ")

def correct(listnew):
    date, time, username, messages = ([] for i in range(4))
    counter = 1
    try:
        r=re.compile(r"[\d]{1,2}/[\d]{1,2}/[\d]{1,4} (([\d]{1,2}:[\d]{1,2}|[\d]{1,2}:[\d]{1,2}:[\d]{1,2}) (AM|PM|am|pm)|[\d]{1,2}:[\d]{1,2})")
        CORPUS = list(listnew)
        for i in CORPUS:
            ogsplit=sep(i)
            dtu=replace(ogsplit[0])#date,time,username
            x=re.match(r , dtu[0])
            if x:
                try:
                    username.append(" ".join(dtu[1:]))#username
                    messages.append(" ".join(ogsplit[1:]))#message
                    dt=dtu[0]
                    date.append(dt.split(" ")[0].split(" ")[0])#date
                    time.append(" ".join(dt.split(" ")[1:]))#time
                    counter+=1
                except:
                    if counter == 1:
                        pass
            else:
                if counter == 1:
                    pass
                else:
                    messages[-1] = str(messages[-1] + " " + i)           
    except(IndexError):
        raise Exception("Not a What's App txt file")
    return date , time , username , messages                   

def preprocess(content):
        CORPUS = list(content)
        stopwords = [".*\ufeff",".*joined using this group's invite link",".*this group's settings to allow",".*changed to",".*that you are trying to send a payment",".*Messages and calls are end",".* Tap for more info.",".*security code changed.",".*messages and calls are end-to-end encrypted",".*changed their phone number",".*changed this group's icon",".*turned on disappearing messages",".*turned on disappearing messages",".*turned off disappearing messages",".*added you",".*left",".*new added you"
        ,'.*changed the subject from','.*changed the group description','.*deleted this group','.*added','.*settings to allow all participants to send messages'
        ,'.*settings to allow only admins to send messages to this group','.*deleted the group description','.*removed','.*no longer an admin','.*now an admin','.*chat is with a business account','.*to this chat and calls are now secured with',".*created group"]
        r=re.compile('|'.join(stopwords))
        for i in list(filter(r.match, CORPUS)):
            CORPUS.remove(i)   
        try:    
            date , time , username , messages=correct(CORPUS)
            return date , time , username , messages
        except(ValueError):
            raise Exception("Not a What's App txt file")