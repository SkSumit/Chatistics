from chatistics.api.user.user import usernameid
from chatistics.dataframe.dict import my_dictionary


def days(data):
    days = data[data['MESSAGE'] != '']['DAY'].unique()
    return days
    
def basedonDayuserwise(data,username):
    dayss = []
    for day in days(data):
        if username != "All":
            value = len(data[(data['USERNAME'] == username ) & ( data['DAY'] == day) ])
            frequency = len(data[(data['USERNAME'] == username ) & ( data['DAY'] == day) ]['DATE'].unique())
        elif username == "All":
            value = len(data[data['DAY'] == day])
            frequency = len(data[data['DAY'] == day]['DATE'].unique())
        basedonDay = {
                        "day"       :   day,
                        "value"     :   value,
                        "frequency" :   frequency
        }
        dayss.append(basedonDay)
    return {
            "days" : dayss
    }

def basedonDay(data):
    basedonDay = my_dictionary()
    for i in usernameid(data):
        basedonDay.add(i,basedonDayuserwise(data,i))   
    return basedonDay