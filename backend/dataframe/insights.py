import pandas as pd

def generalstats(data):
    print(len(data[data['MESSAGE'] != ""]))#No of msgs
    print(len(data[data['MESSAGE'] == '<media omitted>']))#Number of media
    print(len(data[data['MESSAGE'] != '']['USERNAME'].unique()))#Number of users
    print(len(data['DATE'].unique())) #Days on WhatsApp Chat

def activity(data):
    print(data['DATE'].value_counts().idxmax()) #Date on which max conversation occured
    print(data['DATE'].value_counts().idxmin()) #Date on which minimum conversation occured
    print(data['TIME'].value_counts().idxmax()) #Time on which max conversation occured
    print(data['TIME'].value_counts().idxmin()) #Time on which min converesation occured    

def insights(data):
    data=pd.DataFrame(data)
    generalstats(data)
    activity(data)