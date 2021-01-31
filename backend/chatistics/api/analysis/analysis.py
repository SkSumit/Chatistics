from chatistics.api.analysis.days import basedonDay


def analysis(data):
    analysis = {
                    "basedOnDays" : basedonDay(data), 
                    "basedOnTime" : basedonDay(data)          
    } 
    return analysis