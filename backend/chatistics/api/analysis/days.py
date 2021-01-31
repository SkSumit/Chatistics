from chatistics.api.user.user import usernameid
from chatistics.dataframe.dict import my_dictionary
from chatistics.api.user.user import usernameonly


def basedonday(data):
    basedonDay = my_dictionary()
    datauser = data.groupby(["USERNAME","DAY"], as_index=False)["MESSAGE"]
    dataall = data.groupby(['DAY'] , as_index=False)['MESSAGE']
    data=datauser.count()
    dataall = dataall.count()
    dataall.sort_values(by=['DAY','MESSAGE'],ascending=False,inplace=True)
    for i in list(usernameonly(data)):
        basedonDay.add(i,data[data['USERNAME']==i][['DAY','MESSAGE']].to_dict(orient='records'))
    basedonDay.add("All",dataall.to_dict(orient='records'))    
    return basedonDay